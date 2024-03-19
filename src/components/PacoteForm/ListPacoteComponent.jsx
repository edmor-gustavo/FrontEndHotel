// ListPacoteComponent.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from 'react-icons/fa';
import { listPacote, deletePacote } from "../../services/PacoteService.js";
import { useNavigate } from "react-router-dom";


const ListPacoteComponent = () => {
    const [pacotes, setPacotes] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllPacotes();
    }, []);

    function getAllPacotes() {
        listPacote()
            .then((response) => {
                setPacotes(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addNewPacote() {
        navigator("/add-pacote");
    }

    function updatePacote(id) {
        navigator(`/edit-pacote/${id}`);
    }

    function viewPacote(id) {
        navigator(`/view-pacote/${id}`);
    }

    function removePacote(id) {
        deletePacote(id)
            .then(() => {
                getAllPacotes();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center"> Pacotes do Hotel</h2>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do Pacote</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {pacotes.map((pacote) => (
                    <tr key={pacote.id}>
                        <td>{pacote.id}</td>
                        <td>{pacote.nome}</td>
                        <td>{pacote.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                        <td style={{ whiteSpace: 'pre-wrap' }}>{pacote.descricao}</td>
                        <td>
                            <button className="btn btn-info" onClick={() => updatePacote(pacote.id)}>
                                <FaEdit />
                            </button>
                            <button className="btn btn-danger" onClick={() => removePacote(pacote.id)}>
                                <FaTrashAlt />
                            </button>
                            <button className="btn btn-info" onClick={() => viewPacote(pacote.id)}>
                                <FaEye />
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="5">
                        <button className="btn btn-primary mb-2" onClick={addNewPacote}>
                            <FaPlus />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListPacoteComponent;
