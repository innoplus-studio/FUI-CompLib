import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { ReactElement } from "react";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FButtonProps } from "../global.types";


export interface FLinkButtonProps extends FButtonProps {
	pathLink?: string;
	pathIsSelected?: boolean;

    // user can declare own action component or icon
    actionComponent?: ReactElement<FSVGIconProps>
	actionIcon?: FIconProps;

	// this route has sub routes or not
	containsRouteChildren?: boolean;

    // user can declare own leading component or icon
	leadingComponent?: ReactElement<FSVGIconProps>
	leadingIcon?: FIconProps;
}
