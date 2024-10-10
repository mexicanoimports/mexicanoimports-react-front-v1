import Header from '../../components/Header'
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';
import Main from '../../components/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductSection from '../../components/ProductSection';
import ProductGrid from '../../components/ProductsGrid';

function ProductsPage() {
    const apiUrl = process.env.REACT_APP_API_URL
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}api/products/allproducts`).then((response) => {
            setProducts(response.data)
        })
    }, [apiUrl])
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ProductGrid>
                    {products.map(product => {
                        return(
                            <ProductSection id={product.id}/>
                        )
                    })}
                </ProductGrid>
            </Main>
        </>
    );
}

export default ProductsPage;