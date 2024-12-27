import { MovingEntity } from "@engine/entities";
import { Game } from "@engine/game";
import { multiply, normalize } from "@engine/vectors";

export default class Player extends MovingEntity {
    public speed = 10;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "normal 48px sans-serif";
        ctx.fillText('😃', this.x, this.y);
    }

    public update(elapsed: number, game: Game): void {
        super.update(elapsed, game);
        const direction = normalize(game.control.direction);
        this.velocity = multiply(direction, this.speed);
    }
}
