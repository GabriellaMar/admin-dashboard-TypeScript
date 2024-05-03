import styles from "./SideBarList/SideBarList.module.scss"
import { SideBarList } from "./SideBarList/SideBarList"

export const SideBar = ()=>{
    return (
        <aside className={styles.sideBar}>
            <SideBarList/>
        </aside>
    )
}