import React, { useState } from "react";
import axios from "axios";
import './senha.css'

function RecuperacaoSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar solicitação para redefinição de senha
      const response = await axios.post('http://localhost:5000/recuperar', {
        email
      });
      console.log(response)
      // Verificar a resposta da API
      if (response.status === 200) {
        setMensagem(response.data.msg);
      } else {
        setMensagem(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      setMensagem('Houve um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
    }
  }

  return (
    <div>
      <h1>Página de Recuperação de Senha</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Digite o seu endereço de email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default RecuperacaoSenha;
