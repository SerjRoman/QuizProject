import { useFormContext } from "react-hook-form";
import { MAX_FILE_SIZE, SUPPORTED_FORMATS } from "@/shared/model";
import { Icons, UploadImage } from "@/shared/ui";
import type { ICreateQuizSchema } from "../../model";
import styles from "./upload-cover.module.css";

export function UploadCover() {
	const { setValue, watch, setError } = useFormContext<ICreateQuizSchema>();
	const coverImageFile: File | string | null = watch("coverImage");

	const handleImageChange = (image: File | undefined) => {
		if (image) {
			if (!SUPPORTED_FORMATS.includes(image.type)) {
				setError("coverImage", { message: "Wrong file format" });
				return;
			}
			if (image.size >= MAX_FILE_SIZE) {
				setError("coverImage", {
					message: "File is bigger than expected",
				});
			}
			setValue("coverImage", image, {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	};
	return (
		<UploadImage
			onImageSelected={handleImageChange}
			classNames={{
				block: styles.image,
				label: styles.uploadLabel,
				preview: styles.previewImage,
			}}
			defaultImage={coverImageFile || undefined}
		>
			<Icons.Plus width={20} height={20} />
		</UploadImage>
	);
}
