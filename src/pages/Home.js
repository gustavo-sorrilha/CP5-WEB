import React, { useState } from 'react'

import '../components/css/style.css'

function Home(){    
    const[email,setEmail] = useState()
    const[userEmail,setUserEmail] = useState()
 
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div className="home">
         <h1>Home</h1>
         <br/>
                        
         <h2>CADASTRE SEU EMAIL</h2>

        <form action="">
            <input 
                type="email" 
                placeholder="Digite seu email" 
                onChange={(e)=>setEmail(e.target.value)}
            />

            <button onClick={enviarEmail}> Enviar</button>
        </form>
       
 
         {userEmail && (
            <div>
                <p id="userEmail">O email do usuário é: <span>{userEmail}</span></p><br/>
                <button onClick={limparEmail}>Limpar campo</button>
            </div>
         )}
        </div>
    )
}
export default Home