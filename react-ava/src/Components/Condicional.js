function Condicional () {
   const SalarioAtual = 1000
   const Salario = 100
    var Total
    var resultado
   function DinehiroTotao (a,b){
    resultado = a+b
        return(
            resultado
        )
   
   }
   Total =  DinehiroTotao(SalarioAtual,Salario)
    const Mercado = 
    [              {  id:1,Name: 'Arroz',Price: 20.50},
                   { id:2,Name: 'Feijão',Price: 10.50},
                    {id:3,Name: 'Acuçar',Price: 0.50},
                   { id:4,Name: 'Café',Price: 23.50}
    
    ]

    return(
        <>
         {Total >= 1 ?
          ( <div>
             <p>{Total} </p>
             {Mercado.map((Mercado) =>(
            <p key ={Mercado.id}>{Mercado.Name} POssui o Preco :R${Mercado.Price}</p>
           )

           )}  
             </div>         
         ):(
            <p>Pox vc não tem itens</p>
         )
         }


        </>
    )

}
export default Condicional