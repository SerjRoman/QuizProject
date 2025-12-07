import { TEACHER_HEADER_MAP } from "@/entities/user";
import { Header } from "../base";

export function TeacherHeader() {
	return <Header navBarButtons={TEACHER_HEADER_MAP} />;
}
