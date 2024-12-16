import { MovingEntity } from "@engine/entities";
import { multiplyVector } from "@engine/helpers";

export default class Player extends MovingEntity {
    public maxSpeed = 10;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "normal 48px sans-serif";
        ctx.fillText('😃', this.x, this.y);
    }

    public update(elapsed: number): void {
        super.update(elapsed);
        this.velocity = multiplyVector(this.game.control.direction, this.maxSpeed);
    }
}
