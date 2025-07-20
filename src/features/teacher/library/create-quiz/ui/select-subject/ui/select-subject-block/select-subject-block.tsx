import { clsx } from "clsx";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import type { ICreateQuizFormData } from "@/features/teacher";
import { useGetSubjectsQuery } from "@/features/teacher";
import { useModal } from "@/shared/lib";
import { Checkbox, FilterBlock, Radio, RadioGroup } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";
import styles from "./selects-subject-block.module.css";

export function SelectSubjectBlock() {
	const { data: subjects } = useGetSubjectsQuery();
	const [{ open }, ModalProvider] = useModal<{
		title: string;
		name: "subject";
	}>();
	const { watch } = useFormContext<ICreateQuizFormData>();
	const selectedSubject = watch("subject");

	const topSubjects = useMemo(() => {
		if (!subjects) return [];
		const selectedObj = subjects.find((s) => s.id === selectedSubject);
		const rest = subjects.filter((s) => s.id !== selectedSubject);
		return selectedObj
			? [selectedObj, ...rest].slice(0, 5)
			: subjects.slice(0, 5);
	}, [subjects, selectedSubject]);

	return (
		<>
			<FilterBlock
				actions={
					subjects && subjects.length > 5 ? (
						<p
							className={clsx(styles.showMore, styles.shMSub)}
							onClick={() => {
								open();
							}}
						>
							Show more
						</p>
					) : undefined
				}
				title="Subject"
				className={styles.filterBlock}
			>
				<RadioGroup name={"subject"}>
					{topSubjects.map((subject) => (
						<Radio
							labelClassName={clsx(styles.item, styles.subject)}
							key={subject.id}
							label={subject.name}
							value={subject.id}
							isRadioVisible={false}
						/>
					))}
				</RadioGroup>
			</FilterBlock>
			<ModalProvider
				ModalComponent={ShowMoreModal}
				customProps={{ title: "subjects", name: "subject" }}
			>
				{subjects?.map((subject) => (
					<Checkbox
						labelClassName={clsx(styles.item, styles.subject)}
						key={subject.id}
						label={subject.name}
						value={subject.id}
					/>
				))}
			</ModalProvider>
		</>
	);
}
