"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var phaser_1 = __importDefault(require("phaser"));
var HelloWorldScene = /** @class */ (function (_super) {
    __extends(HelloWorldScene, _super);
    function HelloWorldScene() {
        return _super.call(this, "hello-world") || this;
    }
    HelloWorldScene.prototype.preload = function () {
        this.load.setBaseURL("http://labs.phaser.io");
        this.load.image("sky", "assets/skies/space3.png");
        this.load.image("logo", "assets/sprites/phaser3-logo.png");
        this.load.image("red", "assets/particles/red.png");
    };
    HelloWorldScene.prototype.create = function () {
        this.add.image(400, 300, "sky");
        var particles = this.add.particles("red");
        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: "ADD"
        });
        var logo = this.physics.add.image(400, 100, "logo");
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo);
    };
    return HelloWorldScene;
}(phaser_1["default"].Scene));
exports["default"] = HelloWorldScene;
