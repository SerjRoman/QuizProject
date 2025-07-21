import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Icons } from "@/shared/ui";
import styles from "./upload-image.module.css";

export function UploadImage() {

	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const { setValue } = useFormContext();
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				const base64String = reader.result as string;
				setPreviewUrl(base64String);
				setValue("coverImage", base64String); 
			};

			reader.readAsDataURL(file); 
		}
	};
	return (
		<div className={styles.image}>
			<label className={styles.uploadLabel}>
				<Icons.Plus width={20} height={20} />
				<input
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					className={styles.hiddenInput}
				/>
			</label>
			{previewUrl && (
				<div>
					<img
						src={previewUrl}
						alt="Preview"
						className={styles.previewImage}
					/>
				</div>
			)}
		</div>
	);
}
