import { MovingEntity } from "@engine/entities";
import { multiplyVector } from "@engine/helpers";

export default class Player extends MovingEntity {
    public maxSpeed = 10;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 30, 30);
    }

    public update(elapsed: number): void {
        super.update(elapsed);
        this.velocity = multiplyVector(this.game.keys.direction, this.maxSpeed);
    }
}
