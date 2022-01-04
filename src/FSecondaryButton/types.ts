import { CSSProperties, ReactNode } from "react";
import { OnClickFunction } from "../global.types";

export interface FSecondaryButtonProps {
	label: string;
	onClick: OnClickFunction<void>;
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	style?: CSSProperties;
	textClassName?: string;
	textStyle?: CSSProperties;
}
