import { GameContext, EntityParams, EntityInterface, Vector2D } from "./interfaces";

export class Entity implements EntityInterface {
    public x: number;
    public y: number;
    public game: GameContext;

    constructor(params: EntityParams) {
        this.x = params.position.x;
        this.y = params.position.y;
        this.game = params.game;
    }

    public draw(ctx: CanvasRenderingContext2D): void;
    public draw(): void { }

    public update(delta: number): void;
    public update(): void { }
}

export class MovingEntity extends Entity {
    private elapsed: number;

    public velocity: Vector2D = { x: 0, y: 0 };

    constructor(params: EntityParams) {
        super(params);
        this.elapsed = Number(document.timeline.currentTime) || 0;
    }

    public update(elapsed: number) {
        const delta = elapsed - this.elapsed;
        this.elapsed = elapsed;
        const updateSpeed = (delta / 16.6); // ˜60fps
        this.x = this.x + this.velocity.x * updateSpeed;
        this.y = this.y + this.velocity.y * updateSpeed;
    }
}
