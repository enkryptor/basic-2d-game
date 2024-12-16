export interface Vector2D {
    x: number;
    y: number;
}

export interface Controller {
    direction: Vector2D;
}

export interface GameContext {
    control: Controller;
    getNearestEntity<T extends EntityInterface>(EntityClass: new (params: EntityParams & { game: GameContext }) => T): T;
}

export interface EntityInterface {
    draw(ctx: CanvasRenderingContext2D): void;
    update(delta: number): void;
}

export interface GameInit {
    screenWidth: number;
    screenHeight: number;
    fillStyle: string;
    addEntity(EntityClass: new (params: EntityParams) => EntityInterface, params: Omit<EntityParams, "game">): void;
}

export interface EntityParams {
    position: Vector2D;
    game: GameContext;
}
