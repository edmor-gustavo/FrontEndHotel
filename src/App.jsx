// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HeaderFuncionario from "./components/FuncionarioForm/HeaderFuncionario.jsx";
import {FaBed, FaBox, FaUser, FaUserAlt} from "react-icons/fa";
import ListFuncionarioComponent from "./components/FuncionarioForm/ListFuncionarioComponent.jsx";
import FuncionarioComponent from "./components/FuncionarioForm/FuncionarioComponent.jsx";
import ViewFuncionario from "./components/FuncionarioForm/ViewFuncionario.jsx";
import ListClienteComponent from "./components/ClienteForm/ListClienteComponent.jsx";
import ClienteComponent from "./components/ClienteForm/ClienteComponent.jsx";
import ViewCliente from "./components/ClienteForm/viewCliente.jsx";
import PacoteComponent from "./components/PacoteForm/PacoteComponent.jsx";
import QuartoComponent from "./components/QuartoForm/QuartoComponent.jsx";
import ListQuartoComponent from "./components/QuartoForm/ListQuartoComponent.jsx";
import ListPacoteComponent from "./components/PacoteForm/ListPacoteComponent.jsx";
import ViewQuarto from "./components/QuartoForm/ViewQuarto.jsx";
import ViewPacote from "./components/PacoteForm/ViewPacote.jsx";




function App() {
    return (
        <BrowserRouter>
            <HeaderFuncionario />
            <div className="app-container">
                <div className="sidebar">
                    <h2>Menu</h2>
                    <div className="menu-item">
                        <Link to="/funcionario">
                            <div className="menu-icon">
                                <FaUser />
                            </div>
                            Funcionário
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/cliente">
                            <div className="menu-icon">
                                <FaUserAlt />
                            </div>
                            Cliente
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/quarto">
                            <div className="menu-icon">
                                <FaBed />
                            </div>
                            Quarto
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/pacote">
                            <div className="menu-icon">
                                <FaBox />
                            </div>
                            Pacote
                        </Link>
                    </div>
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/funcionario" element={<ListFuncionarioComponent />} />
                        <Route path="/add-funcionario" element={<FuncionarioComponent />} />
                        <Route path="/edit-funcionario/:id" element={<FuncionarioComponent />} />
                        <Route path="/view-funcionario/:id" element={<ViewFuncionario />} />
                        <Route path="/cliente" element={<ListClienteComponent />} />
                        <Route path="/add-cliente" element={<ClienteComponent />} />
                        <Route path="/edit-cliente/:id" element={<ClienteComponent />} />
                        <Route path="/view-cliente/:id" element={<ViewCliente />} />
                        <Route path="/quarto" element={<ListQuartoComponent />} />
                        <Route path="/add-quarto" element={<QuartoComponent />} />
                        <Route path="/view-quarto/:id" element={<ViewQuarto/>} />
                        <Route path="/edit-quarto/:id" element={<QuartoComponent/>} />
                        {/* Adicione rotas para editar e visualizar quarto, se necessário */}
                        <Route path="/pacote" element={<ListPacoteComponent />} />
                        <Route path="/add-pacote" element={<PacoteComponent />} />
                        <Route path="/edit-pacote/:id" element={<PacoteComponent />} />
                        <Route path="/view-pacote/:id" element={<ViewPacote />} />
                        {/* Adicione rotas para editar e visualizar pacote, se necessário */}
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
