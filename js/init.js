// *****************************
let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

PIXI.utils.sayHello(type)
// *****************************


let Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

const app = new PIXI.Application({
    width: 960,
    height: 640,
    transparent: true,
    resolution: window.devicePixelRatio || 1,
});

const charm = new Charm(PIXI);
const container = new Container();

const mouseposition = app.renderer.plugins.interaction.mouse.global;


//my vars

var holderPos = [];

// разные текстуры
var deckSprite;