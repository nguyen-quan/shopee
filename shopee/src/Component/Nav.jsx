
import { Link } from 'react-router-dom';


export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/product-manager">Product Manager</Link>
                </li>
                {
                    <li className="dropdown">
                        <button id="infoUser" className="dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">Hello, Admin
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="infoUser">
                            <li className="list"><Link to="/user"><i className="fas fa-user"></i> Info User</Link></li>
                            <li className="list"><i className="fas fa-sign-in-alt"></i> Log out </li>
                        </ul>
                    </li>
                }
            </ul>
        </nav>
    )
}