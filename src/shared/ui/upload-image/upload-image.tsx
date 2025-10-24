import { clsx } from "clsx";
import { useEffect, useState } from "react";
import styles from "./upload-image.module.css";
import type { UploadImageProps } from "./upload-image.types";

export function UploadImage({
	children,
	defaultImage,
	classNames,
	onImageSelected,
	...restProps
}: UploadImageProps) {
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [image, setImage] = useState<File | string | undefined>(defaultImage);
	useEffect(() => {
		if (image instanceof File) {
			const objectUrl = URL.createObjectURL(image);
			setPreviewUrl(objectUrl);
			return () => URL.revokeObjectURL(objectUrl);
		} else if (typeof image === "string" && image) {
			setPreviewUrl(image);
		} else if (!image) {
			setPreviewUrl(null);
		}
	}, [image]);
	return (
		<div className={clsx(classNames?.block)}>
			<label className={clsx(styles.uploadLabel, classNames?.label)}>
				<input
					type="file"
					accept="image/*"
					className={clsx(styles.hiddenInput, classNames?.input)}
					onChange={(event) => {
						const file = event.target.files?.[0];
						onImageSelected?.(file);
						setImage(file);
					}}
					{...restProps}
				/>
				{children}
			</label>
			{previewUrl && (
				<img
					src={previewUrl}
					alt="Preview"
					className={clsx(styles.previewImage, classNames?.preview)}
				/>
			)}
		</div>
	);
}
