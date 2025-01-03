import { Game } from "./game";
import { Size, Vector2D } from "./interfaces";

export abstract class Entity {
    public game: Game | null = null;
    public position: Vector2D | null = null;
    public size: Size | null = null;

    public init(game: Game): void;
    public init(): void { }

    public draw(ctx: CanvasRenderingContext2D): void;
    public draw(): void { }

    public update(game: Game): void;
    public update(): void { }

    public collidedWith(e: Entity) {
        if (!this.size || !this.position || !e.position || !e.size) {
            return false;
        }
        // TODO use a dedicated hitbox property
        return ((e.position.x + e.size.width) > this.position.x && e.position.x < (this.position.x + this.size.width)) &&
            ((e.position.y + e.size.height) > this.position.y && e.position.y < (this.position.y + this.size.height))
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
