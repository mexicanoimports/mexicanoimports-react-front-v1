import { SlClose } from 'react-icons/sl';
import './style.css'
import { useState } from 'react';

function PopUp({ color, children, close, style }) {
    const [visible, setVisible] = useState(true)
    return (
        <>
            {visible &&
                <div className='popup-container'>
                    <div
                        className="popup at-item"
                        style={{
                            backgroundColor: color,
                            ...style
                        }}
                    >
                        <div className='popup-close'>
                            <SlClose onClick={close} color='white' size={25} />
                        </div>
                        <div className='popup-content'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default PopUp;