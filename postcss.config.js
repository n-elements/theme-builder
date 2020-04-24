module.exports = [
  /* More info at https://github.com/TrySound/postcss-easy-import */
  require("postcss-easy-import")({
    extensions: ".css",
  }),
  /* More info https://github.com/csstools/postcss-normalize */
  require("postcss-normalize")({}),
  /* More info at https://github.com/csstools/postcss-preset-env */
  require("postcss-preset-env")({
    stage: 0,
    importFrom: ["./src/colors.js"],
  }),
  /* More info at https://github.com/jonathantneal/postcss-color-mod-function */
  require("postcss-color-mod-function")({
    unresolved: "warn",
  }),
  /* More info at https://cssnano.co/ */
  require("cssnano")({
    preset: [
      "advanced",
      {
        discardComments: {
          removeAll: true,
        },
        reduceIdents: false,
      },
    ],
  }),
];
