import { Entity } from "./entities";
import { GameContext, Controller } from "./interfaces";
import { Keyboard } from "./keyboard";


export class Game implements GameContext {
    private children: Entity[] = [];

    public elapsed: number = 0;

    public control: Controller = new Keyboard();

    public fillStyle: string = "rgba(0, 0, 0, 1)";

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

    public add(something: Entity | Entity[]): void {
        const entities = Array.isArray(something) ? something : [something];
        entities.forEach((entity) => {
            entity.init(this);
            this.children.push(entity);
        });
    }

    public setScreen(entities: Entity[]) {
        this.children = [];
        this.add(entities);
    }

    public run() {
        this.drawCycle(this.ctx);
    }

    public getNearestEntity<T extends Entity>(EntityClass: new () => T): T {
        const entities = this.children.filter(e => e instanceof EntityClass);
        // TODO take nearest
        return entities[0] as T;
    }

    private drawCycle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(0, 0, this.width, this.height);

        this.children.forEach(node => node.draw(ctx));

        requestAnimationFrame((elapsed) => {
            this.update(elapsed);
            this.drawCycle(ctx);
        })
    }

    private update(elapsed: number) {
        this.elapsed = elapsed;
        this.children.forEach(node => node.update(this));
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
