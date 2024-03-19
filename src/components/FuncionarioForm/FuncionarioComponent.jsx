// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {createFuncionario, getFuncionario, updateFuncionario} from "../../services/FuncionarioService.js";
import {useNavigate, useParams} from "react-router-dom";


const FuncionarioComponent =() => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        nome: '',
        email: ''
    })
    const {id} = useParams();

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getFuncionario(id).then((response) => {
                setNome(response.data.nome);
                setEmail(response.data.email);
            }).catch(error => {
                    console.error(error);
                }
            )

        }
    }, [id]);

    function saveOrUpdateFuncionario(e) {
        e.preventDefault();

        if (validateForm()) {
            const funcionario = {nome, email}
            console.log(funcionario)

            if (id) {
                updateFuncionario(id, funcionario).then((response) => {
                    console.log(response.data);
                    navigator('/funcionario');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createFuncionario(funcionario).then((response) => {
                    console.log(response.data);
                    navigator('/funcionario')
                }).catch(error => {
                    console.error(error);
                })

            }

        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (!nome.trim()) {
            errorsCopy.nome = 'O nome é obrigatório';
            valid = false;
        } else {
            errorsCopy.nome = '';
        }

        if (!email.trim()) {
            errorsCopy.email = 'O email é obrigatório';
            valid = false;
        } else {
            errorsCopy.email = '';
        }

        setErrors(errorsCopy);
        return valid;
    }
        function pageTitle() {
            if (id) {
                return <h2 className='text-center'>Atualizar funcionário</h2>
            } else {
                return <h2 className='text-center'> Adicionar Funcionario</h2>
            }
        }


    return (
        <div className={'container'}>
            <br/> <br/>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    {
                        pageTitle()
                    }
                    <form>
                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Nome:</label>
                            <input type={'text'}
                                   name='Nome'
                                   value={nome}
                                   className={`form-control ${ errors.nome? 'is-invalid':''}`}
                                   onChange={(e) => setNome(e.target.value)}/>
                            { errors.nome && <div className='invalid-feedback'> { errors.nome}  </div>}
                        </div>

                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Email:</label>
                            <input type={"text"}
                                   name='Email'
                                   value={email}
                                   className={`form-control ${errors.email? 'is-invalid': ''}`}
                                   onChange={(e) => setEmail(e.target.value)}/>
                            { errors.email && <div className='invalid-feedback'> {errors.email }</div>}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateFuncionario}> Submeter</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default FuncionarioComponent
