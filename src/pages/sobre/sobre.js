import React from "react";


function Sobre(){
    return(
        <main>
            <div className="container">
                <div className="row m-3 ">
                    <div className="col-md-12">
                        <img className="img-fluid" src="https://i.imgur.com/JixIIxn.png" alt="banenr" width="100%" />
                    </div>


                </div>
                <hr />
                <h1 className="featurette-heading fontBold  text-center">Quem somos?</h1>
                <div className="col-md-12 ">
                    <div className="row featurette mb-4">
                    <div className="col-md-7">
                        
                        <p className="lead font mt-5">
                            Somos uma organização que surgiu em meados de 2022, com o objetivo de modificar a vida das pessoas, trazendo uma proposta 
                            de aplicativo com o intuito de impactar a vida dos usuários de forma positiva.
                        </p>

                    </div>
                    <div className="col-md-5">
                    <picture>
                            <img src="https://i.imgur.com/sKRF3eF.png" alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%"
                                height="100%" />

                        </picture>
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-12 ">
                    <div className="row featurette mb-4">
                        <div className="col-md-5">
                        <picture>
                            <img src="https://blog.smcare.com.br/wp-content/uploads/2022/07/o-que-e-fisioterapia.jpg" alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%"
                                height="100%" />

                            </picture>
                        </div>
                        <div className="col-md-7">
                            <h2 className="featurette-heading fontBold">O que é o  <span className="text-muted fontBold"> Clinic Finder?
                                </span></h2>
                            <p className="lead font">
                                O Clinic Finder surgiu como uma ideia para auxiliar a procura de clínicas por parte dos usuários.
                                Você já precisou de um atendimento de psicólogos ou fisioterapeutas? A procura por esses atendimentos se torna um verdadeiro
                                problema para quem precisa, pois achar estes lugares se torna uma tarefa muito difícil, tendo em mente que os estabelecimentos
                                nem sempre estão aparentes para quem vê, e na maioria das vezes não se fazem fáceis de identificar.
                                O Clinic Finder vem para resolver este problema!
                            </p>

                        </div>
                    

                    </div>
                    
                </div>

                <div className="col-md-12 ">
                    <div className="row featurette mb-4">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fontBold mt-5">Qual é a nossa  <span className="text-muted fontBold"> Proposta?
                                </span></h2>
                            <p className="lead font">
                                Nossa proposta é desenvolver um site que possibilite qualquer pessoa procurar clínicas e estabelecimentos de saude 
                                que estejam o mais próximo possível de onde estiverem, assim poupando bastante tempo com a procura, indo direto ao ponto!
                            </p>

                        </div>
                        <div className="col-md-5">
                        <picture>
                            <img src="https://i.imgur.com/Y5601Y1.png" alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%"
                                height="100%" />

                            </picture>
                        </div>
                        
                    

                    </div>
                    
                </div>
                <h2 className="text-center mb-5">EQUIPE</h2>
                <div className="col-md-12 ">
                    <div className="row featurette mb-4">
                        
                        <div className="col-md-3">
                        <picture>
                            <img src="https://i.imgur.com/AFLxbTM.png" alt=""
                                className="rounded-circle bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-rounded" width="100%"
                                height="100%" />

                            </picture>
                            <h5 className="text-center">Gabriel Luan</h5>
                            <p className="text-center fontBold text-muted ">Design</p>
                        </div>
                        <div className="col-md-3">
                        <picture>
                            <img src="https://images-ext-1.discordapp.net/external/d6FsnEECf3vsm9hQoD5n1ldFQgnGNR_1sXuf_huXmvY/https/i.imgur.com/LMbeXCG.jpg?width=472&height=473" alt=""
                                className="rounded-circle bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%"
                                height="100%" />

                            </picture>
                            <h5 className="text-center">David Patric</h5>
                            <p className="text-center fontBold text-muted ">Responsavel pelas regras de negócio</p>
                        </div>
                        <div className="col-md-3">
                        <picture>
                            <img src="https://avatars.githubusercontent.com/u/98193318?v=4" alt=""
                                className="rounded-circle bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%"
                                height="100%" />

                            </picture>
                            <h5 className="text-center">Adriana Almeida</h5>
                            <p className="text-center fontBold text-muted ">Programadora Front-end</p>
                        </div>
                        <div className="col-md-3">
                        <picture>
                            <img src="https://avatars.githubusercontent.com/u/62911694?v=4" alt=""
                                className="rounded-circle bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%"
                                height="100%" />

                            </picture>
                            <h5 className="text-center fontBold">Matheus José</h5>
                            <p className="text-center fontBold text-muted ">Programador Back-end</p>
                        </div>
                        
                    

                    </div>
                    
                </div>

                
            </div>
        </main>
    )
}

export default Sobre