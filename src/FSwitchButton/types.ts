import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { CSSProperties } from "react";
import { OnClickFunction } from "../global.types";

export interface FSwitchButtonProps {
	checked: boolean;
	onClick: OnClickFunction<void>;
	// css style of FSwitchButton container
	containerClassName?: string;
	containerStyle?: CSSProperties;
	disabled?: boolean;

	// css style of FSwitchButton svg
	svgClassName?: string;
	svgStyle?: CSSProperties;

	// css style of FSwitchButton circle
	circleColor?: FColorTypes;
	circleBorderColor?: FColorTypes;
	circleStrokeWidth?: number | string;
	circleCx?: number | string;
	circleCy?: number | string;
	circleR?: number | string;
}
