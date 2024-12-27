import { MovingEntity } from "@engine/entities";
import { multiply, normalize } from "@engine/vectors";

export default class Player extends MovingEntity {
    public speed = 10;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "normal 48px sans-serif";
        ctx.fillText('😃', this.x, this.y);
        console.log(this.x, this.y)
    }

    public update(elapsed: number): void {
        super.update(elapsed);
        const direction = normalize(this.game.control.direction);
        this.velocity = multiply(direction, this.speed);
    }
}
