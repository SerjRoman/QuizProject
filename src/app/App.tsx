import { useEffect } from "react";
import {
	useGetAllQuizzesQuery,
	useLazyGetAllQuizzesQuery,
} from "@/entities/quiz/api/quiz";
import { setTokens, useLoginMutation } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { MenuButton } from "@/shared/ui";

import styles from "./App.module.css";

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
	}, []);
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
			<MenuButton
				color="var(--buttonColor)"
				title={"button"}
				dropDown={true}
				icon={
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.33337 16.2501C3.33337 15.6975 3.55287 15.1676 3.94357 14.7769C4.33427 14.3862 4.86417 14.1667 5.41671 14.1667H16.6667M3.33337 16.2501C3.33337 16.8026 3.55287 17.3325 3.94357 17.7232C4.33427 18.1139 4.86417 18.3334 5.41671 18.3334H16.6667V1.66675H5.41671C4.86417 1.66675 4.33427 1.88624 3.94357 2.27694C3.55287 2.66764 3.33337 3.19755 3.33337 3.75008V16.2501Z"
							stroke="#1E1E1E"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
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
