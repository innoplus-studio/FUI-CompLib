import { style } from "typestyle";
import { FUseColor } from "..";
import { FHeaderButtonProps } from "./types";

export const FHeaderButtonContainer = (props: FHeaderButtonProps) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: FUseColor({ colorName: "Sub" }),
		borderRadius: "4px",
		boxSizing: "border-box",
		padding: "8px",
		cursor: props.disabled ? "not-allowed" : "pointer",
		opacity: props.disabled ? 0.4 : 1,
		$nest: {
			"&:hover": {
				backgroundColor: props.disabled
					? undefined
					: FUseColor({ colorName: "Main" }),
				$nest: {
					"svg path": {
						stroke: props.disabled
							? undefined
							: FUseColor({
									colorName: "White",
							  }),
					},
				},
			},
		},
	});
