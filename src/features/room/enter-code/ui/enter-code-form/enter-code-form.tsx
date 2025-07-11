import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import {
	ParticipantTypeConstant,
	useVerifyCodeMutation,
} from "@/entities/room";
import { useAppSelector } from "@/shared/lib";
import { MAX_LENGTH, type IEnterCodeFormData } from "../../lib";
import styles from "./enter-code-form.module.css";

export function EnterCodeForm() {
	const [searchParams] = useSearchParams();
	const { entryCode } = useAppSelector((state) => state["join-room"]);

	const [verifyCode] = useVerifyCodeMutation();

	const { register, handleSubmit } = useForm<IEnterCodeFormData>({
		defaultValues: {
			entryCode: searchParams.get("code") ?? entryCode,
			participantType: "GUEST",
		},
	});
	const { user } = useAppSelector((state) => state.user);

	function onEntryCodeSubmit(data: IEnterCodeFormData) {
		verifyCode({
			code: data.entryCode,
			participantType: data.participantType,
		});
	}

	return (
		<form
			className={styles.enterCodeForm}
			onSubmit={handleSubmit(onEntryCodeSubmit)}
		>
			<div className={styles.selectUserTypeBlock}>
				<label className={styles.selectUserField}>
					<input
						type="radio"
						{...register("participantType")}
						value={ParticipantTypeConstant.STUDENT}
					/>
					{user
						? `Continue as ${user.firstName} ${user.lastName}`
						: "I have an account"}
				</label>
				<label className={styles.selectUserField}>
					<input
						type="radio"
						{...register("participantType", {})}
						value={ParticipantTypeConstant.GUEST}
					/>
					Join as a guest
				</label>
			</div>
			<div className={styles.SubmitBlock}>
				<div className={styles.enterCodeBlock}>
					<label className={styles.enterCodeField}>
						Session code
						<input
							className={styles.enterCodeInput}
							type="text"
							{...register("entryCode", {
								maxLength: MAX_LENGTH,
							})}
							placeholder="123456789"
							maxLength={MAX_LENGTH}
						/>
					</label>
				</div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
