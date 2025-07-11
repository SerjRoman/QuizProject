import { useLocation, useNavigate } from "react-router-dom";
import { Icons, Images, MenuButton } from "@/shared/ui";
import styles from "./teacher.module.css";

// const tabs = [
// 	{ path: `${location.pathname}/libraries`, title: "Libraries" },
// 	{ path: `${location.pathname}/reports`, title: "Reports" },
// 	{ path: `${location.pathname}/classes`, title: "Classes" },
// 	{ path: `${location.pathname}/community`, title: "Community" },
// ];
const tabs = [
	{ path: "/admin/libraries", title: "Libraries" },
	{ path: "/admin/reports", title: "Reports" },
	{ path: "/admin/classes", title: "Classes" },
	{ path: "/admin/community", title: "Community" },
];
export function TeacherHeader() {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.main}>
				<div className={styles.tabs}>
					{tabs.map((tab) => {
						return (
							<MenuButton
								title={tab.title}
								// disabled={true}
								enabled={tab.path === location.pathname}
								onClick={() => navigate(`${tab.path}`)}
								iconRight={
									tab.path.endsWith(
										"/community"
									) ? undefined : (
										<Icons.ArrowDown />
									)
								}
								iconLeft={<Icons.Library />}
							/>
						);
					})}
				</div>
				<div className={styles.profileBlock}>
					<Icons.Bell />
                    <img src={Images.avatar} alt="" />
					<h1 className={styles.text}>Teacher</h1>
				</div>
			</div>
		</>
	);
}
