import { Game } from "./game";
import { Vector2D, GameContext } from "./interfaces";

export abstract class Entity {
    public game: Game | null = null;
    public position: Vector2D | null = null;
    public size: Vector2D | null = null;

    public init(game: Game): void;
    public init(): void { }

    public draw(ctx: CanvasRenderingContext2D): void;
    public draw(): void { }

    public update(game: GameContext): void;
    public update(): void { }

    public collidedWith(e: Entity) {
        if (!this.size || !this.position || !e.position) {
            return false;
        }
        return (e.position.x > this.position.x && e.position.x < (this.position.x + this.size.x)) &&
            (e.position.y > this.position.y && e.position.y < (this.position.y + this.size.y))
    }
}

export abstract class MovingEntity extends Entity {
    protected elapsed: number = Number(document.timeline.currentTime) || 0;

    public velocity: Vector2D = { x: 0, y: 0 };

    public update(game: Game) {
        const delta = game.elapsed - this.elapsed;
        this.elapsed = game.elapsed;
        const updateSpeed = (delta / 16.6); // ˜60fps
        this.position = this.position ? {
            x: this.position?.x + this.velocity.x * updateSpeed,
            y: this.position?.y + this.velocity.y * updateSpeed,
        } : null;
    }
}
