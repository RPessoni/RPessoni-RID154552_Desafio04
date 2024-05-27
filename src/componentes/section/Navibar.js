import styles from './navibar.module.css'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
function Navibar () {

    return (
        <div className={styles.navbar}>
        <ul>
            <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
            <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
            <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        </ul>
        <ul>
            <li> <a href='https://www.instagram.com/pessoni7?igsh=MTA1eGZrcTQwcTBvaA=='><FaInstagram size={30}/></a></li>
            <li> <a href='https://github.com/RPessoni>'><FaGithub size={30}/></a></li>
            <li> <a href='https://www.linkedin.com/in/rafaelpessoni/'><FaLinkedin size={30}/></a></li>
        </ul>
        </div>
    )
}

export default Navibar