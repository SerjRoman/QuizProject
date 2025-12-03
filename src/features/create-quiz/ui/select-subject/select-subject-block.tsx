import { clsx } from "clsx";
import { useMemo, type ChangeEvent, type ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { useGetSubjectsQuery } from "@/shared/api";
import { useModal } from "@/shared/lib";
import { FilterBlock, Radio, RadioGroup } from "@/shared/ui";
import type { CreateQuizSchema } from "../../model";
import { ShowMoreModal } from "../show-more-modal";
import styles from "./selects-subject-block.module.css";

export function SelectSubjectBlock() {
	const { data: subjects } = useGetSubjectsQuery();
	const [{ open }, ModalProvider] = useModal<{
		title: string;
		name: "subjectId";
		content: (
			onChange: (e: ChangeEvent<HTMLInputElement>) => void,
			selectedItems: string | string[]
		) => ReactNode;
	}>();
	const { watch } = useFormContext<CreateQuizSchema>();
	const selectedSubject = watch("subjectId");

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
								open({
									title: "subjects",
									name: "subjectId",
									content: (onChange, selectedItems) => {
										return (
											<RadioGroup
												name="subjectIds"
												onChange={onChange}
											>
												{subjects?.map((subject) => (
													<Radio
														labelClassName={clsx(
															styles.item,
															styles.subject
														)}
														checked={selectedItems.includes(
															subject.id
														)}
														isRadioVisible={false}
														key={subject.id}
														label={subject.name}
														value={subject.id}
													/>
												))}
											</RadioGroup>
										);
									},
								});
							}}
						>
							Show more
						</p>
					) : undefined
				}
				title="Subject"
				className={styles.filterBlock}
			>
				<RadioGroup name={"subjectId"}>
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
			<ModalProvider ModalComponent={ShowMoreModal}></ModalProvider>
		</>
	);
}
