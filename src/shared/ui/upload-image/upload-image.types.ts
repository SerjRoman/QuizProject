import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ClassNames = {
	block?: string;
	label?: string;
	preview?: string;
	input?: string;
};

export interface UploadImageProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	defaultImage?: File | string;
	classNames?: ClassNames;
	onImageSelected?: (image?: File) => void;
}
