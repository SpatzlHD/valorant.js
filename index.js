module.exports = {
  // Internal Game APIs
  API: require("./src/api"),
  LocalRiotClientAPI: require("./src/LocalRiotClientAPI"),

  // Third Party APIs
  ContentAPI: require("./src/ContentAPI"),

  //Utilities
  Utils: require("./src/utils"),

  // Static Content
  Languages: require("./src/languages"),
  Maps: require("./src/maps"),
  Regions: require("./src/regions"),
  Tiers: require("./src/tiers"),
};
