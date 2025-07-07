import { useDispatch } from "react-redux";
// !!should not be here
import type { AppDispatch } from "@/app/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
