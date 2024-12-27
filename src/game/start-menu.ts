import { Entity } from "@engine/entities";
import { Game } from "@engine/game";
import { EntityParams } from "@engine/interfaces";
import { mainScreen } from "./screens";

export default class Text extends Entity {
    protected text: string;

    constructor(params: EntityParams & { text: string }) {
        super(params);
        this.text = params.text;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "normal 48px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(this.text, this.x, this.y);
    }

    public update(delta: number, game: Game): void {
        if (game.control.fire) {
            game.setScreen(mainScreen);
        }
    }
}
