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
  /* More info at https://github.com/postcss/postcss-reporter */
  require("postcss-reporter")({
    clearReportedMessages: true,
    throwError: true,
  }),
];
