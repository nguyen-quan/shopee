


export const Search = () => {
    return (
        <div className="search">
            <div className="wrap">
                <input className="search-input" placeholder="Search..." type="text"/>
                <div className="history">
                    <ul className="list">
                        <li className="item">
                            <a href="">Đồng hồ</a>
                        </li>
                        <li className="item">
                            <a href="">Giày thể thao</a>
                        </li>
                        <li className="item">
                            <a href="">Laptop</a>
                        </li>
                    </ul>
                </div>
            </div>
            <button><i className="fas fa-search"></i></button>
        </div>
    )
}