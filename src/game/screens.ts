import Player from "./player";
import Text from "./start-menu";
import EnemySpawner from "./enemy-spawner";

export const startScreen = [
    new Text("Press space to start"),
];

export const mainScreen = [
    new Player(),
    new EnemySpawner(),
];

export const finalScreen = [
    new Text("Game over"),
];
