function list () {
const Mercado = 
[              {  id:1,Name: 'Arroz',Price: 20.50},
               { id:2,Name: 'Feijão',Price: 10.50},
                {id:3,Name: 'Acuçar',Price: 0.50},
               { id:4,Name: 'Café',Price: 23.50}

]

    return(
        <div>
           <h1>Renderização</h1>
           {Mercado.map((Mercado) =>(
            <p key ={Mercado.id}>{Mercado.Name}</p>
           )

           )}
        </div>
    )

}
export default list