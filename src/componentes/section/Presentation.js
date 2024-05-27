import styles from './Presentation.module.css'
import ButtonA from '../Elementos/ButtonA'
import ButtonB from '../Elementos/ButtonB'
function Presentation () {

    return(
        <div className={styles.presentation} id='Presentation' >
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Rafael</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como <br/>
                 Product Manager, eu tenho o compromisso de resolve<br/>
                 problemas complexos e trazer resultados excepcionais para os <br/>
                 negócios.Meus projetos já geraram milhões de reais em receita <br/>
                 anualestou sempre em busca de novos desafios para superar.<br/>
            </p>
            <ButtonA link='https://github.com/RPessoni' text='Conecte-se comigo!! '/>
          
        </div>
    )
}

export default Presentation