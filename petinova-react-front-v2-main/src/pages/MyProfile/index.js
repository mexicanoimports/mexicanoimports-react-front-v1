import Cart from '../../components/Cart';
import OptionButton from '../../components/OptionButton';
import Header from '../../components/Header';
import LateralButtons from '../../components/LateralButtons';
import Main from '../../components/Main';
import ProfileCard from '../../components/ProfileCard';
import './style.css'
import { IoMdExit } from 'react-icons/io';
import { FiPackage } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyProfile() {
    const apiUrl = process.env.REACT_APP_API_URL
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [ordesIsOpen, setOrdesIsOpen] = useState(false)
    const [orders, setOrders] = useState([])
    const toggleOrderIsOpen = () => {
        setOrdesIsOpen(!ordesIsOpen)
    }
    const desconect = () => {
        localStorage.clear()
        window.location.reload()
    }










    useEffect(() => {
        axios.get(`${apiUrl}api/stripe/orders/${userData.id}`).then((res) => {
            setOrders(res.data)
        })
    }, [apiUrl, userData.id])
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main
                style={{
                    maxWidth: "500px"
                }}
            >
                <ProfileCard />
                <OptionButton onclick={toggleOrderIsOpen} bg="gray" color='white'>
                    <FiPackage style={{ marginRight: "20px" }} />
                    Meus Pedidos
                </OptionButton>
                {ordesIsOpen &&
                    <>
                        {
                            orders.map(order => {
                                const date = new Date(order.order_date);

                                // Obter o dia, mês e ano
                                const dia = String(date.getDate()).padStart(2, '0');
                                const mes = String(date.getMonth() + 1).padStart(2, '0'); // Mês é zero-indexado
                                const ano = date.getFullYear();

                                // Formatar a data no formato desejado
                                const dataFormatada = `${dia} do ${mes} de ${ano}`;
                                return (
                                    <OptionButton
                                        onclick={toggleOrderIsOpen}
                                        bg={order.order_status === "shipping"
                                            ?
                                            "#f38962"
                                            :
                                            "#33F8E5"
                                        }
                                        color='white'>
                                        <h1>
                                            {dataFormatada}
                                        </h1>
                                        <h1>
                                            {order.order_status === "shipping" ?

                                                <span
                                                    style={{
                                                        color: "white",
                                                        letterSpacing: 2
                                                    }}
                                                >
                                                    Entregue
                                                </span>
                                                :
                                                <span
                                                    style={{
                                                        color: "#F5822F",
                                                        letterSpacing: 2
                                                    }}
                                                >
                                                    A caminho
                                                </span>
                                            }
                                        </h1>
                                        <ul>
                                            {order.order_items.map(item => {
                                                return (
                                                    <li>
                                                        {item.description}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </OptionButton>
                                )
                            })
                        }
                    </>
                }

                <OptionButton onclick={desconect} bg="red">
                    <IoMdExit style={{ marginRight: "20px" }} />
                    Sair
                </OptionButton>
            </Main>
        </>
    );
}

export default MyProfile;