import './style.css'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm';
import Main from '../../components/Main';
import InputForm from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import { useNavigate, useParams, } from 'react-router-dom';
import { useState } from 'react';
import ErrorLogin from '../../components/ErrorLogin';
import axios from 'axios';
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';

function Register() {
    const { previousPage } = useParams()

    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;

    const [clientName, setClientName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({});

    const validateForm = async () => {
        const newErrors = {};

        if (!clientName.trim()) {
            newErrors.clientName = 'Nome completo é obrigatório';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email inválido';
        } else {
            // Verificar se o email já existe
            try {
                const response = await axios.get(`${apiUrl}api/users/check-email`, { params: { email } });
                if (response.status === 409) {
                    newErrors.email = 'Email já está em uso';
                }
            } catch (error) {
                newErrors.email = 'Email ja está em uso';
            }
        }

        if (!password) {
            newErrors.password = 'Senha é obrigatória';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'As senhas não coincidem';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const register = async () => {
        if (await validateForm()) {
            try {
                const response = await axios.post(`${apiUrl}api/users/register`, {
                    fullname: clientName,
                    email: email.toLowerCase(),
                    password
                });
                if (previousPage === "login") {
                    navigate(-2);
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Erro ao registrar usuário:', error);
                setErrors(prevErrors => ({
                    ...prevErrors,
                    apiError: 'Erro ao registrar usuário. Tente novamente mais tarde.'
                }));
            }
        }
    };

    return (
        <>
            <Header />
            <Cart />
            <LateralButtons />
            <Main>
                <LoginForm tittle={'Registrar'}>
                    <InputForm value={clientName} onchange={setClientName} label={"Nome completo:"} />
                    {errors.clientName &&
                        <ErrorLogin error={errors.clientName} />
                    }
                    <InputForm value={email} onchange={setEmail} label={"Email:"} />
                    {errors.email &&
                        <ErrorLogin error={errors.email} />
                    }
                    <InputForm value={password} onchange={setPassword} label={"Senha:"} />
                    {errors.password &&
                        <ErrorLogin error={errors.password} />
                    }
                    <InputForm value={confirmPassword} onchange={setConfirmPassword} label={"Confirma senha:"} />
                    {errors.confirmPassword &&
                        <ErrorLogin error={errors.confirmPassword} />
                    }
                    <ButtonLogin onclick={register} bg={""} text={"Registrar"} />
                    <ButtonLogin onclick={() => navigate('/login')} alternate={true} text={"Já tenho conta"} />
                </LoginForm>
            </Main>
        </>
    );
}

export default Register;