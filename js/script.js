// let type = "WebGL"
// if (!PIXI.utils.isWebGLSupported()) {
//     type = "canvas"
// }

// PIXI.utils.sayHello(type)


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const scrW = window.screen.width;
const scrH = window.screen.height;





app.renderer.autoResize = true;
document.body.appendChild(app.view);



app.stage.addChild(container);


container.width = app.screen.width;
container.height = app.screen.height;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
// app.ticker.add((delta) => {
//     // rotate the container!
//     // use delta to create frame-independent transform
//     //container.rotation -= 0.01 * delta;
//     gameLoop();
// });

// texture loader 
loader
    .add([
        "img/cards-pack.json"
    ])
    .load(setup);





function setup() {

    // const cardsHolder = new Container();
    // cardsHolder.pivot.set(0.5, 0.5);
    // cardsHolder.x = 0;
    // cardsHolder.width = app.screen.width/2;
    // cardsHolder.height = app.screen.height;

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


    // // let bg = new Sprite(cards["deck_2_large.png"]);
    // // bg.x = (bg.width * 1.4) * (index - 2 );
    // var bg = new PIXI.Sprite(PIXI.Texture.WHITE);
    // bg.tint = 0xff0000;
    // bg.x = cardsHolder.width/2;
    // bg.y = cardsHolder.height/2;
    // bg.pivot.set(0, 0);
    // bg.width = cardsHolder.width;
    // bg.height = cardsHolder.height;

    // console.log(bg.x);
    // cardsHolder.addChild(bg);

    // for (var index = 0; index < 2; index++) {
    //     let emptyCardPlace = new Sprite(cards["deck_3.png"]);
    //     emptyCardPlace.scale.set(0.8, 0.8);
    //     emptyCardPlace.x = (emptyCardPlace.width * 1.415) * (index + 1);
    //     emptyCardPlace.y = app.screen.height / 20;
    //     cardScene.addChild(emptyCardPlace);
    // }



    // колода карт

    // for (var index = 0; index < cardsArray.length; index++) {
    //     if (index) {
    //         let emptyCardPlace = new Sprite(cards["deck_3.png"]);
    //         // emptyCardPlace.scale.set(0.25, 0.25);
    //         emptyCardPlace.scale.set(0.3, 0.3);
    //         emptyCardPlace.anchor.set(0.5, 0.9);
    //         emptyCardPlace.x = app.screen.width / 2.5 + (index + 1);
    //         emptyCardPlace.y = app.screen.height / 1.2 - index * (-0.3);
    //         emptyCardPlace.rotation = 0.01 + index / cardsArray.length / 2;
    //         container.addChild(emptyCardPlace);
    //     }
    // }

    // app.stage.addChild(cardsHolder);
}

