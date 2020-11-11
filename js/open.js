// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;


// const pickedCard = PIXI.Sprite.from('img/deck.png');
// pickedCard.anchor.set(0.5);
// pickedCard.scale.set(0.25);
// pickedCard.interactive = true;
// pickedCard.buttonMode = true;
// pickedCard.on('mouseout', onMove);
// pickedCard.on('mousemove', onMove);
// pickedCard.position.set(100, 100);
// // Alternatively, use the mouse & touch events:
// // pickedCard.on('click', onClick); // mouse-only
// // pickedCard.on('tap', onClick); // touch-only
// container.addChild(pickedCard);


var cardsDeck = PIXI.Sprite.from('img/deck.png');
cardsDeck.pivot.set(0.5)
cardsDeck.scale.set(0.25);
cardsDeck.interactive = true;
cardsDeck.buttonMode = true;
cardsDeck.on('click', onClick);
cardsDeck.x = app.screen.width / 2;
cardsDeck.y = app.screen.height - (app.screen.height / 5);
// Alternatively, use the mouse & touch events:
// cardsDeck.on('click', onClick); // mouse-only
// cardsDeck.on('tap', onClick); // touch-only
container.addChild(cardsDeck);



var cardDeckSize = {
    x: cardsDeck.width,
    y: cardsDeck.height
};


function onClick() {
    var picked;

    var deckpos = {
        x: app.screen.width/2,
        y: app.screen.height*0.8
    };

    // pickedCard.scale.x *= 1.1;
    // pickedCard.scale.y *= 1.1;
    // console.log("mousepos", mouseposition.x, mouseposition.y);
    if (cardsDeck && cardsArray.length > 0) {
        let slideTween = charm.slide(cardsDeck, app.screen.width / 2, app.screen.height / 2, 4000);
        //charm.scale(cardsDeck, 0, cardsDeck.height, 4000);
        slideTween.onComplete = () => {
            picked = cardsArray.pop();
            const opened = new Sprite(cards[picked.sprite]);
            console.log(picked);
            opened.x = cardsDeck.x;
            opened.y = cardsDeck.y;
            opened.pivot.set(0.5, 0.5)
            opened.scale.set(0.75);
            opened.interactive = true;
            opened.buttonMode = true;
            if(cardsArray.length==0) {
                cardsDeck.x+= deckpos.x;
                cardsDeck.y+= deckpos.y;
            } else {
                cardsDeck.x = deckpos.x;
                cardsDeck.y = deckpos.y;
                // cardsDeck.width = cardDeckSize.x;
                // cardsDeck.height = cardDeckSize.y;
                // cardsDeck = PIXI.Sprite.from('img/deck.png');
                container.addChild(opened);
                let secondStep = charm.slide(opened, holderPos[picked.type].x, holderPos[picked.type].y, 5000);
                secondStep.onComplete = () => {
                    // console.log("secondStep", secondStep);
                    setTimeout(onClick(), 10000);
                    // var picked = cardsArray.pop();
                    // const opened = new Sprite(cards[picked.sprite]);
                    // console.log(picked);
                    // opened.pivot.set(0.5, 0.5)
                    // opened.scale.set(0.8);
                    // opened.interactive = true;
                    // opened.buttonMode = true;
                    // opened.on('click', onClick);
                    // opened.x = app.screen.width/2;
                    // opened.y = app.screen.height-(app.screen.height/5);
                    // container.addChild(opened);
                };
            }

           
        };
    } else {
        console.log("массив пустой");
        container.removeChild(cardsDeck);
    }

}



// function onMove() {

//     pickedCard.scale.x *= 1.1;
//     pickedCard.scale.y *= 1.1;
//     console.log("mousepos", mouseposition.x, mouseposition.y);
//     if (mouseposition.x > 20 && mouseposition.x < app.screen.width - 20 && pickedCard) {
//         charm.slide(pickedCard, mouseposition.x, mouseposition.y, 2000);
//     }
// }

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