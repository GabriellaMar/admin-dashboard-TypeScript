import { Suspense } from "react";
// import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header";
import { Outlet } from "react-router";
 import styles from "./SharedLayout.module.scss"
import { SideBar } from "../../components/SideBar";
import useMediaQuery from "../../hooks/useMediaQuery";

// type SharedLayoutPrpps = {
//   registered: boolean;
// }

const SharedLayout: React.FC = () => {
  const isAboveLargeScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
    {/* <div className={styles.layoutWrapper}> */}
      <Header />
      <div className={styles.contentWrapper}>
        {isAboveLargeScreens &&  <SideBar />}
     
      <Suspense fallback={<div>Loading ... </div>}>
        <Outlet />
      </Suspense>
      </div>
    {/* </div> */}
  
    {/* <div className={styles.sideBar}>
</div> */}
</>



  )
}

export default SharedLayout;