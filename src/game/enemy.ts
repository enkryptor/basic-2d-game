import { MovingEntity } from "@engine/entities";
import { multiply } from "@engine/vectors";
import { Game } from "@engine/game";
import Player from "./player";

export default class Enemy extends MovingEntity {
    maxSpeed = 5;

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "normal 48px sans-serif";
        ctx.fillText('👿', this.x, this.y);
    }

    public update(elapsed: number, game: Game): void {
        super.update(elapsed, game);

        const player = game.getNearestEntity(Player);
        const playerDirection = Math.atan2(player.y - this.y,  player.x - this.x);
        const newVector = { x: Math.cos(playerDirection), y: Math.sin(playerDirection) };
        this.velocity = multiply(newVector, this.maxSpeed);
    }
}
