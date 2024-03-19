// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClienteById } from '../../services/ClienteService.js'; // Importe a função para obter informações de um funcionário por ID

function ViewCliente() {
    const { id } = useParams(); // Obtenha o ID do parâmetro de rota
    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        fetchCliente(); // Quando o componente é montado, busca as informações do funcionário pelo ID
    }, []);

    const fetchCliente = async () => {
        try {
            const response = await getClienteById(id); // Chama a função para obter informações do funcionário pelo ID
            setCliente(response.data); // Define as informações do funcionário no estado
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Detalhes do Funcionário</h2>
            {cliente && (
                <div>
                    <p><strong>ID:</strong> {cliente.id}</p>
                    <p><strong>Nome:</strong> {cliente.nome}</p>
                    <p><strong>Identidade:</strong> {cliente.identidade}</p>
                    <p><strong>Contacto:</strong> {cliente.contacto}</p>
                    <p><strong>NumeroQuarto:</strong> {cliente.numeroQuarto}</p>
                    {/* Adicione mais informações conforme necessário */}
                </div>
            )}
        </div>
    );
}

export default ViewCliente;