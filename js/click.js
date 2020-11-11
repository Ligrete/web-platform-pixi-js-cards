
// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from('bunny.png');

var cards = resources["img/cards-pack.json"].textures;

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 4;
sprite.y = app.screen.height / 4;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

container.addChild(sprite);

charm = new Charm(PIXI);

function onClick() {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
    charm.slide(sprite, app.screen.width/2,app.screen.height/2, 120);
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    charm.update();
}
