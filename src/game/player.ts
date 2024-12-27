import { MovingEntity } from "@engine/entities";
import { Game } from "@engine/game";
import { multiply, normalize } from "@engine/vectors";

export default class Player extends MovingEntity {
    public speed = 10;

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
        ctx.fillText('😃', this.position.x, this.position.y);
    }

    public update(game: Game): void {
        super.update(game);
        const direction = normalize(game.control.direction);
        this.velocity = multiply(direction, this.speed);
    }
}
