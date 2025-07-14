import { useSelector } from "react-redux";
// !!should not be here
import type { RootState } from "@/app/store";

export const useAppSelector = useSelector.withTypes<RootState>();
