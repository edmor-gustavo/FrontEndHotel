// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from 'react-icons/fa';
import { listQuartos, deleteQuarto } from "../../services/QuartoService";
import { useNavigate } from "react-router-dom";

const ListQuartoComponent = () => {
    const [quartos, setQuartos] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllQuartos();
    }, []);

    function getAllQuartos() {
        listQuartos()
            .then((response) => {
                setQuartos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addNewQuarto() {
        navigator("/add-quarto");
    }

    function updateQuarto(id) {
        navigator(`/edit-quarto/${id}`);
    }

    function viewQuarto(id) {
        navigator(`/view-quarto/${id}`);
    }

    function removeQuarto(id) {
        deleteQuarto(id)
            .then(() => {
                getAllQuartos();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">Quartos do Hotel</h2>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Número do Quarto</th>
                    <th>Tipo</th>
                    <th>Disponível</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {quartos.map((quarto) => (
                    <tr key={quarto.id}>
                        <td>{quarto.id}</td>
                        <td>{quarto.numero}</td>
                        <td>{quarto.tipo}</td>
                        <td>{quarto.disponivel ? 'Sim' : 'Não'}</td>
                        <td>
                            <button className="btn btn-info" onClick={() => updateQuarto(quarto.id)}>
                                <FaEdit />
                            </button>
                            <button className="btn btn-danger" onClick={() => removeQuarto(quarto.id)}>
                                <FaTrashAlt />
                            </button>
                            <button className="btn btn-info" onClick={() => viewQuarto(quarto.id)}>
                                <FaEye />
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="5">
                        <button className="btn btn-primary mb-2" onClick={addNewQuarto}>
                            <FaPlus /> Adicionar Quarto
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListQuartoComponent;
