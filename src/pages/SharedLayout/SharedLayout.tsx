import { Suspense } from "react";
// import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router";
 import styles from "./SharedLayout.module.scss"
import { SideBar } from "../../components/SideBar";

// type SharedLayoutPrpps = {
//   registered: boolean;
// }

const SharedLayout: React.FC = () => {

  return (
    <>
    {/* <div className={styles.layoutWrapper}> */}
      <Header />
      <div className={styles.contentWrapper}>
      <SideBar />
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