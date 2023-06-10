import React, { useState } from 'react';
import axios from 'axios';
import './CadClin.css';

function CadastroClin() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [crm, setCrm] = useState('');
  const [situacao, setSituacao] = useState('');

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;
      setRua(data.logradouro);
      setBairro(data.bairro);
      setEstado(data.uf);
    } catch (error) {
      console.log(error);
    }
  };

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cadastrarclin', {
        nome,
        email,
        telefone,
        cnpj,
        cep,
        rua,
        bairro,
        estado,
        crm,
        situacao,
      });

      setNome('');
      setEmail('');
      setTelefone('');
      setCnpj('');
      setCep('');
      setRua('');
      setBairro('');
      setEstado('');
      setCrm('');
      setSituacao('');

      console.log(response.data);
      alert(response.data.msg);
    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar a clínica. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h1 className='title2'>Faça o Cadastro da sua Clínica</h1>
      <form onSubmit={registrar} action="/">
        
      <img className="img-uso" src="./img/clinica.png" alt="logo globo" />
        <h3>Dados de Acesso</h3>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>

        <h3>Dados da Clínica</h3>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input type="text" id="cep" value={cep} onBlur={buscarEndereco} onChange={(e) => setCep(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="rua">Rua:</label>
          <input type="text" id="rua" value={rua} onChange={(e) => setRua(e.target.value)} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="bairro">Bairro:</label>
          <input type="text" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="estado">Estado:</label>
          <input type="text" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="crm">CRM:</label>
          <input type="text" id="crm" value={crm} onChange={(e) => setCrm(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="situacao">Situação Cadastral:</label>
          <input type="text" id="situacao" value={situacao} onChange={(e) => setSituacao(e.target.value)} required />
        </div>

        <div className="form-group">
          <input type="submit" value="Cadastrar" />
          <p> </p>
                <a type="button" className="btn btn-primary w-100" href="/login">Voltar</a>
        </div>
      </form>
    </div>
  );
}

export default CadastroClin;
