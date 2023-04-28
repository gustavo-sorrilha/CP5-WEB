import { Link } from 'react-router-dom'

import '../index.css'
import './css/style.css'

function Nav() {
    return (
        <div id="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calcado"></Link></li>
                <li><Link to="/camisetas">Camisetas</Link></li>
                <li><Link to="/equipamento">Equipamentos</Link></li>
            </ul>
        </div>
    )
}
export default Nav