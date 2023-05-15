import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './index.css'

function Index(){
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const Navigate = useNavigate()

        const login = async (evento)=>{
            
            
            evento.preventDefault()
            try{
                const resposta = await axios.post('http://localhost:5000/login', {
                    email,
                    senha
                })
                const token = resposta.data.token
                localStorage.setItem('token', token)
                console.log(resposta.data.token)
                Navigate('/inicio')
            }catch(err){
                alert(err.request.responseText)
                console.log(err)
            }
            
        }
        
        return(
            <div>
                <form onSubmit={login} className="login d-flex justify-content-center mt-2 mb-2">
  
                <article className="login-secao p-2 w-80 m-2">
                    <img src="./img/Design sem nome (1).gif " className="img-fluid" alt="logo globo" />
                    <h1 className="text-center mb-4">Entrar</h1>
                    <div>
                        <label htmlFor="Email">Digite seu E-mail</label><br />
                        <input type="email" id="email" placeholder="seuemail@email.com" className="w-100" value={email} onChange={(evento)=> setEmail(evento.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="senha">Digite sua senha</label><br />
                        <input type="password" id="senha" placeholder="*********" className="w-100" value={senha} onChange={(evento)=> setSenha(evento.target.value)} required />   
                        <span className="lnr lnr-eye"></span>
                        
                    </div>
                    <div>
                        <input type="checkbox" name="dados" />
                        <label htmlFor="dados">Lembrar meus dados</label>
                        <br /><br />
                        <a href="recupSenha.html" >Esqueceu usuário ou senha?</a>
                        <br /><br />
                        <div>
                            
                            <button type="submit" className="btn btn-primary w-100 mb-3" >Entrar</button>
                            
                            
                            <a type="button" className="btn btn-primary w-100" href="/cadastro">Cadastrar</a>
                             
                        </div>
                    </div>
                </article>
                </form>
            </div>
        )
    
}
 export default Index