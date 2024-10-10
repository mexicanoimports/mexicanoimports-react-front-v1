import './style.css'

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductSection({ id, tagTextColor, tagColor, tag }) {
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;
    const productId = id
    const [product, setProduct] = useState({})
    function truncateString(str, num) {
        if (typeof (str) === 'string') {

            if (str.length <= num) {
                return str;
            }
            return str.slice(0, num) + '...';
        }
    }
    const originalString = product.description;
    const truncatedString = truncateString(originalString, 150);
    useEffect(() => {
        axios.get(`${apiUrl}api/products/id/${productId}`).then((res) => {
            setProduct(res.data)
        })
    }, [productId, apiUrl])
    return (
        <div
            className='product-section elemento-flutuante'
            style={{
                color: tagTextColor,
                backgroundImage: `url(${product.urlimage})`
            }}
            onClick={() => {
                navigate(`/product/${product.id}`)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Isso faz a rolagem ser suave
                  });
            }}
        >
            <div className='product-tag' style={{ backgroundColor: tagColor }}>
                {tag}
            </div>
            <div className='product-description'>
                <h1>
                    {product.name}                </h1>
                <p>
                    {truncatedString}
                </p>
                <button>
                    Eu quero
                </button>
            </div>
        </div>
    );
}

export default ProductSection;