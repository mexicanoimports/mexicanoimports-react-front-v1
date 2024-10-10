import { useContext, useEffect } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import './style.css'
import { useNavigate } from 'react-router-dom';
function Menu() {
    const storedUser = localStorage.getItem('userData');
    const userData = JSON.parse(storedUser);
    const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
    const navigate = useNavigate()

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menuElement = document.getElementsByClassName('menu');
            if ((menuElement[0] && !menuElement[0].contains(event.target))) {
                setMenuIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',
                handleClickOutside);
        };
    }, [setMenuIsOpen]);

    return (
        <>
            {menuIsOpen &&
                <nav className='menu bounceInDown'>
                    {userData
                        ?
                        <div
                            onClick={() => {
                                navigate('/profile');
                                setMenuIsOpen(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth" // Isso faz a rolagem ser suave
                                });
                            }}
                            className='menu-item'
                        >
                            {userData.fullname} | MEU PERFIL
                        </div>
                        :
                        <div
                            onClick={() => {
                                navigate('/login');
                                setMenuIsOpen(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth" // Isso faz a rolagem ser suave
                                });
                            }}
                            className='menu-item'
                        >
                            ENTRAR | REGISTRAR
                        </div>
                    }
                    <div
                        onClick={() => {
                            navigate('/');
                            setMenuIsOpen(false)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth" // Isso faz a rolagem ser suave
                            });
                        }}
                        className='menu-item'
                    >
                        INÍCIO
                    </div>
                    <div
                        onClick={() => {
                            navigate('/products');
                            setMenuIsOpen(false)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth" // Isso faz a rolagem ser suave
                            });
                        }}
                        className='menu-item'
                    >
                        PRODUTOS
                    </div>
                    <div
                        onClick={() => {
                            navigate('/pet-food');
                            setMenuIsOpen(false)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth" // Isso faz a rolagem ser suave
                            });
                        }}
                        className='menu-item'
                    >
                        CALCULADORA DE NUTRIÇÃO PARA ANIMAIS
                    </div>
                    <div
                        onClick={() => {
                            navigate('/contact');
                            setMenuIsOpen(false)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth" // Isso faz a rolagem ser suave
                            });
                        }}
                        className='menu-item'
                    >
                        CONTATO
                    </div>
                </nav>
            }
        </>
    );
}
export default Menu;