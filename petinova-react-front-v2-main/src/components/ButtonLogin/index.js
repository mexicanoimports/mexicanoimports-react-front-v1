import './style.css'

function ButtonLogin({text, alternate, onclick}) {
    return (
        <div className='button-login'>
            <button onClick={onclick} id={alternate && 'white'}>
                {text}
            </button>
        </div>
    );
}

export default ButtonLogin;