import React, { SVGProps } from "react";
import { FSearchBarClearIconProps } from "./types";
import { styles } from "./styles";
import { FReturnColor } from "../..";

export const ClearIcon = (props: FSearchBarClearIconProps) => {
	const pathProps: SVGProps<SVGPathElement> = {
		stroke: FReturnColor({ color: "Grey" }),
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props.pathProps,
	};

	return (
		<svg
			style={props.style}
			className={styles.ClearIconDiv + " " + props.className}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => props.onClick()}
		>
			<path d="M13.5 4.5L4.5 13.5" {...pathProps} />
			<path d="M4.5 4.5L13.5 13.5" {...pathProps} />
		</svg>
	);
};
