import { FPopUpProps } from "../FPopUp/types";
import { OnClickFunction, ThemeProps } from "../global.types";
import { MoreActionItemProps as MoreActionItemProps } from "./MoreActionItem/types";

export interface FMoreActionPopUpProps extends FPopUpProps {
	header?: string;
	title?: string;
	moreActionItemList: MoreActionItemProps[];
	onClose: OnClickFunction;

	themeProps?: ThemeProps;
}
