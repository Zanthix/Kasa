import './housing.scss';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse';
import Hote from '../../components/Hote/Hote';
import Notes from '../../components/Notes/Notes';
import logements from './../../datas/logements.json';




function Housing () {
    const { id } = useParams();

    const affichage = logements.find((house) => house.id === id)

    if(!affichage) {
        return <Navigate to="/404" />
    }

    return (
        <div className='housing-container'>
            <Slideshow img={affichage.pictures} />

            <div className="housing-inner-container">
                <div className="housing-title-location">
                    <h2 className='housing-title'>{affichage.title}</h2>
                    <h3 className='housing-location'>{affichage.location}</h3>
                    <Tags tags={affichage.tags} />
                </div>

                <div className="rating-host-container">
                    <Notes rating={affichage.rating}/>
                    <Hote name={affichage.host && affichage.host.name} img={affichage.host && affichage.host.picture} />
                </div>
            </div>
            
            <div className="collapse-container">
                <Collapse title="description">{affichage.description}</Collapse>
                <Collapse title="équipements">
                    {affichage.equipments.map((house) => (
                        <div key={house}>{house}</div>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};



export default Housing;