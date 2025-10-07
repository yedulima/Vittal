import React, { forwardRef, Fragment } from "react";

import {
	View,
	TextInput,
	Text,
	TextInputProps,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";

import { style } from "./styles";

type IconComponent =
	| React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
	| React.ComponentType<React.ComponentProps<typeof FontAwesome>>
	| React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
	IconLeft?: IconComponent;
	IconRight?: IconComponent;
	iconLeftName?: string;
	iconRightName?: string;
	title?: string;
	onIconLeftPress?: () => void;
	onIconRightPress?: () => void;
};

export const Input = forwardRef((Props: Props, ref) => {
	const {
		IconLeft,
		IconRight,
		iconLeftName,
		iconRightName,
		title,
		onIconLeftPress,
		onIconRightPress,
		...rest
	} = Props;

	const calculateSizeWidth = () => {
		if (IconLeft && IconRight) {
			return "80%";
		} else if (IconLeft || IconRight) {
			return "90%";
		} else {
			return "100%";
		}
	};

	const calculatePaddingLeft = () => {
		if (IconLeft && IconRight) {
			return 0;
		} else if (IconLeft || IconRight) {
			return 10;
		} else {
			return 15;
		}
	};

	return (
		<Fragment>
			{title && <Text style={style.InputLabel}>{title}</Text>}
			<View
				style={[
					style.BoxInput,
					{ paddingLeft: calculatePaddingLeft() },
				]}
			>
				{IconLeft && iconLeftName && (
					<TouchableOpacity onPress={onIconLeftPress}>
						{IconLeft && (
							<IconLeft
								name={iconLeftName as any}
								size={20}
								color="gray"
								style={style.Icon}
							/>
						)}
					</TouchableOpacity>
				)}

				<TextInput
					style={[style.input, { width: calculateSizeWidth() }]}
					{...rest}
				/>

				{IconRight && iconRightName && (
					<TouchableOpacity onPress={onIconRightPress}>
						{IconRight && (
							<IconRight
								name={iconRightName as any}
								size={20}
								color="gray"
								style={style.Icon}
							/>
						)}
					</TouchableOpacity>
				)}
			</View>
		</Fragment>
	);
});
