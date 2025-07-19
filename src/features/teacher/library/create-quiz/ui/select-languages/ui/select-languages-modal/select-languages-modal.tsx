import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { Checkbox, CheckboxGroup } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";


type Language = {
	id: string;
	name: string;
};

interface Props {
	isOpen: boolean;
	onClose: () => void;
	onAdd: (languages: string[]) => void;
	languages: Language[];
	selectedLanguages: string[];
}

export function SelectLanguagesModal({
	isOpen,
	onClose,
	onAdd,
	languages,
	selectedLanguages,
}: Props) {
	const methodsForm = useForm<{ languages: string[] }>({
		defaultValues: {
			languages: selectedLanguages,
		},
	});

	return (
		<ShowMoreModal
			title="languages"
			isOpen={isOpen}
			onClose={onClose}
			onAdd={() => {
				const selected = methodsForm.getValues("languages");
				onAdd(selected);
			}}
		>
			<CheckboxGroup name="languages">
				{languages.map((language) => (
					<Checkbox
						key={language.id}
						value={language.id}
						label={language.name}
						labelClassName={clsx(styles.item, styles.language)}
					/>
				))}
			</CheckboxGroup>
		</ShowMoreModal>
	);
}