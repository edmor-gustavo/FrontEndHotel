import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from 'react-icons/fa';
import { deleteCliente, listCliente } from "../../services/ClienteService.js";

const ListClienteComponent = () => {
    const [cliente, setCliente] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllCliente();
    }, []);

    function getAllCliente() {
        listCliente().then((response) => {
            setCliente(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function addNewCliente() {
        navigator('/add-cliente');
    }

    function updateCliente(id) {
        navigator(`/edit-cliente/${id}`);
    }

    function viewCliente(id) {
        navigator(`/view-cliente/${id}`);
    }

    function removeCliente(id) {
        deleteCliente(id).then(() => {
            getAllCliente();
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'> Clientes Do Hotel</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do cliente</th>
                    <th>Identidade</th>
                    <th>contacto</th>
                    <th>numero de quarto</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cliente.map(cliente =>
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.identidade}</td>
                        <td>{cliente.contacto}</td>
                        <td>{cliente.numeroQuarto}</td>
                        <td>
                            <button className='btn btn-info mr-1' onClick={() => updateCliente(cliente.id)}>
                                <FaEdit />
                            </button>
                            <button className='btn btn-danger mr-1' onClick={() => removeCliente(cliente.id)}>
                                <FaTrashAlt />
                            </button>
                            <button className="btn btn-info mr-1" onClick={() => viewCliente(cliente.id)}>
                                <FaEye />
                            </button>
                        </td>
                    </tr>
                )}
                <tr>
                    <td colSpan="5">
                        <button className='btn btn-success' onClick={addNewCliente}>
                            <FaPlus />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListClienteComponent;
