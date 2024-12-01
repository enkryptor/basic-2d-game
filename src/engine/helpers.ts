import { Vector2D } from "./interfaces"

export function multiplyVector(a: Vector2D, b: number) {
    return {
        x: a.x * b,
        y: a.y * b,
    }
}
