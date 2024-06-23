function Lista2 () {
    const Nomes = ['Juan', 'Rafael', 'Pessoni']
    
    return(
        <>
          <h1>Nomes Legais</h1>
          {Nomes.map((Nomes) =>(<li> key={Nomes.indexOf}{Nomes}</li>))}  
          </>
    )
}

export default Lista2