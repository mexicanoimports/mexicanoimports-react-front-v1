import { FaTruckFast } from 'react-icons/fa6';
import './style.css'

function HorizontalBannerSection() {
    return (
        <div className='horizontal-banner-section'>
            <div className='horizontal-banner-section-image'></div>
            <div className='horizontal-banner-section-text'>
                <h1>
                    RECEBA SUA COMPRA EM ATé CINCO DIAS
                </h1>
                <FaTruckFast size={30} style={{margin:"10px"}} />
            </div>
        </div>
    );
}

export default HorizontalBannerSection;