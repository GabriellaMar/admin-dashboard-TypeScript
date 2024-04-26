import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";

import bigLogo from '../../assets/big-dashboard-logo@1x.png'
import smallLogo from '../../assets/small-dashboard-logo@2x.png'
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container } from "../Container/Container";

// type HeaderProps = {
//   registered: boolean;
// }

export const Header: React.FC = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    return (
        // <Container >
        <header className={styles.header}>
          <Container >
          <div className={styles.headerWrapper}>
          <RxHamburgerMenu className={styles.burgerIcon} />
           {/* <Link to = {`${!registered} ? 'login' : '/' `}>  */}
          <img  src={isAboveMediumScreens ?  bigLogo  : smallLogo} alt="Logo image" />
           {/* </Link>  */}
          <div>
            <h2>Medicine store</h2>
            <div className={styles.linkWrapper}>
            <Link to='/dashboard' className={styles.link}>Dashboard | </Link>
            <p>vendor@gmail.com</p>
            </div>
            </div>
          </div>
          </Container>
        </header>
      
    );
}