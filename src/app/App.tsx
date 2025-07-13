import { useEffect } from "react";
import { SortQuizzesHeaderCell } from "@/features/library";
import { QuizTableRow, useLazyGetMyQuizzesQuery } from "@/entities/quiz";
import { setTokens, useLoginMutation } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Dropdown, Icons, MenuButton } from "@/shared/ui";

import styles from "./root.module.css";

function App() {
	// const [register] = useRegisterMutation();
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user.user);
	const { filteredQuizzes } = useAppSelector((state) => state.quizLlibrary);
	const [getQuizzes] = useLazyGetMyQuizzesQuery();
	useEffect(() => {
		const token = localStorage.getItem("token");
		const refreshToken = localStorage.getItem("refreshToken");
		if (!token || !refreshToken) return;
		dispatch(setTokens({ token, refreshToken }));
	}, [dispatch]);

	useEffect(() => {
		if (!user) return;
		getQuizzes({ userId: user.id });
	}, [getQuizzes, user]);
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
						email: "abcd@gmail.com",
						password: "123456",
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
						onClick={open}
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
			<table style={{ width: "100%" }}>
				<thead>
					<SortQuizzesHeaderCell />
				</thead>
				<tbody>
					{filteredQuizzes?.map((quiz) => {
						return <QuizTableRow quiz={quiz} actions={<></>} />;
					})}
				</tbody>
			</table>
		</>
	);
}

export default App;
