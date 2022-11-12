export const enum LightColors {
  Primary = "#FAFAFA",
  Secondary = "#FFFFFF",
  DarkBlue = "#006ce9",
  LightBlue = "#18b6f6",
  LightPurple = "#ac7ff4",
  DarkPurple = "#7755ee",
  Text = "#000000",
  DarkGrey = "#222222",
  LightGrey = "#666666",
}

export const enum DarkColors {
  Primary = "#444444",
  Secondary = "#333333",
  DarkBlue = "#006ce9",
  LightBlue = "#18b6f6",
  LightPurple = "#ac7ff4",
  DarkPurple = "#7755ee",
  Text = "#eeeeee",
  DarkGrey = "#222222",
  LightGrey = "#666666",
}

export const theme = {
  dark: {
    "--primary": "#444444",
    "--secondary": "#333333",
    "--dark-blue": "#006ce9",
    "--light-blue": "#18b6f6",
    "--light-purple": "#ac7ff4",
    "--dark-purple": "#7755ee",
    "--text": "#eeeeee",
    "--dark-grey": "#222222",
    "--light-grey": "#666666",
  },
  light: {
    "--primary": "#FAFAFA",
    "--secondary": "#FFFFFF",
    "--dark-blue": "#006ce9",
    "--light-blue": "#18b6f6",
    "--light-purple": "#ac7ff4",
    "--dark-purple": "#7755ee",
    "--text": "#000000",
    "--dark-grey": "#222222",
    "--light-grey": "#666666",
  },
} as const;
