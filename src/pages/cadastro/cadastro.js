import React, {useState} from 'react'
import axios from 'axios'
import './cadastro.css'



function Cadastro(){
    let [nome, setNome] = useState('')
    let [email, setEmail] = useState('')
    let [senha, setSenha] = useState('')
    let [cpf, setCpf] = useState('')
    let [cep, setCep] = useState('')
    let [rua, setRua] = useState('')
    let [numero, setNumero] = useState('')
    let [bairro, setBairro] = useState('')
    let [cidade, setCidade] = useState('')
    let [estado, setEstado] = useState('')

    const mudarCep = (evento)=>{
        setCep(evento.target.value)
    }

    const buscarEndereco = async ()=>{
        try{
            const busca = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setBairro(busca.data.bairro)
            setCidade(busca.data.localidade)
            setEstado(busca.data.uf)
            setRua(busca.data.logradouro)
            if(busca.data.erro){
                setRua('')
                setNumero('')
                setBairro('')
                setCidade('')
                setEstado('')
            }
        }catch(err){
            console.log(err)
            
        }
    }
    const registrar = async (e)=>{
        
        e.preventDefault()
        try{
            const resposta = await axios.post('http://localhost:5000/cadastrar', {
                nome,
                email,
                senha,
                cpf,
                cep,
                rua,
                bairro,
                cidade,
                estado,
                numero
            })
                setNome('')
                setEmail('')
                setSenha('')
                setCpf('')
                setCep('')
                setRua('')
                setNumero('')
                setBairro('')
                setCidade('')
                setEstado('')
            alert(resposta.data.msg)
            console.log(resposta.data)
            
            
            
            

            }
            catch(err){
                alert(err.request.responseText)
                console.log(err.request.responseText)

            }
    
    }
    
    return(
        
    
        <div>
            <h1> Faça seu Cadastro </h1>
            
            <form onSubmit={registrar} action='/'>
                <h3>Dados de Acesso</h3>
                <label htmlFor="Nome">Nome Completo:</label>
                <input type="text" id="Nome" value={nome} onChange={(e)=> setNome(e.target.value)} required />
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="" value={email} onChange={(e)=> setEmail(e.target.value)} required />

                <label htmlFor="senha">Senha de Acesso:</label>
                <input type="password" id="senha" value={senha} onChange={(e)=> setSenha(e.target.value)} required />

                <h3>Dados Pessoais</h3>
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" value={cpf} onChange={(e)=> setCpf(e.target.value)} required />

                <h3>Endereço</h3>

                <label htmlFor="cep">CEP:</label>
                <input type="text" id="cep" value={cep} onBlur={buscarEndereco} onChange={mudarCep} />
                

                <label htmlFor="rua">Rua:</label>
                <input type="text" id="rua" value={rua} onChange={(e)=> setRua(e.target.value)} disabled />

                <label htmlFor="numero">Número da Casa:</label>
                <input type="text" id="numero" value={numero} onChange={(e)=> setNumero(e.target.value)} />

                <label htmlFor="bairro">Bairro:</label>
                <input type="text" id="bairro" value={bairro} onChange={(e)=> setBairro(e.target.value)} disabled />

                <label htmlFor="cidade">Cidade:</label>
                <input type="text" id="cidade" value={cidade} onChange={(e)=> setCidade(e.target.value)} disabled />

                <label htmlFor="estado">Estado:</label>
                <input type="text" id="estado" value={estado} onChange={(e)=> setEstado(e.target.value)} disabled />

                <div className="">
                <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Cadastro
