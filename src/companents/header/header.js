import './header.css';

const Header = () => {
    return(
        <header className="header">
            <ul className="header-list">
                <li className="header-list-item">
                    <button className='header-get-info-btn'>
                        <img src={require("./img/info.png")} alt="info" />
                    </button>
                </li>
                <li className="header-list-item">PROJECTS</li>
                <li className="header-list-item">
                    <button className='header-get-info-btn'>
                        <img src={require("./img/notification.png")} alt="info" />
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;