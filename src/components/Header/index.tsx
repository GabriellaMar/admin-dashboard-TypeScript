import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import bigLogo from '../../assets/big-dashboard-logo@1x.png'
import smallLogo from '../../assets/small-dashboard-logo@2x.png'
import useMediaQuery from "../../hooks/useMediaQuery";
//  import { Container } from "../Container/Container";
import { SideBarList } from "../SideBar/SideBarList/SideBarList";
import { useState } from "react";

// type HeaderProps = {
//   registered: boolean;
// }

export const Header: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const isAboveSmallScreens = useMediaQuery("(max-width: 767px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const handleMobileMenu = ()=>{
    setIsMenuToggled(!isMenuToggled)
    document.body.style.overflow = isMenuToggled ? 'auto' : 'hidden';
}

  return (

    <header className={styles.header}>
      {/* <Container > */}
      {/* <div className={styles.headerWrapper}> */}
        {isAboveSmallScreens && 
        <button type="button"
        className={styles.headerBtn}
        onClick={handleMobileMenu}
        >
        <RxHamburgerMenu className={styles.burgerIcon} />
        </button>
        }

        {/* <Link to = {`${!registered} ? 'login' : '/' `}>  */}
        <img src={isAboveMediumScreens ? bigLogo : smallLogo} alt="Logo image" />
        {/* </Link>  */}
        <div>
          <h2>Medicine store</h2>
          <div className={styles.linkWrapper}>
            <Link to='/dashboard' className={styles.link}>Dashboard | </Link>
            <p>vendor@gmail.com</p>
          </div>
        </div>
      {/* </div> */}
      {/* </Container> */}
      {isAboveSmallScreens && isMenuToggled &&
      <div className={styles.headerMenu}>
      <button type="button"
        className={styles.headerBtn}
      onClick={handleMobileMenu}
      >
           <IoCloseOutline className={styles.closeIcon}/>
           </button>
            <SideBarList/>
          
      
     </div>
}
    </header>

  );
}