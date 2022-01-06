import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const FSelectorWrapper = style({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	zIndex: 25,
});

export const FSelectorContainer = (isClicked: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.PURE_WHITE,
		border:
			"0.075rem solid " +
			(isClicked ? FColorTypes.BRAND : FColorTypes.HARD_STROKE),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		columnGap: "0.5rem",
		cursor: "pointer",
		display: "flex",
		flexDirection: "row",
        justifyContent: "space-between",
		padding: "0.5rem",
		$nest: {
			"&:hover": {
				borderColor: FColorTypes.BLACK,
				$nest: {
					"svg path": {
						stroke: FColorTypes.BLACK,
					},
				},
			},
		},
	});

export const FSelectorContentDiv = style({
	display: "flex",
	flexDirection: "column",
});

export const FSelectorSelectedOptionDiv = style({
	whiteSpace: "pre-wrap"
})

export const FSelectorDropdownContainer = (
	ref: React.RefObject<HTMLDivElement>,
	isClicked: boolean
) =>
	style({
		zIndex: 1,
		position: "absolute",
		width: ref.current ? ref.current.offsetWidth : 0,
		maxHeight: "20rem",
		marginTop: ref.current ? ref.current.offsetHeight : 0,
		visibility: isClicked ? "visible" : "hidden",
		transition: "all 0.1s ease-in-out",
	});