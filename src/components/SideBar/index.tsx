import styles from "./SideBar.module.scss"
import { SideBarList } from "./SideBarList"

export const SideBar = ()=>{
    return (
        <aside className={styles.sideBar}>
            <SideBarList/>
        </aside>
    )
}