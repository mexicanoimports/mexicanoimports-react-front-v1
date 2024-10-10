import './style.css'
import logo from './logo.png'
import cat from './cat.png'
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';

function Header() {
    const navigate = useNavigate()
    const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

    return (
        <>
            <header className="header-container">
                <div className='header'>
                    <img
                        onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/');
                        }}
                        height={"100%"}
                        src={logo}
                        alt="pet inova logo"
                    />
                    {menuIsOpen ?
                        <div
                            className='header-hamburger'
                            onClick={() => setMenuIsOpen(false)}
                        >
                            <CgClose
                                size={25}
                                color='#EAEAEA'
                            />
                        </div>
                        :
                        <div
                            className='header-hamburger'
                            onClick={() => setMenuIsOpen(true)}
                        >
                            <RxHamburgerMenu
                                size={25}
                                color='#EAEAEA'
                            />
                        </div>
                    }
                </div>
                <div className='header-content'>
                    <div>
                        <h1>UM MÊS DE <span style={{ textDecoration: "underline" }}>FRETE</span></h1>
                        <h2>GRÁTIS</h2>
                    </div>
                </div>
                <div className='header-cat'>
                    <img alt='cat' src={cat} />
                </div>
                <img />
            </header>
            <Menu />
        </>
    );
}

export default Header;