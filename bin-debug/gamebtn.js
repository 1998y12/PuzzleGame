var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var gamebtn = (function (_super) {
    __extends(gamebtn, _super);
    function gamebtn() {
        return _super.call(this) || this;
    }
    gamebtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gamebtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_easy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEasyClick, this);
        this.btn_normal.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNormalClick, this);
        this.btn_hard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHardClick, this);
    };
    gamebtn.prototype.onEasyClick = function () {
        this.dispatchEventWith("starteasy");
    };
    gamebtn.prototype.onNormalClick = function () {
        this.dispatchEventWith("startnormal");
    };
    gamebtn.prototype.onHardClick = function () {
        this.dispatchEventWith("starthard");
    };
    return gamebtn;
}(eui.Component));
__reflect(gamebtn.prototype, "gamebtn", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=gamebtn.js.map