import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/pacotes'

export const listPacote = () => axios.get(REST_API_BASE_URL);

export const createPacote = (pacote) => axios.post(REST_API_BASE_URL,pacote);

export const getPacote = (pacoteId) => axios.get(REST_API_BASE_URL + '/' + pacoteId);

export const updatePacote = (pacoteId, pacote) => axios.put(REST_API_BASE_URL + '/' + pacoteId, pacote);

export const deletePacote = (pacoteId) => axios.delete(REST_API_BASE_URL + '/' + pacoteId);

export const  getPacoteById =(pacoteId)  => axios.get(REST_API_BASE_URL + '/' + pacoteId);