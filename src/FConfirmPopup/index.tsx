import { ConfirmPopUpProps } from "./types";
import * as styles from "./styles";
import { FBottomNavBar, FPopUp, FText, FUseColor, FUseStateSafe } from "..";
import React from "react";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";

/**
 * A kind of FPopUp that mainly contains a header and a bottom navigation bar (i.e. FBottomNavBar).
 */
export const FConfirmPopUp = (props: ConfirmPopUpProps) => {
	const [isLoading, setIsLoading] = FUseStateSafe(false);

	const handleActionButtonClick = async () => {
		setIsLoading(true);
		props.onActionButtonClick && (await props.onActionButtonClick());
		setIsLoading(false);
	};

	const handleLeadingButtonClick = async () => {
		props.onLeadingButtonClick && (await props.onLeadingButtonClick());
	};
	return (
		<FPopUp
			{...props}
			onClose={props.isDisableCloseWhenClickOutside ? () => {} : props.onClose}
		>
			{/* header */}
			<div className={styles.functionalPopupTitleDiv}>
				<FText
					font={FFontTypes.Title()}
					maxRows={2}
					children={props.title}
					{...props.titleProps}
				/>
				{props.subtitle && (
					<FText
						font={FFontTypes.Text()}
						color={FUseColor({
							colorName: "Grey",
						})}
						children={props.subtitle}
						{...props.subtitleProps}
					/>
				)}
			</div>

			{/* content */}
			{props.children && props.children}

			{/* Footer */}
			{!props.isDisableBottomNavigation && (
				<FBottomNavBar
					leadingButtonLabel="Cancel"
					actionButtonLabel={isLoading ? "Loading" : "Confirm"}
					disableActionButton={isLoading}
					onLeadingButtonClick={handleLeadingButtonClick}
					onActionButtonClick={handleActionButtonClick}
					{...props.FBottomNavigationProps}
				/>
			)}
		</FPopUp>
	);
};
