import React, { SVGProps } from "react";
import { FPasswordInputFieldIconProps } from "./types";
import { eyeIcon } from "./styles";
import { FJoinClassNames } from "../../utils/FJoinClassNames";

export const LockIcon = (props: FPasswordInputFieldIconProps) => {
	const {
		disabled = false,
		style,
		className,
		strokeColor,
		strokeWidth,
	} = props;

	const pathProps: SVGProps<SVGPathElement> = {
		stroke: strokeColor,
		strokeWidth: strokeWidth ?? "1.6",
		strokeLinecap: "round",
		strokeLinejoin: "round",
	};

	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={style}
			className={FJoinClassNames([eyeIcon(disabled), className])}
		>
			<path
				d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
				{...pathProps}
			/>
			<path
				d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
				{...pathProps}
			/>
		</svg>
	);
};
