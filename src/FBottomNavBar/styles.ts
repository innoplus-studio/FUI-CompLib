import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle"; 
import { FTheme } from "../FThemeContext/types";

export const FBottomNavBarContainer = style({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
});

export const FLeadingButtonDiv =  
	style({
		padding: "0.5rem 0.75rem",
	});

export const FActionButtonDiv = (disabled: boolean, theme: FTheme) =>
	style({
		alignSelf: "flex-end",
		padding: "0.5rem 0.75rem",
		backgroundColor: disabled
			? FColorTypes.PRIMARY_GREY
			: theme.mainThemeColor,
	});
