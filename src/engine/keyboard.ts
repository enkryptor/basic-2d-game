import { Controller, Vector2D } from "./interfaces";

class Keyboard implements Controller {
    protected keys = new Set<string>();

    public get direction(): Vector2D {
        const rightPressed = this.hasKeys("ArrowRight", "KeyD");
        const leftPressed = this.hasKeys("ArrowLeft", "KeyA");
        const downPressed = this.hasKeys("ArrowDown", "KeyS");
        const upPressed = this.hasKeys("ArrowUp", "KeyW");

        const x = rightPressed - leftPressed;
        const y = downPressed - upPressed;
        return { x, y };
    }

    public get fire(): boolean {
        return this.keys.has("Space")
    }

    constructor() {
        document.addEventListener("keydown", e => this.keyDownHandler(e), false);
        document.addEventListener("keyup", e => this.keyUpHandler(e), false);
    }

    protected hasKeys(...keys: string[]): 1 | 0 {
        if (!keys.length) {
            return 0;
        }
        return keys.some(key => this.keys.has(key)) ? 1 : 0;
    }

    private keyDownHandler(event: KeyboardEvent) {
        this.keys.add(event.code);
        console.log(this.keys)
    }

    private keyUpHandler(event: KeyboardEvent) {
        this.keys.delete(event.code);
    }
}

export const keyboard = new Keyboard();
