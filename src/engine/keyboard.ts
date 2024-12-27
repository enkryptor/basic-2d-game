import { Vector2D } from "./interfaces";

export class Keyboard {
    public rightPressed = 0;
    public leftPressed = 0;
    public upPressed = 0;
    public downPressed = 0;
    public spacePressed = 0;

    public get direction(): Vector2D {
        return { x: this.rightPressed - this.leftPressed, y: this.downPressed - this.upPressed };
    }

    public get fire(): boolean {
        return Boolean(this.spacePressed);
    }

    constructor() {
        document.addEventListener("keydown", e => this.keyDownHandler(e), false);
        document.addEventListener("keyup", e => this.keyUpHandler(e), false);
    }

    private keyDownHandler(event: KeyboardEvent) {
        if (event.code === "ArrowRight") {
            this.rightPressed = 1;
        } else if (event.code === "ArrowLeft") {
            this.leftPressed = 1;
        }
        if (event.code === "ArrowDown") {
            this.downPressed = 1;
        } else if (event.code === "ArrowUp") {
            this.upPressed = 1;
        }
        if (event.code === "Space") {
            this.spacePressed = 1;
        }
    }

    private keyUpHandler(event: KeyboardEvent) {
        if (event.code === "ArrowRight") {
            this.rightPressed = 0;
        } else if (event.code === "ArrowLeft") {
            this.leftPressed = 0;
        }
        if (event.code === "ArrowDown") {
            this.downPressed = 0;
        } else if (event.code === "ArrowUp") {
            this.upPressed = 0;
        }
        if (event.code === "Space") {
            this.spacePressed = 0;
        }
    }
}
