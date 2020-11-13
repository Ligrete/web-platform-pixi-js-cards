// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;


var cardsDeckStatic = PIXI.Sprite.from('img/deck.png');
cardsDeckStatic.pivot.set(0.5);
cardsDeckStatic.anchor.set(0.5);
cardsDeckStatic.scale.set(0.25);
cardsDeckStatic.interactive = true;
cardsDeckStatic.buttonMode = true;
cardsDeckStatic.on('click', onClick);
cardsDeckStatic.x = app.screen.width / 2;
cardsDeckStatic.y = app.screen.height - (app.screen.height / 5);
container.addChild(cardsDeckStatic);


var cardsDeck = PIXI.Sprite.from('img/deck.png');
cardsDeck.pivot.set(0.5);
cardsDeck.anchor.set(0.5);
cardsDeck.scale.set(0.25);
cardsDeck.interactive = true;
cardsDeck.buttonMode = true;
cardsDeck.on('click', onClick);
cardsDeck.x = app.screen.width / 2;
cardsDeck.y = app.screen.height - (app.screen.height / 5);
container.addChild(cardsDeck);






var cardDeckSize = {
    x: cardsDeck.width,
    y: cardsDeck.height
};

const delay = 5000;


function onClick() {
    var picked;

    var deckpos = {
        x: app.screen.width / 2,
        y: app.screen.height * 0.8
    };

    if (cardsArray.length==0) {
        console.log("массив пустой");
        container.removeChild(cardsDeck);
        container.removeChild(cardsDeckStatic);
    }


    picked = cardsArray.pop();
    const opened = new Sprite(cards[picked.sprite]);
    console.log(picked);
    opened.x = cardsDeck.x;
    opened.y = cardsDeck.y;
    opened.pivot.set(0.5, 0.5);
    opened.anchor.set(0.5, 0.5);
    // opened.scale.set(0.75);
    opened.scale.set(0, 0.75);
    setTimeout(function () {
        if (cardsDeck && cardsArray.length > 0) {
            let slideTween = charm.slideScaleDouble(cardsDeck, opened, app.screen.width / 2, app.screen.height / 2, 0.45, 0.45, 2, 2, delay*1.5);
            //charm.scale(cardsDeck, 0, cardsDeck.height, 4000);
            slideTween.onComplete = () => {
                if (cardsArray.length == 0) {
                    cardsDeck.x += deckpos.x;
                    cardsDeck.y += deckpos.y;
                } else {
                    cardsDeck.x = deckpos.x;
                    cardsDeck.y = deckpos.y;
                    cardsDeck.scale.set(0.25);
                    // cardsDeck.width = cardDeckSize.x;
                    // cardsDeck.height = cardDeckSize.y;
                    // cardsDeck = PIXI.Sprite.from('img/deck.png');
                    container.addChild(opened);
                    setTimeout(function () {
                        let secondStep = charm.slideScale(opened, holderPos[picked.type].x, holderPos[picked.type].y, 0.75, 0.75, delay);
                        secondStep.onComplete = () => {
                            // имитация цикличного авторазложения карт по масти с анимацией
                            // setTimeout(onClick(), 0);
                        };
                    }, 500);
                }


            };
        } else {
            console.log("массив пустой");
            container.removeChild(cardsDeck);
        }
    }, 200);

}


function gameLoop() {
    requestAnimationFrame(gameLoop);
    charm.update();
}

app.ticker.add((delta) => {
    if (cardsArray.length==0 && cardsDeckStatic && cardsDeck) {
        container.removeChild(cardsDeck);
        container.removeChild(cardsDeckStatic);
        cardsDeck = null;
        cardsDeckStatic = null;
    }
    gameLoop();
});

