import '../Asses/css/modal.scss'


export const Modal = () => {
    return (
        <div className="modals">
            <div className="modal" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text" id="exampleModalLabel">Đăng kí</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-outform">
                                <div className="out-form">
                                    <div className="group">
                                        <input type="text" className="form-input" placeholder="Nhập email hoặc số điện thoại"/>
                                    </div>
                                    <div className="group">
                                        <input type="password" className="form-input" placeholder="nhập mật khẩu"/>
                                    </div>
                                    <div className="group">
                                        <input type="password" className="form-input" placeholder="Nhập lại mật khẩu"/>
                                    </div>
                                </div>
                                <div className="social">
                                    <button href="#" className="btn face">
                                        <i className="fab fa-facebook"></i>
                                        Facebook
                                    </button>
                                    <button href="" className="btn google">
                                        <i className="fab fa-google"></i>
                                        Google
                                    </button>
                                    <button href="" className="btn apple">
                                        <i className="fab fa-apple"></i>
                                        Apple
                                    </button>
                                </div>
                                <div className="aside">
                                    <p className="top">
                                        Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                                    </p>
                                    <p className="bottom">
                                        <a href="" className="link">điều khoản dịch vụ</a> &#38;&nbsp; 
                                        <a href="" className="link">chính sách bảo mật</a>
                                    </p>
                                </div>
                                <div className="account">
                                    <p className="text">
                                        Bạn đã có tài khoản ? &nbsp; 
                                        <a href="" className="login"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#exampleModal2">Đăng nhập</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="footer">
                                <button type="button" className="btn btn-secondary close" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary create">Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text" id="exampleModalLabel">Đăng nhập</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-outform">
                                <div className="out-form">
                                    <div className="group">
                                        <input type="text" className="form-input" placeholder="Nhập email hoặc số điện thoại"/>
                                    </div>
                                    <div className="group">
                                        <input type="password" className="form-input" placeholder="nhập mật khẩu"/>
                                    </div>
                                    <div className="group-text">
                                        <a href="" className="forgot">Quên mật khẩu</a>
                                        <a href="" className="sms">Đăng nhập với SMS</a>
                                    </div>
                                </div>
                                <div className="social">
                                    <button href="#" className="btn face">
                                        <i className="fab fa-facebook"></i>
                                        Facebook
                                    </button>
                                    <button href="" className="btn google">
                                        <i className="fab fa-google"></i>
                                        Google
                                    </button>
                                    <button href="" className="btn apple">
                                        <i className="fab fa-apple"></i>
                                        Apple
                                    </button>
                                </div>
                                <div className="account padd">
                                    <p className="text">
                                        Bạn mới biết đến Shopee? &nbsp; 
                                        <a href="" className="login"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#exampleModal1">Đăng kí</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="footer">
                                <button type="button" className="btn btn-secondary close" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary create">Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
    )
}