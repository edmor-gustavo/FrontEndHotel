// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuartoById } from '../../services/QuartoService';

function ViewQuarto() {
    const { id } = useParams();
    const [quarto, setQuarto] = useState(null);

    useEffect(() => {
        fetchQuarto();
    }, []);

    const fetchQuarto = async () => {
        try {
            const response = await getQuartoById(id);
            setQuarto(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Detalhes do Quarto</h2>
            {quarto && (
                <div>
                    <p><strong>ID:</strong> {quarto.id}</p>
                    <p><strong>Número do Quarto:</strong> {quarto.numero}</p>
                    <p><strong>Tipo:</strong> {quarto.tipo}</p>
                    <p><strong>Disponível:</strong> {quarto.disponivel ? 'Sim' : 'Não'}</p>
                </div>
            )}
        </div>
    );
}

export default ViewQuarto;
