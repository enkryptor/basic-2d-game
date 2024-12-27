import { Entity } from "@engine/entities";
import { GameContext, Vector2D } from "@engine/interfaces";
import Enemy from "./enemy";

function getRandomStartPosition(width: number, height: number): Vector2D {
    if (Math.random() > 0.5) {
        const x = Math.trunc(Math.random() * width);
        const y = Math.random() > 0.5 ? 0 : height;
        return { x, y };
    } else {
        const y = Math.trunc(Math.random() * height);
        const x = Math.random() > 0.5 ? 0 : width;
        return { x, y };
    }
}

export default class EnemySpawner extends Entity {
    public update(game: GameContext): void {
        if (game.elapsed % 5000 < 15) {
            this.addEnemyTo(game);
        }
    }

    private addEnemyTo(game: GameContext) {
        const newEnemy = new Enemy();
        newEnemy.position = getRandomStartPosition(game.screenWidth, game.screenHeight);
        game.add(newEnemy);
    }
}
