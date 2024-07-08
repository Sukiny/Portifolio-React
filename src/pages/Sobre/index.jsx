import styles from './Sobre.module.css'
import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import node from './imagens/icon-node.svg'
import react from './imagens/icon-react.svg'
import sql from './imagens/icon-sql.svg'
import avatar from './imagens/avatar02.jpeg'



function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar}className={styles.avatar}></img>
           
            <div className={styles.textos}>
                <h2>Sobre</h2>
                <p> Sou
                    <span> Cristiano Lisboa</span> <br />
                    <strong> Front-End Developer</strong>
                    
                    <p> Estudante em Analise e desenvolimento de Sistemas</p>
                    <p>
                        Sou apaixonado em trasformar ideias em realidade digital
                    </p>
                  
                  </p>

            </div>
            </div>
            <div className={styles.techs}>
                <h3> Techs</h3>
                <div className={styles.icones}>
                 <img src={html}></img>
                 <img src={css}></img>
                 <img src={js}></img>
                 <img src={react}></img>
                 <img src={node}></img>
                 <img src={sql}></img>
                </div>

            </div>



        </section>

    ) 
}

export default Sobre