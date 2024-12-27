import { Game } from "./game";
import { EntityInterface, Vector2D, GameContext } from "./interfaces";

export class Entity implements EntityInterface {
    public game: Game | null = null;
    public x: number = NaN;
    public y: number = NaN;

    public init(game: Game): void;
    public init(): void {
        this.x = 0;
        this.y = 0;
    }

    public draw(ctx: CanvasRenderingContext2D): void;
    public draw(): void { }

    public update(delta: number, game: GameContext): void;
    public update(): void { }
}

export class MovingEntity extends Entity {
    protected elapsed: number = Number(document.timeline.currentTime) || 0;

    public velocity: Vector2D = { x: 0, y: 0 };

    public update(elapsed: number, game: Game) {
        const delta = elapsed - this.elapsed;
        this.elapsed = elapsed;
        const updateSpeed = (delta / 16.6); // ˜60fps
        this.x = this.x + this.velocity.x * updateSpeed;
        this.y = this.y + this.velocity.y * updateSpeed;
    }
}
