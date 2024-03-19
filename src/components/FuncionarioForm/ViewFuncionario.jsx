// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFuncionarioById } from '../../services/FuncionarioService'; // Importe a função para obter informações de um funcionário por ID

function ViewFuncionario() {
    const { id } = useParams(); // Obtenha o ID do parâmetro de rota
    const [funcionario, setFuncionario] = useState(null);

    useEffect(() => {
        fetchFuncionario(); // Quando o componente é montado, busca as informações do funcionário pelo ID
    }, []);

    const fetchFuncionario = async () => {
        try {
            const response = await getFuncionarioById(id); // Chama a função para obter informações do funcionário pelo ID
            setFuncionario(response.data); // Define as informações do funcionário no estado
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Detalhes do Funcionário</h2>
            {funcionario && (
                <div>
                    <p><strong>ID:</strong> {funcionario.id}</p>
                    <p><strong>Nome:</strong> {funcionario.nome}</p>
                    <p><strong>Email:</strong> {funcionario.email}</p>
                    {/* Adicione mais informações conforme necessário */}
                </div>
            )}
        </div>
    );
}

export default ViewFuncionario;