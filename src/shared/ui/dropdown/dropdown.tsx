import { clsx } from "clsx";
import { useRef, useState } from "react";
import { useClickOutside } from "@/shared/lib";
import styles from "./dropdown.module.css";
import type { IDropdownProps } from "./dropdown.types";

export function Dropdown<T>(props: IDropdownProps<T>) {
	const {
		dataSource,
		renderItem,
		trigger,
		showOn,
		className,
		doCloseOnClickOutside,
		...restProps
	} = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	function handleOpen() {
		setIsOpen(true);
	}
	function handleClose() {
		setIsOpen(false);
	}
	function handleToggle() {
		setIsOpen(!isOpen);
	}
	const renderProps = {
		isOpen,
		open: handleOpen,
		close: handleClose,
		toggle: handleToggle,
	};
	const handleHover = showOn === "hover" && {
		onMouseEnter: handleOpen,
		onMouseLeave: handleClose,
	};
	useClickOutside(dropdownRef, () => {
		if (doCloseOnClickOutside) {
			handleClose();
		}
	});

	return (
		<div
			className={clsx(styles.container)}
			ref={dropdownRef}
			{...handleHover}
		>
			{trigger(renderProps)}
			{isOpen && (
				<div {...restProps} className={clsx(styles.dropdownPanel, className)}>
					{dataSource?.map(renderItem)}
				</div>
			)}
		</div>
	);
}
