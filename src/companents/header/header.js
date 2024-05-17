import './header.css';

const Header = () => {
    return(
        <header className="header">
            <ul className="header-list">
                <li className="header-list-item">
                    <button className='header-get-info-btn'></button>
                </li>
                <li className="header-list-item"><h1>PROJECTS</h1></li>
                <li className="header-list-item">
                    <button className='header-notification-btn'></button>
                </li>
            </ul>
        </header>
    )
}

export default Header;