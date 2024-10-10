import './style.css'

function DesconectButton({ bg, color = "white", onclick, children }) {

    return (
        <div style={{
            backgroundColor: bg,
            color: color
        }} onClick={onclick} className='desconect-button'>
            {children}
        </div>
    );
}

export default DesconectButton;