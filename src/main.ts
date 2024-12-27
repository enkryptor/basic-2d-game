import { Game } from '@engine/game';
import { startScreen } from './game/screens';


const canvas = document.querySelector("canvas");
if (!canvas) throw new Error("Can't get the canvas.");
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Can't initialize 2d contex.");

const game = new Game(ctx);

game.setScreen(startScreen);
game.run();
