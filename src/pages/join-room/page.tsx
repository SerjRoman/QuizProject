import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EnterCodeBlock } from "@/widgets/enter-code-block";
import { useAppSelector } from "@/shared/lib";
import { Images } from "@/shared/ui";
import styles from "./page.module.css";
import { BaseLayout } from "@/app/layouts/base";

export function JoinRoomPage() {
	const { step } = useAppSelector((state) => state["join-room"]);
	const navigate = useNavigate();

	useEffect(() => {
		if (step == "profile-setup") {
			navigate("/join/profile-setup");
		}
	}, [navigate, step]);
	return (
		<BaseLayout>
			<div className={styles.page}>
				<div className={styles.formSegment}>
					<EnterCodeBlock />
				</div>
				<div className={styles.logoSegment}>
					<img src={Images.logo} className={styles.logo} />
				</div>
			</div>
		</BaseLayout>
	);
}
