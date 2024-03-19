import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/cliente';

export const listCliente = () => axios.get(REST_API_BASE_URL);

export const createCliente = (cliente ) => axios.post(REST_API_BASE_URL,cliente);

export const getCliente  = (clienteId) => axios.get(REST_API_BASE_URL + '/' + clienteId);

export const updateCliente  = (clienteId, cliente ) => axios.put(REST_API_BASE_URL + '/' + clienteId, cliente);

export const deleteCliente  = (clienteId) => axios.delete(REST_API_BASE_URL + '/' + clienteId);

export const getClienteById = (clienteId) => axios.get(REST_API_BASE_URL + '/' + clienteId);
