import { Outlet } from "react-router-dom";
import styles from "./admin.module.css"

export function AdminLayout(){
    return(
        <div className={styles.main}>
            <header>HEADER</header>
            <main><Outlet/></main>
        </div>
    )
}