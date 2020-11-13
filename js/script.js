


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const scrW = window.screen.width;
const scrH = window.screen.height;


app.renderer.autoResize = true;
document.body.appendChild(app.view);



app.stage.addChild(container);


container.width = app.screen.width;
container.height = app.screen.height;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

loader
    .add([
        "img/cards-pack.json"
    ])
    .load(setup);





function setup() {

    cards = resources["img/cards-pack.json"].textures;

    this.deckSprite = new Sprite(cards["deck_3.png"]);


    for (const key in cardsArray) {
        if (cardsArray.hasOwnProperty(key)) {
            console.log(key);
            cardsArray[key].sprite = `card_b_${cardsArray[key].code}.png`;
        }
    }

    console.log(cardsArray);

    for (var index = 0; index < 5; index++) {
        if (index!=0) {
            let emptyCardPlace = new Sprite(cards["card_selected_large.png"]);
            emptyCardPlace.scale.set(0.25, 0.25);
            emptyCardPlace.pivot.set(0.5);
            emptyCardPlace.anchor.set(0.5);
            // emptyCardPlace.x = (emptyCardPlace.width * 1.4) * (index - 2 );
            emptyCardPlace.x = (index*emptyCardPlace.width*1.2)+app.screen.width/6;
            console.log(emptyCardPlace.x, emptyCardPlace.y);
            emptyCardPlace.y = app.screen.height/8;
            container.addChild(emptyCardPlace);
            holderPos.push({
                x: emptyCardPlace.x,
                y: emptyCardPlace.y
            });
        }
    }
}

