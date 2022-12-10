import { Link } from 'react-router-dom';

const Card = (props) => {

    return (
        <div className='allCards'>
            <Link to={`housing/` + props.house.id} className="card-layout" key={props.house.id}>
                <img className='cardPicture' src={props.house.cover} alt="" />
                <h2>{props.house.title}</h2>
            </Link>
        </div>
    );
};

export default Card;