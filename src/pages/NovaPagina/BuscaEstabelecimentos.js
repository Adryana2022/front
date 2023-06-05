// BuscaEstabelecimentos.js
import React, { useState } from 'react';
import axios from 'axios';
import './styleBusca.css';

function BuscaEstabelecimentos() {
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [crm, setCrm] = useState('');
  const [situacaoCadastral, setSituacaoCadastral] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const resposta = await axios.post('http://localhost:5000/busca', {
          nomeEstabelecimento,
          cnpj,
          bairro,
          cidade,
          estado,
          crm,
          situacao
          
      })
          setNomeEstabelecimento('')
          setCnpj('')
          setBairro('')
          setCidade('')
          setEstado('')
          setCrm('')
          setSituacaoCadastral('')
         
      alert(resposta.data.msg)
      console.log(resposta.data)
      
      
      
      

      }
      catch(err){
          alert(err.request.responseText)
          console.log(err.request.responseText)

      }
   

    console.log('Dados de busca:', {
      nomeEstabelecimento,
      cnpj,
      bairro,
      cidade,
      estado,
      crm,
      situacaoCadastral,
    });
  };

  return (
    <div>
      
      <h2 > Busca por Estabelecimentos de Saúde</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomeEstabelecimento">Nome do Estabelecimento:</label>
        <input
          type="text"
          id="nomeEstabelecimento"
          value={nomeEstabelecimento}
          onChange={(e) => setNomeEstabelecimento(e.target.value)}
        />

        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />

        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Selecione um estado</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>

        <label htmlFor="crm">CRM:</label>
        <input
          type="text"
          id="crm"
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
        />

        <label htmlFor="situacaoCadastral">Situação Cadastral:</label>
        <select
          id="situacaoCadastral"
          value={situacaoCadastral}
          onChange={(e) => setSituacaoCadastral(e.target.value)}
        >
          <option value="">Selecione uma situação</option>
          <option value="Ativa">Ativa</option>
          <option value="Baixada">Baixada</option>
        </select>

        <div>
          <button type="submit">Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default BuscaEstabelecimentos;
