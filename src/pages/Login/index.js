import './style.css';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import Main from '../../components/Main';
import InputForm from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorLogin from '../../components/ErrorLogin';
import axios from 'axios';
import Cart from '../../components/Cart';
import LateralButtons from '../../components/LateralButtons';

function Login() {
    const { previousPage } = useParams()

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const [tittle, setTittle] = useState('Faça login')

    const validateForm = () => {
        const newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email inválido';
        }

        if (!password) {
            newErrors.password = 'Senha é obrigatória';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const login = async () => {
        if (validateForm()) {
            try {
                const response = await axios.post(`${apiUrl}api/users/login`, {
                    email: email.toLowerCase(),
                    password
                });
                console.log(response)
                const userData = response.data.user;
                const token = response.data.token;
                localStorage.setItem('userData', JSON.stringify(userData));
                localStorage.setItem('token', token); 
                if (previousPage === "product") {
                    navigate(-1);
                } else if (previousPage) {
                    navigate(`/${previousPage}`);
                } else {
                    navigate(-1);
                }
            } catch (error) {
                console.error('Erro ao fazer login:', error);
                setErrors(prevErrors => ({
                    ...prevErrors,
                    apiError: 'Email ou senha incorretos'
                }));
            }
        }
    };

    useEffect(() => {
        if (token) {
            navigate(-1)
        }
        if (previousPage === "pet-food") {
            setTittle("Faça login para usar a calculadora")
        } else if (previousPage === "product") {
            setTittle("Faça login para continuar comprando");
        }
    }, [token, navigate, setTittle, previousPage])

    return (
        <>
            <Cart />
            <Header />
            <LateralButtons />
            <Main>
                <LoginForm tittle={tittle}>
                    <InputForm value={email} onchange={setEmail} label={"Email:"} />
                    {errors.email && <ErrorLogin error={errors.email} />}
                    <InputForm value={password} onchange={setPassword} label={"Senha:"} type="password" />
                    {errors.password && <ErrorLogin error={errors.password} />}
                    {errors.apiError && <ErrorLogin error={errors.apiError} />}
                    <ButtonLogin onclick={login} bg={""} text={"Entrar"} />
                    <ButtonLogin
                        onclick={() => {
                            navigate("/register/login")
                        }}
                        alternate={true}
                        text={"Registrar"}
                    />
                </LoginForm>
            </Main>
        </>
    );
}

export default Login;