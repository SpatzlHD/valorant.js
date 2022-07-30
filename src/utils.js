const { ContentAPI } = require("../index");

class Utils {
  constructor() {}

  /**
   * Returns a parsed Player Store with assets provided by https://valorant-api.com/
   * @param {object} store The Store object returned by the api.getPlayerStoreFront() method
   * @returns {Promise<object>} The parsed store
   */
  async storeParser(store) {
    this.language = "en-US";
    this.bundle = {};
    this.store = {};
    this.nightMarket = {};
    const assets = new ContentAPI(this.language);

    //getBundel
    store.FeaturedBundle.Bundles.forEach((bundle) => {
      const bundelInfo = assets.getBundleByUuid(bundle.DataAssetID);
      const bundelItems = [];
      bundle.Items.forEach((item) => {
        bundelItems.push(assets.getItemByUuid(item.DataAssetID));
      });
    });
  }
}

module.exports = Utils;
