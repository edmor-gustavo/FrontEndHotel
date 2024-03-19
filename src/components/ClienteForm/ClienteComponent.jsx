// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {createCliente, getCliente, updateCliente} from "../../services/ClienteService.js";
import {useNavigate, useParams} from "react-router-dom";


const ClienteComponent =() => {

    const [nome, setNome] = useState('')
    const [identidade, setIdentidade] = useState('')
    const [contacto, setContacto] = useState('')
    const [numeroQuarto, setNumeroQuarto] = useState('')

    const [errors,setErrors] = useState({
        nome:'',
        identidade:'',
        contacto:'',
        numero_quarto:''
    })
    const {id} = useParams();

    const navigator = useNavigate();

    useEffect(() => {
        if (id){
            getCliente(id).then((response) =>{
                setNome(response.data.nome);
                setIdentidade(response.data.identidade);
                setContacto(response.data.contacto);
                setNumeroQuarto(response.data.numero_quarto);
            }).catch(error => {
                    console.error(error);
                }

            )

        }
    }, [id]);

    function saveOrUpdateCliente(e) {
        e.preventDefault();

        if (validateForm () )  {
            const cliente = {nome, identidade,contacto,numeroQuarto}
            console.log(cliente)

            if (id){
                updateCliente(id, cliente).then((response) => {
                    console.log(response.data);
                    navigator('/cliente');
                }).catch(error => {
                    console.error(error);
                })
            }else {
                createCliente(cliente).then((response) => {
                    console.log(response.data);
                    navigator('/cliente')
                }).catch(error =>{
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

        if (!identidade.trim()) {
            errorsCopy.identidade = 'A Identidade é obrigatório';
            valid = false;
        } else {
            errorsCopy.identidade = '';
        }
        if (!identidade.trim()) {
            errorsCopy.contacto = 'O Contacto é obrigatório';
            valid = false;
        } else {
            errorsCopy.contacto = '';
        }
        if (!identidade.trim()) {
            errorsCopy.numeroQuarto = 'O numero do Quarto é obrigatório';
            valid = false;
        } else {
            errorsCopy.numeroQuarto = '';
        }

        setErrors(errorsCopy);
        return valid;
    }
    function pageTitle(){
        if (id){
            return <h2 className='text-center'>Atualizar cliente</h2>
        } else {
            return <h2 className='text-center'> Adicionar cliente</h2>
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
                                   className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                                   onChange={(e) => setNome(e.target.value)}/>
                            {errors.nome && <div className='invalid-feedback'> {errors.nome}  </div>}
                        </div>

                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Identidade:</label>
                            <input type={"text"}
                                   name='Identidade'
                                   value={identidade}
                                   className={`form-control ${errors.identidade ? 'is-invalid' : ''}`}
                                   onChange={(e) => setIdentidade(e.target.value)}/>
                            {errors.identidade && <div className='invalid-feedback'> {errors.identidade}</div>}
                        </div>
                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Contacto:</label>
                            <input type={"text"}
                                   name='Contacto'
                                   value={contacto}
                                   className={`form-control ${errors.contacto ? 'is-invalid' : ''}`}
                                   onChange={(e) => setContacto(e.target.value)}/>
                            {errors.contacto && <div className='invalid-feedback'> {errors.contacto}</div>}
                        </div>

                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Numero Do Quarto:</label>
                            <input type={"text"}
                                   name='Numero_Quarto'
                                   value={numeroQuarto}
                                   className={`form-control ${errors.numeroQuarto ? 'is-invalid' : ''}`}
                                   onChange={(e) => setNumeroQuarto(e.target.value)}/>
                            {errors.numeroQuarto && <div className='invalid-feedback'> {errors.numeroQuarto}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateCliente}> Submeter</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default ClienteComponent
