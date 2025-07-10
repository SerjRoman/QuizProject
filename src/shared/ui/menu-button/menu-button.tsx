import type { CSSProperties, ReactNode } from "react";
import styles from "./menu-button.module.css";

interface IMenuButtonProps {
	title: string;
	icon?: ReactNode;
	color: string;
	dropDown?: boolean;
}

export function MenuButton(props: IMenuButtonProps) {
	return (
		<button
			className={styles.button}
            style={{ backgroundColor: props.color } as CSSProperties}
		>
			<div>{props.icon}</div>
			<p className={styles.title}>{props.title}</p>
			<span className={styles.dropDown}>
				{props.dropDown ? (
					<svg viewBox="0 0 20 20" fill="none">
						<path
							d="M5 7.5L10 12.5L15 7.5"
							stroke="#383435"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : null}
			</span>
		</button>
	);
}
