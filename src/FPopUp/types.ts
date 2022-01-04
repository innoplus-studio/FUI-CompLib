import { CSSProperties, ReactNode } from "react";
import { OnClickFunction } from "../global.types";

export interface FPopUpProps {
	children: ReactNode;
	onClose: OnClickFunction<void>;
	className?: string;
	isNotAllowToClose?: boolean;
	overlayClassName?: string;
	overlayStyle?: CSSProperties;
	style?: CSSProperties;
}
