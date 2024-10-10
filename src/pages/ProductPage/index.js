import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import LateralButtons from "../../components/LateralButtons";
import Main from "../../components/Main";
import { useCart } from "../../contexts/cartContext";
import './style.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";

function ProductPage() {
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;
    const userData = JSON.parse(localStorage.getItem('userData'))

    const { addToCart } = useCart();
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [description, setDescription] = useState([])

    const [previousPage, setPreviousPage] = useState()

    const getYouTubeId = (url) => {
        if (!url) return null; // Adicione essa verificação
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };


    const videoId = getYouTubeId(product.urlvideo);

    const createCheckout = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate(`/login/${previousPage[1]}`)
            return
        }
        axios.post(`${apiUrl}api/stripe/create-checkout-session`, { products: [product], id: userData.id }).then((response) => {
            window.location.href = response.data.url
        })
    }


    useEffect(() => {
        let url = window.location.pathname
        setPreviousPage(url.split('/'))
        axios.get(`${apiUrl}api/products/id/${productId}`).then((res) => {
            setProduct(res.data)
            setDescription(res.data.description.split('.'))
        })
    }, [productId, apiUrl, setPreviousPage])

    return (
        <>
            <Helmet>
                <title>{`${product.name}`} | PetInovaBR</title>
                <meta name="description" content={`Compre ${product.name} por ${product.price}. Frete grátis!.`} />
                <meta name="keywords" content={`produto, ${product.title}, comprar ${product.title}`} />
            </Helmet>
            <Cart />
            <Header />
            <LateralButtons />
            <Main>
                {product &&
                    <>
                        <div className="product-page">
                            <div className="product-page-tab">
                                <h1>Frete grátis</h1>
                            </div>
                            <img src={product.urlimage} alt={product.name} />
                            <div>
                                <h2>{product.name}</h2>
                                <h4>Por</h4>
                                <h1>R${product.price}</h1>
                            </div>
                            <div className="product-page-buttons">
                                <div className="product-page-buttons">
                                    <button onClick={() => {
                                        addToCart(product)
                                    }}>Adicionar ao carrinho</button>
                                    <button onClick={createCheckout}>Comprar agora</button>
                                </div>
                            </div>
                            <div className="product-page-shiping">
                                <h3>Receba em sua casa em até 5 dias, por nossa conta!</h3>
                                <TbTruckDelivery color="white" size={40}
                                />
                            </div>
                            <div className="product-page-description">
                                {
                                    typeof (description) === "object" ?
                                        description.map(description => {
                                            return (
                                                <p>
                                                    {description}
                                                </p>
                                            )
                                        }) :
                                        <p>
                                            {description}
                                        </p>
                                }
                            </div>
                            <div>
                                {videoId ? (
                                    <iframe
                                        width="560"
                                        height="315"
                                        style={{
                                            borderRadius: '18px',
                                            width: '80vw',
                                            maxWidth: '600px',
                                            marginTop: '20px'
                                        }}
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="YouTube Video"
                                    ></iframe>
                                ) : <>
                                </>
                                
                            </div>                        </div>
                    </>
                }
            </Main>
        </>
    );
}

export default ProductPage;