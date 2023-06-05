import React from "react";
import Header from './header/header.js'
import Footer from "./footer/footer.js";


function Layout({children}){
    return(
        <div>
            <Header />
                
                <main>
               
                    {children}
                    
                </main>
            
                <Footer  />
                
        </div>
    )
}
export default Layout