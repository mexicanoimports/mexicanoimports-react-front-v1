import { FaRegTrashAlt } from 'react-icons/fa';
import './style.css'
import { useCart } from '../../contexts/cartContext';

function OrderItem({ product, index }) {
    const { removeFromCart } = useCart()

    return (
        <div className='order-item'>
            <img src={product.urlimage} />
            <div className='order-item-infos'>
                <h1>{product.name}</h1>
                <p>R${product.price}</p>
            </div>
            <FaRegTrashAlt onClick={()=>removeFromCart(index)}/>
        </div>
    );
}

export default OrderItem;