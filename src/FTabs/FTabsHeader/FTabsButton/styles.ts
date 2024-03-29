import { style } from "typestyle";
import { FReturnColor } from "../../../utils/FReturnColor";

export const buttonDiv = (isSelected: boolean, isHover?: boolean) =>
	style({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		boxSizing: "border-box",
		padding: "6px 12px",
		borderRadius: "8px",
		backgroundColor: FReturnColor({
			color: isSelected || isHover ? "Sub" : "White",
		}),
		cursor: "pointer",
	});
