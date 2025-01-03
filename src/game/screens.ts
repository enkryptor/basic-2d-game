import Text from "./text";
import GameStarter from "./starter";
import EnemySpawner from "./enemy-spawner";
import Player from "./player";

export const startScreen = [
    new Text("Press space to start"),
    new GameStarter(),
];

export const mainScreen = [
    new Player(),
    new EnemySpawner(),
];

export const finalScreen = [
    new Text("Game over"),
];
