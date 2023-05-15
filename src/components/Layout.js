import React from "react";
import Header from './header/header.js'

function Layout({children}){
    return(
        <div>
            <Header />
                <main>
                    {children}
                </main>
        </div>
    )
}
export default Layout