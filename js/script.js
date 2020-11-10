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
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('bunny.png');


// Create a 5x5 grid of bunnies
// for (let i = 0; i < 25; i++) {
//     const bunny = new PIXI.Sprite(texture);
//     bunny.anchor.set(0.5);
//     bunny.x = (i % 5) * 40;
//     bunny.y = Math.floor(i / 5) * 40;
//     container.addChild(bunny);
// }

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

// function setup () {

//     gameScene = new Container();


//     cards = resources["img/cards-pack.json"].textures;
//     card = new Sprite( cards["card_selected_large.png"]);
//     card.anchor.set(0, 0);
//     gameScene.addChild(card);
//     console.log(card);
// }

function setup() {

    cardScene = new Container();

    cards = resources["img/cards-pack.json"].textures;
    //Create the cat sprite

    cardScene.width = app.screen.width;
    cardScene.height = app.screen.height;


    cardScene.pivot.x = 0;
    cardScene.pivot.y = cardScene.height / 2;

    cardScene.backgroundColor = "#fff";


    var emptyPlaces = [];

    for ( var index = 0; index<4; index++) {
        let cat = new Sprite( cards["card_selected_large.png"]);
        cat.scale.set(0.25, 0.25);
        cat.x = (cat.width * 1.4) * (index+1);
        cat.y = app.screen.height / 20;
        cardScene.addChild(cat);
    }
    
    //Add the cat to the stage
    
    app.stage.addChild(cardScene);
  }

