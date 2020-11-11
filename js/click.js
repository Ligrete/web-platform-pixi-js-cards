
// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const charm = new Charm(PIXI);

const sprite = PIXI.Sprite.from('bunny.png');

// Set the initial position
sprite.anchor.set(0.5);
// sprite.x = app.screen.width / 4;
// sprite.y = app.screen.height / 4;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('mouseout', onClick);
sprite.on('mousemove', onClick);

sprite.position.set(100, 100);

container.onClick

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

container.addChild(sprite);


const mouseposition = app.renderer.plugins.interaction.mouse.global;
let cardO;

cardO = new Sprite(cards["deck_3.png"]);
cardO.anchor.set(0.5);
// cardO.x = app.screen.width / 4;
// cardO.y = app.screen.height / 4;

// Opt-in to interactivity
cardO.interactive = true;

// Shows hand cursor
cardO.buttonMode = true;

// Pointers normalize touch and mouse
cardO.on('mouseout', onClick);
cardO.on('mousemove', onClick);

cardO.position.set(100, 100);

container.addChild(cardO);




function onClick() {

    // sprite.scale.x *= 1.1;
    // sprite.scale.y *= 1.1;
    // console.log("mousepos", mouseposition.x, mouseposition.y);
    if (mouseposition.x>20 && mouseposition.x<app.screen.width-20 && cardO) {
        charm.slide(cardO, mouseposition.x, mouseposition.y, 2000);
    }
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    charm.update();
}

app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    //container.rotation -= 0.01 * delta;
    gameLoop();
});
