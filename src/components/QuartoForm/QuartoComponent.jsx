// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { createQuarto, getQuarto, updateQuarto } from "../../services/QuartoService";
import { useNavigate, useParams } from "react-router-dom";

const QuartoComponent = () => {
    const [numero, setNumero] = useState('');
    const [tipo, setTipo] = useState('');
    const [disponivel, setDisponivel] = useState(false);

    const [errors, setErrors] = useState({
        numero: '',
        tipo: ''
    });

    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getQuarto(id).then((response) => {
                setNumero(response.data.numero);
                setTipo(response.data.tipo);
                setDisponivel(response.data.disponivel);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [id]);

    function saveOrUpdateQuarto(e) {
        e.preventDefault();

        if (validateForm()) {
            const quarto = { numero, tipo, disponivel };
            if (id) {
                updateQuarto(id, quarto).then((response) => {
                    console.log(response.data);
                    navigator('/quarto');
                }).catch(error => {
                    console.error(error);
                });
            } else {
                createQuarto(quarto).then((response) => {
                    console.log(response.data);
                    navigator('/quarto');
                }).catch(error => {
                    console.error(error);
                });
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (!numero.trim()) {
            errorsCopy.numero = 'O número é obrigatório';
            valid = false;
        } else {
            errorsCopy.numero = '';
        }

        if (!tipo.trim()) {
            errorsCopy.tipo = 'O tipo é obrigatório';
            valid = false;
        } else {
            errorsCopy.tipo = '';
        }
        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Atualizar Quarto</h2>;
        } else {
            return <h2 className='text-center'>Adicionar Quarto</h2>;
        }
    }

    return (
        <div className={'container'}>
            <br/> <br/>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    {pageTitle()}
                    <form>
                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Número:</label>
                            <input type={'text'}
                                   name='numero'
                                   value={numero}
                                   className={`form-control ${errors.numero ? 'is-invalid' : ''}`}
                                   onChange={(e) => setNumero(e.target.value)}/>
                            {errors.numero && <div className='invalid-feedback'>{errors.numero}</div>}
                        </div>

                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Tipo:</label>
                            <input type={"text"}
                                   name='tipo'
                                   value={tipo}
                                   className={`form-control ${errors.tipo ? 'is-invalid' : ''}`}
                                   onChange={(e) => setTipo(e.target.value)}/>
                            {errors.tipo && <div className='invalid-feedback'>{errors.tipo}</div>}
                        </div>

                        <div className={'form-check mb-2'}>
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="disponivelCheckbox"
                                   checked={disponivel}
                                   onChange={(e) => setDisponivel(e.target.checked)}/>
                            <label className="form-check-label" htmlFor="disponivelCheckbox">Disponível</label>
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateQuarto}>Submeter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuartoComponent;
