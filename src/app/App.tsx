import { useEffect } from "react";
import { useLazyMeQuery } from "@/entities/user";
import styles from "./App.module.css";
import { useAppSelector } from "./store";

function App() {
	const [trigger] = useLazyMeQuery();
	const { token } = useAppSelector((state) => state.user);
	useEffect(() => {
		if (!token) return;
		trigger();
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
			<div className="card">
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
