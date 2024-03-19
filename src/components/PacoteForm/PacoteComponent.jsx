// PacoteComponent.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { createPacote, getPacote, updatePacote } from "../../services/PacoteService.js";
import { useNavigate, useParams } from "react-router-dom";


const PacoteComponent = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getPacote(id).then((response) => {
                setNome(response.data.nome);
                setPreco(response.data.preco);
                setDescricao(response.data.descricao);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [id]);

    function saveOrUpdatePacote(e) {
        e.preventDefault();

        const pacote = { nome, preco, descricao };

        if (id) {
            updatePacote(id, pacote).then((response) => {
                console.log(response.data);
                navigator('/pacote');
            }).catch(error => {
                console.error(error);
            });
        } else {
            createPacote(pacote).then((response) => {
                console.log(response.data);
                navigator('/pacote');
            }).catch(error => {
                console.error(error);
            });
        }
    }

    return (
        <div className={'container'}>
            <br/> <br/>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    <h2 className='text-center'>{id ? 'Atualizar Pacote' : 'Adicionar Pacote'}</h2>
                    <form>
                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Nome:</label>
                            <input type={'text'}
                                   name='nome'
                                   value={nome}
                                   className={'form-control'}
                                   onChange={(e) => setNome(e.target.value)}/>
                        </div>

                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Preço:</label>
                            <input type={"text"}
                                   name='preco'
                                   value={preco}
                                   className={'form-control'}
                                   onChange={(e) => setPreco(e.target.value)}/>
                        </div>

                        <div className={'form-group mb-2'}>
                            <label className={'form-label'}>Descrição:</label>
                            <textarea
                                name='descricao'
                                value={descricao}
                                className={'form-control'}
                                onChange={(e) => setDescricao(e.target.value)}
                                rows={6} // Defina o número de linhas para o text area
                                style={{ whiteSpace: 'pre-wrap' }} // Mantém a quebra de linha
                            />
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdatePacote}>Submeter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PacoteComponent;
