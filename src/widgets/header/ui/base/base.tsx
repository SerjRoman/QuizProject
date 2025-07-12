import { useLocation, useNavigate } from "react-router-dom";
import { ProfileBlock } from "@/entities/user";
import { Dropdown, MenuButton } from "@/shared/ui";
import styles from "./base.module.css";
import type { IHeader } from "./base.types";

export function Header({ nav_bar_button }: IHeader) {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<header className={styles.main}>
			<div className={styles.tabs}>
				{nav_bar_button.map((tab) => {
					return (
						<Dropdown
							showOn="hover"
							trigger={() => (
								<MenuButton
									title={tab.title}
									enabled={tab.path === location.pathname}
									onClick={() => navigate(`${tab.path}`)}
									iconRight={ tab.iconRight &&
										<tab.iconRight/>
									}
									iconLeft={tab.iconLeft && <tab.iconLeft/>}
								/>
							)}
							className={styles.dropdown}
							dataSource={tab.dataSource ?? []}
							renderItem={(item) => (
								<div>
									<h3>{item.title}</h3>
								</div>
							)}
						/>
					);
				})}
			</div>
			<ProfileBlock />
		</header>
	);
}
