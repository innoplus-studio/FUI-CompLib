import { FDoubleTabsPanelProps, FDoubleTabsProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { Fragment, useEffect, useState } from "react";
import React from "react";
import { FButtonProps, FButtonTypes } from "../FButton/types";
import { FButton, FUseTheme } from "..";

export const FDoubleTabsPanel = (props: FDoubleTabsPanelProps) => {
	const { children } = props;
	return <Fragment>{children}</Fragment>;
};

export const FDoubleTabs = (props: FDoubleTabsProps) => {
	const { theme } = FUseTheme();
	const [tabIndex, setTabIndex] = useState<number>(0);
	let defaultTabButtonProps: FButtonProps = {
		type: FButtonTypes.PRIMARY,
		label: "",
		leadingComponents: [],
		actionComponents: [],
		disabled: props.disabled ?? false,
		onClick: () => setTabIndex(0),
		style: props.tabButtonStyle,
		className: props.tabButtonClassName,
	};
	useEffect(() => {
		if (props.children && props.children.length !== 2)
			console.log("Error: FDoubleTabs requires two tabs.");
	}, [props.children]);

	return (
		<div className={styles.FDoubleTabs_Wrapper(props.disabled!)}>
			{props.children && props.children.length === 2 && (
				<>
					<div
						style={props.headerStyle}
						className={props.headerClassName + " " + styles.FDoubleTabs_Header}
					>
						{props.leadingComponents}
						<div
							style={props.tabContainerStyle}
							className={
								props.tabContainerClassName +
								" " +
								styles.FDoubleTabs_TabsContainer(theme)
							}
						>
							{props.children &&
								props.children.map((tab, index) => {
									let isSelect = tabIndex === index ? true : false;
									let tabButtonProps: FButtonProps = {
										key: index,
										...defaultTabButtonProps,
										type: isSelect ? FButtonTypes.PRIMARY : FButtonTypes.TEXT,
										label:
											tab.props.label ?? index === 0 ? "Section" : "Preview",
										leadingComponents:
											tab.props.tabButtonLeadingComponents &&
											tab.props.tabButtonLeadingComponents(isSelect),
										actionComponents:
											tab.props.tabButtonActionComponents &&
											tab.props.tabButtonActionComponents(isSelect),
										disabled: props.disabled ?? tab.props.disabled,
										onClick: () => setTabIndex(index),
										labelProps: {
											font:
												props.tabButtonProps?.labelProps?.font ??
												FFontTypes.Large_Text(),
										},
										className: styles.FDoubleTabs_TabButton_Container(isSelect),
										...tab.props.tabButtonProps,
									};

									return tab.props.renderCustomizedTabButton ? (
										tab.props.renderCustomizedTabButton(
											isSelect,
											tabButtonProps
										)
									) : props.renderCustomizedTabButton ? (
										props.renderCustomizedTabButton(isSelect, tabButtonProps)
									) : (
										<FButton
											key={index}
											{...tabButtonProps}
											{...props.tabButtonProps}
											{...tab.props.tabButtonProps}
										/>
									);
								})}
						</div>
						{props.actionComponents}
					</div>
					{props.children &&
						props.children.map((panel, index) => {
							if (panel.props.isRenderOnSelected) {
								if (index === tabIndex)
									return (
										<Fragment key={index}>{panel.props.children}</Fragment>
									);
								else return;
							} else {
								return (
									<div
										key={index}
										style={{
											overflow: "hidden",
											height: "100%",
											width: "100%",
											display: index === tabIndex ? "block" : "none",
										}}
									>
										{panel.props.children}
									</div>
								);
							}
						})}
				</>
			)}
		</div>
	);
};