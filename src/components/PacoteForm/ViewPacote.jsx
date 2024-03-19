// ViewPacote.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPacoteById } from '../../services/PacoteService'; // Importe a função para obter informações de um pacote por ID

function ViewPacote() {
    const { id } = useParams(); // Obtenha o ID do parâmetro de rota
    const [pacote, setPacote] = useState(null);

    useEffect(() => {
        fetchPacote(); // Quando o componente é montado, busca as informações do pacote pelo ID
    }, []);

    const fetchPacote = async () => {
        try {
            const response = await getPacoteById(id); // Chama a função para obter informações do pacote pelo ID
            setPacote(response.data); // Define as informações do pacote no estado
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Detalhes do Pacote</h2>
            {pacote && (
                <div>
                    <p><strong>ID:</strong> {pacote.id}</p>
                    <p><strong>Nome:</strong> {pacote.nome}</p>
                    <p><strong>Preço:</strong> {pacote.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    <p style={{ whiteSpace: 'pre-wrap' }}><strong>Descrição:</strong> {pacote.descricao}</p>
                    {/* Adicione mais informações conforme necessário */}
                </div>
            )}
        </div>
    );
}

export default ViewPacote;
