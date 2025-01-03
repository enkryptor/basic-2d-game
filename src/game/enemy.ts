import { MovingEntity } from "@engine/entities";
import { getDirection, multiply } from "@engine/vectors";
import { Game } from "@engine/game";
import Player from "./player";

export default class Enemy extends MovingEntity {
    maxSpeed = 5;

    public draw(ctx: CanvasRenderingContext2D): void {
        if (!this.position) {
            return;
        }
        ctx.font = "normal 48px sans-serif";
        ctx.fillText('👿', this.position.x, this.position.y);
    }

    public update(game: Game): void {
        super.update(game);
        if (!this.position) {
            return;
        }

        const player = game.getNearestEntity(Player);
        if (!player?.position) {
            return;
        }

        const direction = getDirection(this.position, player.position);
        this.velocity = multiply(direction, this.maxSpeed);
    }
}
