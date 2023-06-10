import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logado(){
    const Navigate = useNavigate()
    const [usuario, setUsuario] = useState('')

    useEffect(()=>{
        async function verificar(){
            const response = await fetch('http://localhost:5000/inicio', {
                headers:{
                    'Authorization':`${localStorage.getItem('token')}`
                }
            })
            if(response.status === 401){
                Navigate('/')
            }
        }

        verificar()
    })

    // useEffect(()=>{
    //     const token = localStorage.getItem('token')

    //     axios.get('http://localhost:5000/inicio',{
    //         headers:{
    //             'Authorization':`${token}`
    //         }
    //     }).then(response=>{
    //         setUsuario(response.data.usuario)
    //         console.log(usuario.name)
    //     }).catch(error=>{
    //         console.error(error)
    //         Navigate('/')
    //     })
    // }, [Navigate])

    return(
        <div>
            {usuario &&(
            <h1>
                {usuario.name}
            </h1>)
            }
      
        <div> 
            <h1> Olá, Escolha uma opção abaixo: </h1>   </div>
            <p> Buscar Clínicas Cadastradas.</p>
            <p> Buscar Clínicas perto de você.</p>
            <p> Dicas de Clínicas.</p>
            <p> Encontre o profissional de qualquer especialidade.</p>

        </div>
        
        
    )
}

export default Logado