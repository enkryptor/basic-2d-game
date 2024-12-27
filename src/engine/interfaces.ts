import { Entity } from "./entities";

export interface Vector2D {
    x: number;
    y: number;
}

export interface Controller {
    direction: Vector2D;
    fire: Boolean;
}

export interface GameContext {
    elapsed: number;
    control: Controller;
    getNearestEntity<T extends Entity>(EntityClass: new () => T): T;
    add<T extends Entity>(something: T | T[]): void;
    screenWidth: number;
    screenHeight: number;
}
