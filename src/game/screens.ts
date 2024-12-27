import { Game } from "../engine";
import Player from "./player";
import Enemy from "./enemy";
import Text from "./start-menu";

export const startScreen = (game: Game) => {
    const welcomeText = new Text({
        position: { x: game.screenWidth / 2, y: game.screenHeight / 2 },
        text: "Press space to start",
    });
    game.add(welcomeText);
};

export const mainScreen = (game: Game) => {
    const player = new Player({
        position: { x: game.screenWidth / 2, y: game.screenHeight / 2 },
    });
    const enemy = new Enemy({ position: { x: 50, y: 50 } })
    game.add(player, enemy);
};
