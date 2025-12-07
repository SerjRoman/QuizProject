import { useParams } from "react-router-dom";
import { useGetQuizByIdQuery } from "@/entities/quiz";
import { QuizHeader } from "../quiz-header/quiz-header";
import styles from "./page.module.css";
export function QuizPage() {
	const { id } = useParams<{ id: string }>();
	const { data, isLoading } = useGetQuizByIdQuery(
		{ quizId: id ?? "" },
		{ skip: !id }
	);
	if (isLoading) return <div>Loading...</div>;
	if (!data) return <div>Quiz not found</div>;

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<QuizHeader quiz={data} />
			</div>
		</div>
	);
}
