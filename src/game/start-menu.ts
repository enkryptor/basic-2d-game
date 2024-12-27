import { Entity } from "@engine/entities";
import { Game } from "@engine/game";
import { mainScreen } from "./screens";

export default class Text extends Entity {
    protected text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "normal 48px sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText(this.text, this.x, this.y);
    }

    public update(delta: number, game: Game): void {
        this.x = game.screenWidth / 2;
        this.y = game.screenHeight / 2;
        if (game.control.fire) {
            game.setScreen(mainScreen);
        }
    }
}
