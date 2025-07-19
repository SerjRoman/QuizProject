import { clsx } from "clsx";
import { useMemo, useState } from "react";
import { useGetSubjectsQuery } from "@/features/teacher/library/quiz-filters";
import { FilterBlock, Radio, RadioGroup } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";

export function SelectSubjectBlock() {
	const { data: subjects } = useGetSubjectsQuery();

	const [selectedSubject, setSelectedSubject] = useState<string>("");
	const [isShowMoreSubjectsOpen, setIsShowMoreSubjectsOpen] = useState(false);
	const [isFullOpenSubjects, setIsFullOpenSubjects] =
		useState<boolean>(false);

	const topSubjects = useMemo(() => {
		if (!subjects) return [];
		const selectedObj = subjects.find((s) => s.id === selectedSubject);
		const rest = subjects.filter((s) => s.id !== selectedSubject);
		return selectedObj
			? [selectedObj, ...rest].slice(0, 5)
			: subjects.slice(0, 5);
	}, [subjects, selectedSubject]);

	function handleAddSubject(subject: string) {
		setSelectedSubject(subject);
		setIsShowMoreSubjectsOpen(false);
	}
	return (
		<>
			<FilterBlock
				actions={
					subjects && subjects.length > 5 ? (
						<p
							className={clsx(styles.showMore, styles.shMSub)}
							onClick={() => {
								setIsFullOpenSubjects(!isFullOpenSubjects);
								setIsShowMoreSubjectsOpen(
									!isShowMoreSubjectsOpen
								);
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
			{subjects && (
				<SelectSubjectModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onAdd={(subj) => {
						setSelectedSubject(subj);
						setIsModalOpen(false);
					}}
					subjects={subjects}
					selectedSubject={selectedSubject}
				/>
			)}
		</>
	);
}
