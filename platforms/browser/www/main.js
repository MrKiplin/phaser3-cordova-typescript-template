"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var phaser_1 = __importDefault(require("phaser"));
var HelloWorldScene_1 = __importDefault(require("./scenes/HelloWorldScene"));
var config = {
    type: phaser_1["default"].AUTO,
    width: 800,
    height: 600,
    physics: {
        "default": "arcade",
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [HelloWorldScene_1["default"]]
};
exports["default"] = new phaser_1["default"].Game(config);
