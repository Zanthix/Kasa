import { useState } from 'react';
import './slideshow.scss';
import arrow from '../../assets/collapse_arrow.png';

const Slideshow = (props) => {

    let [currentImg, setCurrentImg] = useState(0);

    const next = () => {
        setCurrentImg(currentImg = currentImg + 1)

        if (currentImg + 1 > props.img.length) {
            setCurrentImg(0)
        }
    }

    const prev = () => {
        setCurrentImg(currentImg = currentImg - 1)

        if (currentImg < 0) {
            setCurrentImg(props.img.length - 1)
            return
        }
    }
    return (
        <div className="full-Slideshow">
            <div className="element-Slideshow">
                <img className='current-img' src={props.img && props.img[currentImg]} alt={props.title}/>
            </div>
            <span className='slideshow-counter'>
                {( currentImg ) ? currentImg + 1 : 1 }
                 / 
                { props.img && props.img.length }
            </span>
            <button className={`prev-button ${(props.img && props.img.length === 1) ? "btn-hidden" : ""}`} onClick={prev}>
                <img src={arrow} alt="bouton précédent" />
            </button>
            <button className={`next-button ${(props.img && props.img.length === 1) ? "btn-hidden" : ""}`} onClick={next}>
                <img src={arrow} alt="bouton suivant" />
            </button>
        </div>
    );
}

export default Slideshow;