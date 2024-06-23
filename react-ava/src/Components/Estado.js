import { useState, useEffect } from "react"

function Estado (){
    const [Idade,setIdade]= useState(1)
    
    function Aniversario (){
        setIdade(Idade+1)
    }
useEffect(
    ()=>{
        window.alert('Parabens!!')
    },[Idade]
)
    return(
     <div>
        <button onClick={Aniversario}>Clique aqui para fazer Aniversario</button>
        <br/>
        <p>  Voce  Tem {Idade}</p>
     </div>
    )
}
export default Estado