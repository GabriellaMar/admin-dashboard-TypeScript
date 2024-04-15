import { Suspense } from "react";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router";
import styles from "./SharedLayout.module.scss"

const SharedLayout: React.FC = () => {

    return (
        <div className={styles.layoutWrapper}>
        <Header />
          <Suspense fallback={<div>Loading ... </div>}>
        <Outlet />
      </Suspense>
        </div>
    
  
      
    )
  }
  
  export default SharedLayout;