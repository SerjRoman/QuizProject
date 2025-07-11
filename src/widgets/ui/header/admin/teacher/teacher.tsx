import { useLocation, useNavigate } from "react-router-dom";
import { ProfileBlock } from "@/entities/user";
import { ADMIN_TABS_MAP } from "@/shared/model/constants/navigation-map";
import { Dropdown, Icons, MenuButton } from "@/shared/ui";

import styles from "./teacher.module.css";

export function TeacherHeader() {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<header className={styles.main}>
			<div className={styles.tabs}>
				{ADMIN_TABS_MAP.map((tab) => {
					return (
						<MenuButton
							title={tab.title}
							// disabled={true}
							enabled={tab.path === location.pathname}
							onClick={() => navigate(`${tab.path}`)}
							iconRight={
								<Dropdown
									showOn="hover"
									trigger={() =>
										tab.path.endsWith(
											"/community"
										) ? undefined : (
											<Icons.ArrowDown />
										)
									}
									dataSoruce={tab.dataSoruce ?? []}
									renderItem={(item) => <div>{item}</div>}
								/>
							}
							iconLeft={<tab.icon />}
						/>
					);
				})}
			</div>
			<ProfileBlock />
		</header>
	);
}
