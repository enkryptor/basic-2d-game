import { Entity } from "@engine/entities";
import { mainScreen } from "./screens";
import { Game } from "@engine/game";

export default class Starter extends Entity {
    public update(game: Game): void {
        if (game.control.fire) {
            game.setScreen(mainScreen);
        }
    }
}
