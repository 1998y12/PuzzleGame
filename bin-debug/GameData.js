var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var GameData = (function () {
    function GameData() {
    }
    GameData.LENGTH = 600;
    GameData.LEVEL_EASY = 3;
    GameData.LEVEL_NORMAL = 4;
    GameData.LEVEL_HARD = 5;
    GameData.step = 0;
    GameData.one = ["one_01_png", "one_02_png", "one_03_png", "one_04_png",
        "one_05_png", "one_06_png", "one_07_png", "one_08_png", "block_png"];
    GameData.onenor = ["onenor_01_png", "onenor_02_png", "onenor_03_png", "onenor_04_png",
        "onenor_05_png", "onenor_06_png", "onenor_07_png", "onenor_08_png", "onenor_09_png",
        "onenor_10_png", "onenor_11_png", "onenor_12_png", "onenor_13_png", "onenor_14_png",
        "onenor_15_png", "blocknor_png"];
    GameData.onehar = ["onehar_01_png", "onehar_02_png", "onehar_03_png", "onehar_04_png",
        "onehar_05_png", "onehar_06_png", "onehar_07_png", "onehar_08_png", "onehar_09_png", "onehar_10_png",
        "onehar_11_png", "onehar_12_png", "onehar_13_png", "onehar_14_png", "onehar_15_png", "onehar_16_png",
        "onehar_17_png", "onehar_18_png", "onehar_19_png", "onehar_20_png", "onehar_21_png", "onehar_22_png",
        "onehar_23_png", "onehar_24_png", "blockhar_png"];
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map