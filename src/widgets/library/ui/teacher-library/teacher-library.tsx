import {
	QuizFilterByStatus,
	QuizFilterByVisibility,
} from "@/features/quiz-filters";
import { clearFilters } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import { Tab, TabList, TabPanel, Tabs, Typography } from "@/shared/ui";
import { QuizzesPanel } from "../quizzes-panel";
import styles from "./teacher-library.module.css";

const TAB_CONFIG = [
	{ title: "All", name: "all" },
	{ title: "Created", name: "created" },
	{ title: "Copied", name: "copied" },
	{ title: "Folders", name: "folders" },
	{ title: "Favourite", name: "favourite" },
];

export const TeacherLibrary = () => {
	const dispatch = useAppDispatch();

	const handleTabChange = () => {
		dispatch(clearFilters());
	};

	return (
		<Tabs defaultTab="all" onTabChange={handleTabChange}>
			<TabList
				TabsClassName={styles.tabs}
				activeClassName={styles.active}
				defaultClassName={styles.base}
			>
				{TAB_CONFIG.map((tab) => (
					<Tab
						key={tab.name}
						title={
							<Typography.SmallBody>
								{tab.title}
							</Typography.SmallBody>
						}
						name={tab.name}
					/>
				))}
			</TabList>

			<TabPanel name="all">
				<QuizzesPanel queryArgs={{ from: "all" }} />
			</TabPanel>

			<TabPanel name="created">
				<QuizzesPanel
					queryArgs={{ from: "created" }}
					filters={
						<div className={styles.checkboxFilters}>
							<QuizFilterByStatus />
							<QuizFilterByVisibility />
						</div>
					}
				/>
			</TabPanel>

			<TabPanel name="copied">
				<QuizzesPanel queryArgs={{ from: "copied" }} />
			</TabPanel>

			{/* <TabPanel name="folders">
					<FolderList />
				</TabPanel> */}

			<TabPanel name="favourite">
				<QuizzesPanel queryArgs={{ from: "favourite" }} />
			</TabPanel>
		</Tabs>
	);
};
