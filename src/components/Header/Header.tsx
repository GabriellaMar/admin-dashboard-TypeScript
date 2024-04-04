import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <img src={logo} />
            <ul>
                <li><Link to="/"> First Page</Link></li>
                <li><Link to="/second"> Second Page</Link></li>
            </ul>
        </div>
    );
}