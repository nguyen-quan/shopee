import { Link } from 'react-router-dom';
import logo from '../Asses/img/logo.png';
import '../Asses/css/header.scss'
import { Search } from './Search';
import { Cart } from './Cart';
import { Nav } from './Nav';
import { Navbar } from './Navbar';


export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="container-navbar">
                    <Navbar/>
                </div>
                <div className="container-fluid">
                    <div className="header-search">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <Search/>
                            </div>
                            <div className="col-lg-1">
                                <Cart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}