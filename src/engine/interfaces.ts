export interface Vector2D {
    x: number;
    y: number;
}

export interface Keys {
    direction: Vector2D;
}

export interface GameContext {
    keys: Keys;
}

export interface EntityInterface {
    draw(ctx: CanvasRenderingContext2D): void;
    update(delta: number): void;
}

export interface GameInit {
    screenWidth: number;
    screenHeight: number;
    addEntity(EntityClass: new (params:EntityParams) => EntityInterface, params: Omit<EntityParams, "game">): void;
}

export interface EntityParams {
    position: Vector2D;
    game: GameContext;
}
