import { Link } from 'react-router-dom'
import LogoCompleta from '../assets/LogoCompleta.svg'


export default function Menu() {
    return (
        <nav>
            <img src={LogoCompleta} alt="Logo Pernambucano" />
            {/* menu */}
            <ul>
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
        </nav>
    )
}
