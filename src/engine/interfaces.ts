import { Game } from "./game";

export interface Vector2D {
    x: number;
    y: number;
}

export interface Controller {
    direction: Vector2D;
    fire: Boolean;
}

export interface GameContext {
    control: Controller;
    getNearestEntity<T extends EntityInterface>(EntityClass: new (params: EntityParams & { game: GameContext }) => T): T;
}

export interface EntityInterface {
    draw(ctx: CanvasRenderingContext2D): void;
    update(delta: number, game: GameContext): void;
    init(game: GameContext): void;
}

export interface GameInit {
    screenWidth: number;
    screenHeight: number;
    fillStyle: string;
}

export interface EntityParams {
    position?: Vector2D;
}
