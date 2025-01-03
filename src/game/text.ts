import { Entity } from "@engine/entities";
import { Game } from "@engine/game";

export default class Text extends Entity {
    protected text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    public init(game: Game) {
        this.position = {
            x: game.screenWidth / 2,
            y: game.screenHeight / 2,
        }
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        if (!this.position) {
            return;
        }
        ctx.font = "normal 48px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = "white";
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
