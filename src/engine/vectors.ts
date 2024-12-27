import { Vector2D } from "./interfaces"

export const multiply = (vector: Vector2D, scalar: number) => ({
    x: vector.x * scalar,
    y: vector.y * scalar,
} as Vector2D);

export const divide = (vector: Vector2D, scalar: number) => ({
    x: vector.x / scalar,
    y: vector.y / scalar,
} as Vector2D);

export function magnitude(vector: Vector2D): number {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}

export function normalize(vector: Vector2D): Vector2D {
    const m = magnitude(vector);
    return m ? divide(vector, m) : { x: 0, y: 0};
}
