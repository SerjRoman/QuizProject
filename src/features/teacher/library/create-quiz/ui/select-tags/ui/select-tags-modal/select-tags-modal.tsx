import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { Checkbox, CheckboxGroup } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";
type Tag = {
	id: string;
	name: string;
};
export function SelectTagsModal({
	isOpen,
	onClose,
	onAdd,
	tags,
	selectedTags,
}: {
	isOpen: boolean;
	onClose: () => void;
	onAdd: (selected: string[]) => void;
	tags: Tag[];
	selectedTags: string[];
}) {
	const methodsForm = useForm<{ tags: string[] }>({
		defaultValues: {
			tags: selectedTags,
		},
	});

	return (
		<ShowMoreModal
			title="tags"
			isOpen={isOpen}
			onClose={onClose}
			onAdd={() => {
				const selected = methodsForm.getValues("tags");
				onAdd(selected);
			}}
		>
			<CheckboxGroup name={"tags"}>
				{tags?.map((tag) => (
					<Checkbox
						value={tag.id}
						labelClassName={clsx(styles.item, styles.tag)}
						key={tag.id}
						label={tag.name}
					/>
				))}
			</CheckboxGroup>
		</ShowMoreModal>
	);
}
