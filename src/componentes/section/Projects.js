import Buttonb from '../Elementos/ButtonB' 
import styles from './Projects.module.css'
import Card from '../Elementos/Card' 
import projeto1 from '../image/projeto1.svg'
import projeto2 from '../image/projeto2.svg'



function Projects (){
    return(
      <div className={styles.projects} id='Projects'>
          <h1>Projetos</h1>
          <Card
          img={projeto1}
          title="LP - DNC"
           tech="HTML, CSS e JS"
           description="Desenvolvimento "
           repo="https://github.com/RPessoni>"
           site="https://github.com/RPessoni>"
          />
          <Card
          img={projeto2}
          title="Portifolio"
           tech="React"
           description="Desenvolvimento "
           repo="https://github.com/RPessoni>"
           site="https://github.com/RPessoni>"
          />
         
          <Buttonb  text='Ver repositório Completo' link = 'https://github.com/RPessoni>'/>
      </div>
    )
}

export default Projects