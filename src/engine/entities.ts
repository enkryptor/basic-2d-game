import { Game } from "./game";
import { EntityParams, EntityInterface, Vector2D, GameContext } from "./interfaces";

export class Entity implements EntityInterface {
    public x: number;
    public y: number;
    public game: Game | null = null;

    constructor(params: EntityParams) {
        this.x = params.position?.x ?? 0;
        this.y = params.position?.y ?? 0;
    }

    public draw(ctx: CanvasRenderingContext2D): void;
    public draw(): void { }

    public update(delta: number, game: GameContext): void;
    public update(): void { }
}

export class MovingEntity extends Entity {
    private elapsed: number;

    public velocity: Vector2D = { x: 0, y: 0 };

    constructor(params: EntityParams) {
        super(params);
        this.elapsed = Number(document.timeline.currentTime) || 0;
    }

    public update(elapsed: number, game: Game) {
        const delta = elapsed - this.elapsed;
        this.elapsed = elapsed;
        const updateSpeed = (delta / 16.6); // ˜60fps
        this.x = this.x + this.velocity.x * updateSpeed;
        this.y = this.y + this.velocity.y * updateSpeed;
    }
}
