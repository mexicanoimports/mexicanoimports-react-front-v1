import './style.css'

function LoginForm({ tittle, children }) {
    return (
        <div className='login-form'>
            <h1>{tittle}</h1>
            {children}
        </div>
    );
}

export default LoginForm;