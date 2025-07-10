import { clsx } from "clsx";
import { useState } from "react";
import styles from "./dropdown.module.css";
import type { IDropdownProps } from "./dropdown.types";

export function Dropdown<T>(props: IDropdownProps<T>) {
	const { dataSoruce, renderItem, trigger, showOn, className, ...restProps } =
		props;
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleOpen() {
		setIsOpen(true);
	}
	function handleClose() {
		setIsOpen(false);
	}
	function handleClick() {
		setIsOpen(!isOpen);
	}
	const renderProps = {
		isOpen,
		open: handleOpen,
		close: handleClose,
		toggle: handleClick,
	};
	const handleHover = showOn === "hover" && {
		onMouseEnter: handleOpen,
		onMouseLeave: handleClose,
	};

	return (
		<div className={clsx(styles.container, className)} {...handleHover}>
			{trigger(renderProps)}
			{isOpen && (
				<div {...restProps} className={styles.dropdownPanel}>
					{dataSoruce?.map(renderItem)}
				</div>
			)}
		</div>
	);
}
