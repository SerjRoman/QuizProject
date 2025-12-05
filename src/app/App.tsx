import { useEffect } from "react";
import { setFilters } from "@/entities/quiz";
import { setTokens, useLoginMutation } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { Dropdown, Icons, MenuButton } from "@/shared/ui";

import styles from "./root.module.css";
function App() {
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();
	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");
		if (!accessToken || !refreshToken) return;
		dispatch(setTokens({ accessToken, refreshToken }));
	}, [dispatch]);

	return (
		<>
			<div className={styles.red}>
				<a href="https://vite.dev" target="_blank"></a>
				<a href="https://react.dev" target="_blank">
					<img className="logo react" alt="React logo" />
				</a>
			</div>

			<h1 className={styles.red}>Vite + React</h1>
			<button
				onClick={() => {
					login({
						email: "test@example.com",
						password: "strongpassword123",
					});
				}}
			>
				Login
			</button>
			<Dropdown
				doCloseOnClickOutside={true}
				dataSource={["1Item", "2Item", "3Item"]}
				renderItem={(item) => <p key={item}>{item}</p>}
				trigger={({ open, close }) => (
					<MenuButton
						onClick={() => {
							open();
							dispatch(
								setFilters({
									filters: {
										tagIds: [prompt() ?? ""],
									},
								})
							);
						}}
						title={"button"}
						enabled={true}
						iconLeft={
							<Icons.ArrowDown
								onClick={(event) => {
									event.stopPropagation();
									close();
								}}
							/>
						}
					/>
				)}
			></Dropdown>
			<MenuButton
				onClick={() => {
					dispatch(setFilters({ filters: { tagIds: [] } }));
				}}
				title={"FILTER"}
				enabled={true}
				iconLeft={
					<Icons.ArrowDown
						onClick={(event) => {
							event.stopPropagation();
							close();
						}}
					/>
				}
			/>
		</>
	);
}

export default App;
