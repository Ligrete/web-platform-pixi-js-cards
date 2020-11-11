let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

PIXI.utils.sayHello(type)

const scrW = window.screen.width;
const scrH = window.screen.height;

let Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

const app = new PIXI.Application({
    // width: scrW,
    // height: scrH,
    width: 800,
    height: 480,
    // backgroundColor: 0x1099bb,
    transparent: true,
    resolution: window.devicePixelRatio || 1,
});


app.renderer.autoResize = true;
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);


// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    //container.rotation -= 0.01 * delta;
});

// texture loader 
loader
    .add([
        "img/cards-pack.json"
    ])
    .load(setup);


function setup() {

    cardScene = new Container();

    cards = resources["img/cards-pack.json"].textures;

    cardScene.width = app.screen.width;
    cardScene.height = app.screen.height;

    cardScene.pivot.x = 0;
    cardScene.pivot.y = cardScene.height / 2;

    for (var index = 0; index < 4; index++) {
        let emptyCardPlace = new Sprite(cards["card_selected_large.png"]);
        emptyCardPlace.scale.set(0.75, 0.75);
        emptyCardPlace.x = (emptyCardPlace.width * 1.4) * (index + 1);
        emptyCardPlace.y = app.screen.height / 20;
        cardScene.addChild(emptyCardPlace);
    }


    for (var index = 0; index < 2; index++) {
        let emptyCardPlace = new Sprite(cards["deck_3.png"]);
        emptyCardPlace.scale.set(0.8, 0.8);
        emptyCardPlace.x = (emptyCardPlace.width * 1.415) * (index + 1);
        emptyCardPlace.y = app.screen.height / 20;
        cardScene.addChild(emptyCardPlace);
    }

    app.stage.addChild(cardScene);


    // колода карт

    for (var index = 0; index < cardsArray.length; index++) {
        if (index) {
            let emptyCardPlace = new Sprite(cards["deck_3.png"]);
            // emptyCardPlace.scale.set(0.25, 0.25);
            emptyCardPlace.scale.set(0.8, 0.8);
            emptyCardPlace.anchor.set(0.5, 0.9);
            emptyCardPlace.x = app.screen.width / 2.5 + (index + 1);
            emptyCardPlace.y = app.screen.height / 1.2 - index * (-0.3);
            emptyCardPlace.rotation = 0.01 + index / cardsArray.length / 2;
            cardScene.addChild(emptyCardPlace);
        }
    }
}

