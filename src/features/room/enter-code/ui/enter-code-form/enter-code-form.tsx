import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import {
	ParticipantTypeConstant,
	useVerifyCodeMutation,
} from "@/entities/room";
import { useAppSelector } from "@/shared/lib";
import { Button, Form, Radio, RadioGroup } from "@/shared/ui";
import { MAX_LENGTH, type IEnterCodeFormData } from "../../model";
import styles from "./enter-code-form.module.css";

export function EnterCodeForm() {
	const [searchParams] = useSearchParams();

	const [verifyCode] = useVerifyCodeMutation();

	const methodsForm = useForm<IEnterCodeFormData>({
		defaultValues: {
			entryCode: searchParams.get("code") ?? "",
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
		<Form<IEnterCodeFormData>
			formProps={{ className: styles.enterCodeForm }}
			methods={methodsForm}
			onSubmit={onEntryCodeSubmit}
		>
			<div className={styles.selectUserTypeBlock}>
				<RadioGroup name={"participantType"}>
					<Radio
						value={ParticipantTypeConstant.STUDENT}
						labelClassName={styles.selectUserField}
						label={
							user
								? `Continue as ${user.firstName} ${user.lastName}`
								: "I have an account"
						}
					/>
					<Radio
						value={ParticipantTypeConstant.GUEST}
						labelClassName={styles.selectUserField}
						label="Continue as a guest"
					/>
				</RadioGroup>
			</div>
			<div className={styles.submitBlock}>
				<div className={styles.enterCodeBlock}>
					<Form.Input
						name="entryCode"
						label={"Session code"}
						placeholder="123456789"
						maxLength={MAX_LENGTH}
						className={styles.enterCodeInput}
						labelClassName={styles.enterCodeField}
					/>
				</div>
				<Button variant="gray" title="JOIN" />
			</div>
		</Form>
	);
}
