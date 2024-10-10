import { useNavigate } from 'react-router-dom';
import './style.css'

function Product({ product }) {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => {
                navigate(`/product/${product.id}`)
                window.scrollTo(0, 0);
            }}
            className='product'
        >
            <img alt={product.name} src={product.urlimage} />
            <h1>{product.name}</h1>
            <h2>R${product.price}</h2>
        </div>
    );
}

export default Product;