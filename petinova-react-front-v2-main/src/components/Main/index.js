import './style.css'

function Main({ children, style }) {
    return (
        <main className='main' style={style}>
            {children}
        </main>
    );
}

export default Main;