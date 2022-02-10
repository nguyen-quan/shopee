import { Link } from "react-router-dom"
import "../Asses/css/home.scss"
import axios from 'axios'
import { useEffect, useState } from "react"


export const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect( async() => {
        let res = await axios.get(`http://localhost:8080/api/products`)
        let data = res.data.data
        setProductList(data)
    },[])

    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 down-pad">
                        <div className="category">
                            <div className="heading-image">
                                <div className="img-lume"></div>
                                <div className="mask"></div>
                                <a href="" className="avatar">
                                    <img src="https://cf.shopee.vn/file/3581ce5bba80e2106f6981fafc05f3b8_tn" alt="" />
                                </a>
                                <a href="" className="mall">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/483071c49603aa7163a7f51708bff61b.png" alt="" />
                                </a>
                                <p className="title">ASUS OFFICIAL STORE</p>
                            </div>
                            <div className="text">
                                <h3 className="heading">
                                    Danh mục shop
                                </h3>
                                <ul className="list">
                                    <li className="item active">
                                        <a href="" className="link">Sản phẩm</a>
                                    </li>
                                    <li className="item">
                                        <a href="" className="link">Laptop</a>
                                    </li>
                                    <li className="item">
                                        <a href="" className="link">Laptop Gaming</a>
                                    </li>
                                    <li className="item">
                                        <a href="" className="link">Màn hình</a>
                                    </li>
                                    <li className="item">
                                        <a href="" className="link">Phụ kiện</a>
                                    </li>
                                    <li className="item">
                                        <a href="" className="link">Thiết bị mạng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 down-pad">
                        <div className="filter">
                            <span className="label">Sắp xếp theo</span>
                            <button className="btn active">Phổ biến </button>
                            <button className="btn">Mới nhất</button>
                            <button className="btn">Bán chạy</button>

                            <div className="select">
                                <div className="input">Giá</div>
                                <i className="fas fa-chevron-down icon"></i>
                                <ul className="list">
                                    <li className="item">
                                        <a href="" className="link">Giá: Thấp đến cao</a>
                                    </li>
                                    <li className="item">
                                        <a href="" className="link">Giá: Cao đến thấp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="page">
                                <span className="num">
                                    <span className="current">1</span>
                                    <span className="finer">/3</span>
                                </span>

                                <div className="control">
                                    <a href="" className="link padd">
                                        <i className="icon fas fa-chevron-left"></i>
                                    </a>
                                    <a href="" className="link">
                                        <i className="icon fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="product">
                            <div className="row down-pad">
                            {
                                productList.map((value, index) => {
                                    return (
                                        <div className="col-lg-25" key={index}>
                                            <Link 
                                                to={`/product/${value.id}`} 
                                                className="item">
                                                {/* <div className="img">
                                                </div> */}
                                                <img src={value.image} className="img" alt="" />
                                                <div className="content">
                                                    <div className="name">{value.name}</div>
                                                    <div className="more">
                                                        <span className="installment">0% trả góp</span>
                                                        <span className="option">Mua Kèm Deal Sốc</span>
                                                    </div>
                                                    <div className="price">
                                                        <span className="old">7.000.000đ</span>
                                                        <span className="new">{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                                                    </div>
                                                    <div className="action">
                                                        <span className="like">
                                                            <i className="far fa-heart do"></i>
                                                            <i className="fas fa-heart fill"></i>
                                                        </span>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <div className="sole">Đã bán 16</div>
                                                        </div>
                                                    </div>
                                                    <div className="origin">Hà Nội</div>
                                                </div>
                                                <div className="mall">Mall</div>
                                                <div className="sale">
                                                    <div className="persen">10%</div>
                                                    <div className="label">Giảm</div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                    )
                                })
                            }
                            </div>
                        </div>

                        <div className="pagination pagi-pad">
                            <nav aria-label="Page navigation example" className="nomal">
                                <ul className="pagination justify-content-center list">
                                    <li className="page-item disabled item">
                                        <a className="page-link link" href="#" tabIndex="-1" aria-disabled="true">
                                            <i className="fas fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item item"  aria-current="page"><a className="page-link link active" href="#">1</a></li>
                                    <li className="page-item item"><a className="page-link link" href="#">2</a></li>
                                    <li className="page-item item"><a className="page-link link" href="#">3</a></li>
                                    <li className="page-item item">
                                        <a className="page-link link" href="#">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}