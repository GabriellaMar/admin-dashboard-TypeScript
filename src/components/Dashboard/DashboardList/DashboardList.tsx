import OrdersIcon from '../../../icons/SideBarIcons/OrdersIcon'
import styles from './DashboardList.module.scss'

export const DashboardList = () => {
    return (
        <ul className={styles.dashboardList}>
            <li className={styles.dashboardItem}>
                <div>
                    <OrdersIcon />
                    <p>All products</p>
                </div>
                <p>0</p>
            </li>
            <li className={styles.dashboardItem}>
                <div>
                    <OrdersIcon />
                    <p>All suppliers</p>
                </div>
                <p>0</p>

            </li>
            <li className={styles.dashboardItem}>
                <div>
                    <OrdersIcon />
                    <p> All Customers</p>
                </div>
                <p>0</p>

            </li>
        </ul>
    )
}