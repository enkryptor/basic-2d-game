import { EntityInterface, EntityParams, GameContext, GameInit, Keys } from "./interfaces";
import { Keyboard } from "./keyboard";


export class Game implements GameContext, GameInit {
    private children: EntityInterface[] = [];

    public keys: Keys = new Keyboard();

    public get screenWidth(): number {
        return this.ctx.canvas.width;
    }

    public get screenHeight(): number {
        return this.ctx.canvas.height;
    }

    constructor(private ctx: CanvasRenderingContext2D) {
        window.addEventListener("resize", () => this.fitToParent());
        this.fitToParent();
    }

    public addEntity(EntityClass: new (params: EntityParams & { game: GameContext }) => EntityInterface, params: EntityParams): void {
        const entity = new EntityClass({ ...params, game: this});
        this.children.push(entity);
    }

    public run(initializer: (g: Game) => void) {
        initializer(this);
        this.drawCycle(this.ctx);
    }

    private drawCycle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(0, 0, 0, 1)`;
        ctx.fillRect(0, 0, this.width, this.height);

        this.children.forEach(node => node.draw(ctx));

        requestAnimationFrame((elapsed) => {
            this.update(elapsed);
            this.drawCycle(ctx);
        })
    }

    private update(delta: number) {
        this.children.forEach(node => node.update(delta));
    }

    private get width(): number {
        return this.ctx.canvas.width;
    }

    private get height(): number {
        return this.ctx.canvas.height;
    }

    private fitToParent() {
        const canvas = this.ctx.canvas;
        const clientRect = canvas.parentElement!.getBoundingClientRect();
        const pixelRatio = window.devicePixelRatio;

        canvas.width = clientRect.width * pixelRatio;
        canvas.height = clientRect.height * pixelRatio;
        canvas.style.width = `${clientRect.width}px`;
        canvas.style.height = `${clientRect.height}px`;
    }
}
