import { Radio, RadioGroup } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";
import { useForm } from "react-hook-form";

type Subject = {
	id: string;
	name: string;
};

interface Props {
	isOpen: boolean;
	onClose: () => void;
	onAdd: (subject: string) => void;
	subjects: Subject[];
	selectedSubject: string;
}
export function SelectSubjectModal({
	isOpen,
	onClose,
	onAdd,
	subjects,
	selectedSubject,
}: Props) {
	const methodsForm = useForm<{ subject: string }>({
		defaultValues: { subject: selectedSubject },
	});

	return (
		<ShowMoreModal
			title="subjects"
			isOpen={isOpen}
			onClose={onClose}
			onAdd={() => {
				const selected = methodsForm.getValues("subject");
				onAdd(selected);
			}}
		>
			<RadioGroup name={"subject"}>
				{subjects?.map((subject) => (
					<Radio
						labelClassName={clsx(styles.item, styles.subject)}
						key={subject.id}
						label={subject.name}
						value={subject.id}
						isRadioVisible={false}
					/>
				))}
			</RadioGroup>
		</ShowMoreModal>
	);
}
