import './style.css'

function ErrorLogin({ error }) {
    return (
        <div className='error-login'>
            <p>
                *{error}
            </p>
        </div>
    );
}

export default ErrorLogin;