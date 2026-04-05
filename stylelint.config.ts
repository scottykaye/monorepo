export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "config",
          "theme",
          "plugin",
        ],
      },
    ],
    "no-descending-specificity": null,
  },
  ignoreFiles: ["**/dist/**", "**/node_modules/**", "**/.turbo/**"],
};
