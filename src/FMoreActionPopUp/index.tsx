// import { FMoreActionPopUpProps } from "./types";
// import * as styles from "./styles";
// import { MoreActionItem } from "./MoreActionItem";
// import { MoreActionItemProps } from "./MoreActionItem/types";
// import { CTACloseIcon } from "./svg";
// import React from "react";
// import { FPopUp, FSVGIcon, FText, FReturnColor } from "..";
// import { FFontTypes } from "@innoplus-studio/fui-fontlib";

/** _Deprecated (from v4.0.0)_. */
export const FMoreActionPopUp = () => {};

// export const FMoreActionPopUp = (props: FMoreActionPopUpProps) => {
// 	const handlePopUpCloseButtonClick = () => {
// 		props.onClose && props.onClose();
// 	};
// 	return (
// 		<>
// 			<FPopUp {...props}>
// 				<div className={styles.topicRowMoreActionPopupTitleDiv}>
// 					<FText
// 						font={FFontTypes.Text()}
// 						color={FReturnColor({ color: "Main" })}
// 					>
// 						{props.header ?? "Header"}
// 					</FText>
// 					<FText font={FFontTypes.Title()} maxRows={2}>
// 						{props.title ?? "Name"}
// 					</FText>
// 				</div>
// 				<div className={styles.topicRowMoreActionPopupContentDiv}>
// 					{props.moreActionItemList.map(
// 						(ctaItem: MoreActionItemProps, i: number) => (
// 							<MoreActionItem
// 								key={i}
// 								name={ctaItem.name}
// 								icon={ctaItem.icon}
// 								onClick={ctaItem.onClick}
// 								fontColor={ctaItem.fontColor}
// 							/>
// 						)
// 					)}
// 				</div>
// 				<FSVGIcon
// 					style={{
// 						alignSelf: "center",
// 					}}
// 					onClick={handlePopUpCloseButtonClick}
// 				>
// 					{CTACloseIcon}
// 				</FSVGIcon>
// 			</FPopUp>
// 		</>
// 	);
// };
