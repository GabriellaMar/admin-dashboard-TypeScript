import styles from "./SideBarList.module.scss"
import DashboardIcon from "../../../icons/SideBarIcons/DashboardIcon"
import OrdersIcon from "../../../icons/SideBarIcons/OrdersIcon"
import ProductsIcon from "../../../icons/SideBarIcons/ProductsIcon"
import CustomersIcon from "../../../icons/SideBarIcons/CustomersIcon"
import SuppliersIcon from "../../../icons/SideBarIcons/SuppliersIcon"
import { Link } from "react-router-dom"

export const SideBarList = () => {
    return (
        <ul className={styles.sideBarList}>
            <li >
                <Link to='/dashboard'>
                    <DashboardIcon />
                </Link>
            </li>
            <li  >
                <Link to='/orders'>
                    <OrdersIcon />
                </Link>
            </li>
            <li >
                <Link to='/products'>
                    < ProductsIcon />
                </Link>
            </li>
            <li >
                <Link to='/suppliers'>
                    <SuppliersIcon />
                </Link>
            </li>
            <li >
                <Link to='/customers'>
                    <CustomersIcon />
                </Link>
            </li>
        </ul>
    )
}