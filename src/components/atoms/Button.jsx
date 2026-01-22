import { colors } from "@/src/utils/colors";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: colors.primary.main,
        };
      case "secondary":
        return {
          backgroundColor: colors.background.lightGray,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: colors.border.gray,
        };
      default:
        return {
          backgroundColor: colors.primary.main,
        };
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "primary":
        return {
          color: colors.text.white,
        };
      case "secondary":
        return {
          color: colors.text.primary,
        };
      case "outline":
        return {
          color: colors.text.primary,
        };
      default:
        return {
          color: colors.text.white,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === "primary" ? colors.text.white : colors.primary.main
          }
        />
      ) : (
        <Text style={[styles.text, getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.5,
  },
});
