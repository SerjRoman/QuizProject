import { useEffect } from "react";
import {
	useGetAllQuizzesQuery,
	useLazyGetAllQuizzesQuery,
} from "@/entities/quiz/api/quiz";
import { setTokens, useLoginMutation } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib";
import { Images } from "@/shared/ui";
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
			<img src={Images.loginBackground} />
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
