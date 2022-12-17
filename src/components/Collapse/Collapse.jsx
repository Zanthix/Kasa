import { useState, useRef } from 'react';
import './collapse.scss';
import arrow from '../../assets/collapse_arrow.png';

const Collapse = ({title, children}) => {

    const [show, setShow] = useState(false);

    const parentRef = useRef();

    return (
        <div className='Collapse-info'>
            <div className='Collapse-wrapper'> 
                <div className="Collapse">{title}
                    <button type='button' onClick={() => setShow(!show)}>
                        {show === true ? <img className='arrow arrow-open' src={arrow} alt="" /> : <img className='arrow arrow-close' src={arrow} alt="" />}
                    </button>
                </div>

                <div className="Collapse-content" 
                    ref={parentRef} 
                    style={
                        show 
                        ? {
                            height: parentRef.current.scrollHeight + "px",
                        } 
                        : {
                            height: "0px",
                        }
                    }>

                    <div className='content'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;