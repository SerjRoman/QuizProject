import { Chip, Typography } from "@/shared/ui";

interface FilterChipProps {
	label: string;
	isActive: boolean;
	variant: "green" | "pink" | "blue";
}

export const FilterChip = ({ label, isActive, variant }: FilterChipProps) => {
	return (
		<Chip
			labelNode={<Typography.SmallBody>{label}</Typography.SmallBody>}
			variant={isActive ? variant : "default"}
			style={{ userSelect: "none", cursor: "pointer" }}
		/>
	);
};
