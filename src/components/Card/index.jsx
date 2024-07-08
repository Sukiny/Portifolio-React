import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";


function Card({name, description, html_url}) {
    return(
        <section className={styles.card}>
            <h3> {name}</h3>
            <p> {description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                <FaHtml5 />
                <FaCss3Alt />
                <FaNodeJs />
                <FaReact />

                </div>
                <a 
                href={html_url} className={styles.botao}
                    target="_blank">
                <FaArrowAltCircleRight />

                </a>


            </div>



        </section>

    ) 
}

export default Card