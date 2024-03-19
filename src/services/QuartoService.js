import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/quartos';

export const listQuartos = () => axios.get(REST_API_BASE_URL);

export const createQuarto = (quarto) => axios.post(REST_API_BASE_URL, quarto);

export const getQuarto = (quartoId) => axios.get(`${REST_API_BASE_URL}/${quartoId}`);

export const updateQuarto = (quartoId, quarto) => axios.put(`${REST_API_BASE_URL}/${quartoId}`, quarto);

export const deleteQuarto = (quartoId) => axios.delete(`${REST_API_BASE_URL}/${quartoId}`);

export const getQuartoById = (quartoId) => axios.get(`${REST_API_BASE_URL}/${quartoId}`);
