import Player from "./player";
import Enemy from "./enemy";
import Text from "./start-menu";

export const startScreen = [
    new Text("Press space to start"),
];

export const mainScreen = [
    new Player(),
    new Enemy(),
];
