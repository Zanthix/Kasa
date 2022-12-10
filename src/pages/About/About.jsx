import AboutBanner from '../../components/Banner/AboutBanner'
import Collapse from '../../components/Collapse/Collapse'

function About() {

    const fiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        
        <div className="aboutPage">
            <AboutBanner />
            <div className='collapse-info'>
                <Collapse title="Fiabilité">{fiability}</Collapse>
                <Collapse title="Respect">{respect}</Collapse>
                <Collapse title="Service">{service}</Collapse>
                <Collapse title="Sécurité">{security}</Collapse>
            </div>
        </div>


    )
}
export default About;