import { Link } from 'react-router-dom';

import apple from '../Asses/img/apple.png'
import google from '../Asses/img/googleplay.png'
import qrcode from '../Asses/img/qrcode.png';
import { Modal } from '../View/Modal';


export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="list">
                <li className="item">
                    <a className="link" href="">Kênh người bán</a>
                </li>
                <li className="item separeate qr-apear">
                    <a className="link" href="">Tải ứng dụng</a>
                    <div className="qr-code">
                        <img src={qrcode} alt="" className="qr-code-img" />
                        <div className="qr-app">
                            <a href="" className="qr-link">
                                <img src={apple} alt="" className="download-app" />
                            </a>
                            <a href="" className="qr-link">
                                <img src={google} alt="" className="download-app" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="item separeate">
                    <span className="no-color no-poiter">Kết nối</span>
                    <a href="#"><i className="no-color icon fab fa-facebook"></i></a>
                    <a href="#"><i className="no-color icon fab fa-facebook-messenger"></i></a>
                </li>
            </ul>
            
            <ul className="list">
                <li className="item noti-apear">
                    <a className="link" href=""><i className="icon far fa-bell"></i>Thông báo</a>
                    <div className="notification">
                        <div className="notify">
                            <h3>Thông báo mới nhận</h3>
                        </div>
                        <ul className="notify-list">
                            <li className="notify-item">
                                <a href="" className="notify-link">
                                    <img src="https://cf.shopee.vn/file/741fd6b668abe6c6cee41183f076d064_tn" className="notify-img" alt="" className="notify-img" />
                                    <div className="notify-info">
                                        <span className="notify-header">Đánh giá sản phẩm</span>
                                        <span className="notify-description">Kiện hàng đa giao thành công đến bạn</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="notify-watch">
                            <a href="" className="notify-btn">
                                <h3>Xem tất cả</h3>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <a className="link" href="">
                        <i className="icon far fa-question-circle"></i>
                        Hỗ trợ
                    </a>
                </li>
                <li className="item switch">
                    <i className="icon fas fa-globe"></i>
                        Tiếng việt
                    <i className="icon fas fa-chevron-down"></i>
                    <div className="language">
                        <ul className="list">
                            <li className="item">
                                <a href="" className="link active">Tiếng Việt</a>
                            </li>
                            <li className="item">
                                <a href="" className="link">Tiếng anh</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="item">
                    <a 
                        className="link" 
                        href="" 
                        className="bold" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal1">
                        Đăng kí
                    </a>
                </li>
                <li className="item separeate">
                    <a 
                        className="link" 
                        href="" 
                        className="bold" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal2">
                        Đăng nhập
                    </a>
                </li>
                <li className="item user">
                    <img src="https://cdn.fullstack.edu.vn/f8-learning/user_photos/91760/613b0937eb822.jpg" alt="" />
                    <span className="name">Nguyễn Quân</span>
                    <ul className="menu">
                        <li className="item">
                            <a href="">Tài khoản của tôi</a>
                        </li>
                        <li className="item">
                            <Link to="product-manager">Quản lí gian hàng</Link>
                        </li>
                        <li className="item">
                            <a href="">Đăng xuất</a>
                        </li>
                    </ul>
                </li>
            <Modal/>
            </ul>
        </nav>
    )
}