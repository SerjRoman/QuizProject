import { useLocation, useNavigate } from "react-router-dom";
import { ProfileBlock, ADMIN_HEADER_MAP } from "@/entities/user";
import { Dropdown, Icons, MenuButton } from "@/shared/ui";
import styles from "./teacher.module.css";

export function TeacherHeader() {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<header className={styles.main}>
			<div className={styles.tabs}>
				{ADMIN_HEADER_MAP.map((tab) => {
					return (
						<Dropdown
							showOn="hover"
							trigger={() => (
								<MenuButton
									title={tab.title}
									enabled={tab.path === location.pathname}
									onClick={() => navigate(`${tab.path}`)}
									iconRight={
										!tab.path.endsWith("/community") && (
											<Icons.ArrowDown />
										)
									}
									iconLeft={<tab.icon />}
								/>
							)}
							style={{ backgroundColor: "black", width: "100%" }}
							dataSoruce={tab.dataSoruce ?? []}
							renderItem={(item) => <div>{item}</div>}
						/>
					);
				})}
			</div>
			<ProfileBlock />
		</header>
	);
}
