import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout.js'
import Cadastroo from './pages/cadastro/cadastro.js'
import Index from './pages/pagina-inicial/index'
import Sobre from './pages/sobre/sobre'
import Logado from './pages/pagina-logado/logado.js'

class App extends Component {
   render() {
       return(
            
           <Router>
                <div>
                    <Layout>
                        <Routes>
                            <Route exact path='/cadastro' Component={Cadastroo} />
                            <Route exact path='/' Component={Index} />
                            <Route exact path='/sobre' Component={Sobre} />
                            <Route exact path='/inicio' Component={Logado} />
                        </Routes>
                    </Layout>
                </div>
            </Router>
       )
   }
}
export default App