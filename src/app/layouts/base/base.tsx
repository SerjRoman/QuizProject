import { useEffect } from "react";
import { setTokens } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import styles from "./base.module.css";
import type { IBaseLayoutProps } from "./base.types";

export function BaseLayout({ bgImage, children }: IBaseLayoutProps) {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const token = localStorage.getItem("token");
		const refreshToken = localStorage.getItem("refreshToken");
		if (!token || !refreshToken) return;
		dispatch(setTokens({ token, refreshToken }));
	}, [dispatch]);
	return (
		<div
			className={styles.main}
			style={{ backgroundImage: bgImage && `url(${bgImage})` }}
		>
			{children}
		</div>
	);
}
