import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/funcionario'

export const listFuncionario = () => axios.get(REST_API_BASE_URL);

export const createFuncionario = (funcionario) => axios.post(REST_API_BASE_URL,funcionario);

export const getFuncionario = (funcionarioId) => axios.get(REST_API_BASE_URL + '/' + funcionarioId);

export const updateFuncionario = (funcionarioId, funcionario) => axios.put(REST_API_BASE_URL + '/' + funcionarioId, funcionario);

export const deleteFuncionario = (funcionarioId) => axios.delete(REST_API_BASE_URL + '/' + funcionarioId);

export const  getFuncionarioById =(funcionarioId)  => axios.get(REST_API_BASE_URL + '/' + funcionarioId);