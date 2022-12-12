import full_star from '../../assets/full_star.png';
import empty_star from '../../assets/empty_star.png';

const Notes = (props) => {

    const ratingString = [];

    for (let i = 0; i < props.rating; i++) {
        ratingString.push(
            <img key={"Rating" + i} className="rating-full" src={full_star} alt={'nombre étoiles ' + props.rating}></img>);
    }

    for (let i = props.rating; i < 5; i++) {
        ratingString.push(
            <img key={"Rating" + i} className="rating-empty" src={empty_star} alt={'nombre étoiles ' + props.rating}></img>);
    }

    return (
        <div className="note">
            {ratingString}
        </div>
    );
};

export default Notes;