import { ConfirmPopupProps } from "./types"
import * as styles from "./styles" 
import { FBottomNavBar, FPopUp, FText, FUseStateSafeHandler } from ".."
import React from "react"
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib"
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib"

export const FConfirmPopup = (props: ConfirmPopupProps) => {
	const [isLoading, setIsLoading] = FUseStateSafeHandler(false)

	const handleActionButtonClick = async () => {
		setIsLoading(true)
		props.onActionButtonClick && (await props.onActionButtonClick())
		setIsLoading(false)
	}

	const handleLeadingButtonClick = async () => {
		props.onLeadingButtonClick && (await props.onLeadingButtonClick())
	}
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
						color={FColorTypes.PRIMARY_GREY}
						children={props.subtitle}
						{...props.subtitleProps}
					/>
				)}
			</div>

			{/* content */}
			{/* {props.children && <div style={{overflow:"hidden"}}>{props.children}</div>} */}
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
	)
}
