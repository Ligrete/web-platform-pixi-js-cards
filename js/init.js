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
    width: 960,
    height: 640,
    // backgroundColor: 0x1099bb,
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