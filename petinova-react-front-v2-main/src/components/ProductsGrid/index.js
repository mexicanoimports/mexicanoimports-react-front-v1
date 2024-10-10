import './style.css'

function ProductGrid({children}) {
    return (
        <div className="product-grid">
            {children}
        </div>
    );
}

export default ProductGrid;