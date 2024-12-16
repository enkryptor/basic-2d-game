import { GameInit } from "../engine/interfaces";
import Player from "./player";
import Enemy from "./enemy";

export const startScreen = (g: GameInit) => {
    const playerParams = {
        position: { x: g.screenWidth / 2, y: g.screenHeight / 2 },
    }
    g.addEntity(Player, playerParams);
    g.addEntity(Enemy, { position: { x: 50, y: 50 } });
}