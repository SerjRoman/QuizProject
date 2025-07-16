import { useEffect } from "react";
import { SortQuizzesHeaderCell } from "@/features/teacher";
import {
	QuizTableRow,
	setFilters,
	useGetMyQuizzesQuery,
} from "@/entities/quiz";
import { selectFilteredQuizzes } from "@/entities/quiz/model/slices/quiz-library.selector";
import { setTokens, useLoginMutation } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Dropdown, Icons, MenuButton } from "@/shared/ui";

import styles from "./root.module.css";

function App() {
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();
	useEffect(() => {
		const token = localStorage.getItem("token");
		const refreshToken = localStorage.getItem("refreshToken");
		if (!token || !refreshToken) return;
		dispatch(setTokens({ token, refreshToken }));
	}, [dispatch]);
	const state = useAppSelector((state) => state);
	const { data } = useGetMyQuizzesQuery(
		{},
		{
			selectFromResult: (queryResult) =>
				selectFilteredQuizzes(state, queryResult),
		}
	);

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
						onClick={() => {
							open();
							dispatch(
								setFilters({
									filters: {
										tagsIds: [prompt() ?? ""],
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
					dispatch(setFilters({ filters: { tagsIds: [] } }));
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
			<table style={{ width: "100%" }}>
				<thead>
					<SortQuizzesHeaderCell />
				</thead>
				<tbody>
					{data?.map((quiz) => {
						return (
							<QuizTableRow
								quiz={{
									title: quiz.title,
									isFavourite: quiz.isFavourite,
									id: quiz.id,
									createdAt: quiz.createdAt,
								}}
								actions={<></>}
							/>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default App;
