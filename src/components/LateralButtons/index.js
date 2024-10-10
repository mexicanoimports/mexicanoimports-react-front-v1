import { BsInstagram } from 'react-icons/bs';
import './style.css'
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/cartContext';

function LateralButtons() {
    const { cartIsOpen, setCartIsOpen } = useCart()

    return (
        <div className='lateral-buttons'>
            <Link to={'https://www.instagram.com/petinovabr/'}>
                <div className='lateral-buttons-buttons-button'>
                    <BsInstagram color='white' size={20} />
                </div>
            </Link>

            <div onClick={() => setCartIsOpen(!cartIsOpen)} className='lateral-buttons-buttons-button'>
                <FaShoppingBasket color='white' size={20} />
            </div>
        </div>
    );
}

export default LateralButtons;