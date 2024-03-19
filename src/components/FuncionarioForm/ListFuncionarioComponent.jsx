// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from 'react-icons/fa';
import { listFuncionario, deleteFuncionario } from "../../services/FuncionarioService.js";
import { useNavigate } from "react-router-dom";

const ListFuncionarioComponent = () => {
    const [funcionario, setFuncionario] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllFuncionario();
    }, []);

    function getAllFuncionario() {
        listFuncionario()
            .then((response) => {
                setFuncionario(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addNewFuncionario() {
        navigator("/add-funcionario");
    }

    function updateFuncionario(id) {
        navigator(`/edit-funcionario/${id}`);
    }

    function viewFuncionario(id) {
        navigator(`/view-funcionario/${id}`);
    }

    function removeFuncionario(id) {
        deleteFuncionario(id)
            .then(() => {
                getAllFuncionario();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center"> Funcionários Do Hotel</h2>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do Funcionário</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {funcionario.map((funcionario) => (
                    <tr key={funcionario.id}>
                        <td>{funcionario.id}</td>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.email}</td>
                        <td>
                            <button className="btn btn-info" onClick={() => updateFuncionario(funcionario.id)}>
                                <FaEdit />
                            </button>
                            <button className="btn btn-danger" onClick={() => removeFuncionario(funcionario.id)}>
                                <FaTrashAlt />
                            </button>
                            <button className="btn btn-info" onClick={() => viewFuncionario(funcionario.id)}>
                                <FaEye />
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="4">
                        <button className="btn btn-primary mb-2" onClick={addNewFuncionario}>
                            <FaPlus />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListFuncionarioComponent;
