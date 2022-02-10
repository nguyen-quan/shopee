import { Link } from 'react-router-dom';


export const Cart = () => {
    return (
        <div className="cart">
            <div className="btn-cart">
                <Link to="/cart-item">
                    <button>
                        <i className="fas fa-shopping-cart"></i>
                        <span>0</span>
                    </button>
                </Link>
                <div className="show-cart">
                    <p className="text">Sản phẩm mới thêm</p>
                    <ul className="list">
                        <li className="item">
                            <img className="cart-img" src="https://cf.shopee.vn/file/ec99396540301c17d9d3e7c3c4b761e2_tn" alt="" />
                            <div className="info">
                                <div className="name">
                                    <p>Màn hình led cảm âm Music Spectrum Glowup S01 10 chế độ</p>
                                </div>

                                <div className="price">
                                    <p>1.299.000</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="">
                        <button className="watch"> Xem giỏ hàng</button>
                    </a>
                </div>
            </div>
        </div>
    )
}