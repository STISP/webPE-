import { Link } from 'react-router-dom'
import LogoCompleta from '../assets/LogoCompleta.svg'
import MenuMobileIcon from '../assets/MenuMobileIcon.svg'
import ModalMenuMobile from '../components/ModalMenuMobile'
import React, { useState } from 'react'

export default function Menu() {
    const [menuMobile, setMenuMobile] = useState(false);

    const MenuHandleOpenModal = () => {
        setMenuMobile(true);
    };

    const handleCloseModal = () => {
        setMenuMobile(false);
    };

    return (
        <nav>
            <img src={LogoCompleta} alt="Logo Pernambucano" />
            {/* menu Desktop*/}
            <ul className='menuDesktop'>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Parceiros">Parceiros</Link>
                </li>
                <li>
                    <Link to="/lojas">Nossas Lojas</Link>
                </li>
                <li>
                    <Link to="/Cartao">Cartão</Link>
                </li>
            </ul>
            {/* menu Mobile*/}
            <div onClick={MenuHandleOpenModal} className="menuMobileIcon">
                <img src={MenuMobileIcon} alt="" />
            </div>
            <ModalMenuMobile isOpen={menuMobile} onClose={handleCloseModal} />
        </nav>
    )
}
