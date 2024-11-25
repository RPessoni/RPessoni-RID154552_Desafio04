import style from './Skills.module.css'
import javascript from '../image/skill/javascript.svg'
import css from '../image/skill/css.svg'
import html from '../image/skill/html.svg'
import react from '../image/skill/react.svg'
import ts from '../image/skill/ts.svg'
import js from '../image/skill/js.svg'
function Skills (){
    return(
        <div className={style.skills} id='Skills'>
            <h1>
              Habilidades
            </h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

            <div>
                <img src={javascript}></img>
                <img src={css}></img>
                <img src={html}></img>
                <img src={react}></img>
                <img src={ts}></img>
                <img src={js}></img>
            </div>
        </div>
    )
}
export default Skills