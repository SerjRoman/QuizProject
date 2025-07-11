import { Outlet } from "react-router-dom";
import { TeacherHeader } from "@/widgets/ui";

import styles from "./admin.module.css"

export function AdminLayout(){
    return(
        <div className={styles.main}>
            <TeacherHeader/>
            <main><Outlet/></main>
        </div>
    )
}