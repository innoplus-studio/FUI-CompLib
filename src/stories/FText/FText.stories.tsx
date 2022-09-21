import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FText } from "../../FText";
import "../../FText/styles";
import { FTextProps } from "../../FText/types";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export default {
	title: "FUI-Complib/lib/FText",
	component: FText,
	argTypes: {
		children: {
			defaultValue: "FText sample",
			type: "string",
		},
		style: { control: { disable: true } },
		className: { control: { disable: true } },
	},
} as ComponentMeta<typeof FText>;

const Template: ComponentStory<typeof FText> = (args) => <FText {...args} />;

export const Default = Template.bind({});
export const CustomColorAndFont = Template.bind({});
export const CustomRowsWithOverflow = Template.bind({});

Default.args = {
	font: FFontTypes.Small_Title(),
	color: FColorTypes.FPrimaryColors.BLACK.LM,
} as FTextProps;

CustomColorAndFont.args = {
	font: FFontTypes.Text(),
	color: FColorTypes.FThemeColors.MAIN.LM,
	children: "The color and font of text are changed.",
} as FTextProps;

CustomRowsWithOverflow.args = {
	maxRows: 2,
	overflowHidden: true,
	children: `Hello World. This is FText! Hello World. This is FText! Hello World. This is FText!
Hello World. This is FText! Hello World. This is FText! Hello World. This is FText!
Hello World. This is FText! Hello World. This is FText!`,
} as FTextProps;