import { MovingEntity } from "@engine/entities";
import { Game } from "@engine/game";
import { multiply, normalize } from "@engine/vectors";
import { finalScreen } from "./screens";

export default class Player extends MovingEntity {
    public speed = 10;

    public init(game: Game) {
        this.position = {
            x: game.screenWidth / 2,
            y: game.screenHeight / 2,
        }
        this.size = { x: 48, y: 48 };
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

        const collisions = game.getCollisions(this);
        if (collisions.length) {
            game.setScreen(finalScreen)
        }

        const direction = normalize(game.control.direction);
        this.velocity = multiply(direction, this.speed);
    }
}
