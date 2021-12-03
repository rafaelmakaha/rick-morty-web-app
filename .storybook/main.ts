module.exports = {
  "stories": [
    "../src/atomic/**/**/*.story.@(js|jsx|ts|tsx)",
    "../src/tokens/**/*.story.@(js|jsx|ts|tsx)",
    "../src/assets/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/preset-create-react-app",
  ]
}