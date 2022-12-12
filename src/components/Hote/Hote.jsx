import './hote.scss'

const Hote = (props) => {

    return (
        <div className="bloc-hote">
            <p className='nom-hote'>{props.name}</p>
            <img className='avatar' src={props.img} alt="avatar" />
        </div>
    );
};

export default Hote;