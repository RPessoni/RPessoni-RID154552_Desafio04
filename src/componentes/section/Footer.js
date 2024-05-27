import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import style from './Footer.module.css'
function Footer (){

    return(
        <div className={style.footer}>
          <ul>
            <li> <a href='https://www.instagram.com/pessoni7?igsh=MTA1eGZrcTQwcTBvaA=='><FaInstagram size={30}/></a></li>
            <li> <a href='https://github.com/RPessoni>'><FaGithub size={30}/></a></li>
            <li> <a href='https://www.linkedin.com/in/rafaelpessoni/'><FaLinkedin size={30}/></a></li>
        </ul>
        <p>pessonifull@gmail.com</p>
        <p>Rafael Pessoni @ 2024</p>
        </div>
    )
}
export default Footer