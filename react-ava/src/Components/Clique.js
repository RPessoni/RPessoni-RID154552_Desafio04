function Clique () {
function Clicado(){
    window.alert("Vc clicou no Botão")
}

function Paasouemcima () {
    window.alert("Vc passou em cima do botão")
}

    return(
    <div>
    <button onClick={Clicado}>Clique aqui</button>
    <br/>
    <button onMouseEnter={Paasouemcima}>Clique aqui</button>

    </div>
)

}

export default Clique