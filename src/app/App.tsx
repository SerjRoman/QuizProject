import { useEffect } from "react";
import {
	useGetAllQuizzesQuery,
	useLazyGetAllQuizzesQuery,
} from "@/entities/quiz/api/quiz";
import { setTokens, useLoginMutation } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { Dropdown, Icons, MenuButton } from "@/shared/ui";

import styles from "./root.module.css";
function App() {
	// const [register] = useRegisterMutation();
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();
	const { data, isLoading } = useGetAllQuizzesQuery();
	const [fetchQuizzes] = useLazyGetAllQuizzesQuery();
	useEffect(() => {
		const token = localStorage.getItem("token");
		const refreshToken = localStorage.getItem("refreshToken");
		if (!token || !refreshToken) return;
		dispatch(setTokens({ token, refreshToken }));
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
						email: "abcd@gmail.com",
						password: "123456",
					});
				}}
			>
				Login
			</button>
			<button
				onClick={() => {
					fetchQuizzes();
				}}
			>
				Quizzes
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
			<p>{isLoading}</p>
			<div>
				{data?.map((quiz) => {
					return (
						<div>
							<h1>{quiz.title}</h1>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
