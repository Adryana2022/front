import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout.js'
import Cadastroo from './pages/cadastro/cadastro.js'
import Index from './pages/login/index'
import Sobre from './pages/sobre/sobre'
import Logado from './pages/pagina-logado/logado.js'
import BuscaEstabelecimentos from './pages/NovaPagina/BuscaEstabelecimentos';
import MapPage from './pages/Mapa/MapPage';
import RecuperacaoSenha from './pages/recuperacao/senha.js'
import LandingPage from './pages/home/landing.js'

class App extends Component {
   render() {
       return(
            
           <Router>
                <div>
                    <Layout>
                        <Routes>
                            <Route exact path='/cadastro' Component={Cadastroo} />
                            <Route exact path='/login' Component={Index} />
                            <Route exact path='/sobre' Component={Sobre} />
                            <Route exact path='/inicio' Component={Logado} />
                            <Route exact path='/Busca' Component={BuscaEstabelecimentos} />
                            <Route exact path='/MapPage' Component={ MapPage  } />
                            <Route exact path='/senha' Component={RecuperacaoSenha} />
                            <Route exact path='/' Component={LandingPage} />
                          
                            
                        </Routes>
                    </Layout>
                </div>
            </Router>
       )
   }
}
export default App