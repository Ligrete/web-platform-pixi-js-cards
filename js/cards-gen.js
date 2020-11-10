let cardsArray = [];

genCardSuits();



function genCardSuits() {
    var namedCards = ['Jack', 'Quenn', 'King', 'Ace'];
    for (var indexSuit = 0; indexSuit < 4; indexSuit++) {
        for (var index = 0; index < 13; index++) {
            if (index <= 8) {
                switch (indexSuit) {
                    case 0:
                        cardsArray.push({
                            type: "D",
                            order: index + 2,
                            code: "d"+(index + 2)
                        });
                        break;

                    case 1:
                        cardsArray.push({
                            type: "H",
                            order: index + 2,
                            code: "h"+(index + 2)
                        });
                        break;

                    case 2:
                        cardsArray.push({
                            type: "S",
                            order: index + 2,
                            code: "s"+(index + 2)
                        });
                        break;
                    case 3:
                        cardsArray.push({
                            type: "C",
                            order: index + 2,
                            code: "c"+(index + 2)
                        });
                        break;

                    default:
                        break;
                }
            } else {
                switch (indexSuit) {
                    case 0:
                        cardsArray.push({
                            type: "D",
                            order: namedCards[index - 9],
                            code: "d"+namedCards[index - 9].slice(0, 1).toLowerCase()
                        });
                        break;

                    case 1:
                        cardsArray.push({
                            type: "H",
                            order: namedCards[index - 9],
                            code: "h"+namedCards[index - 9].slice(0, 1).toLowerCase()
                        });
                        break;

                    case 2:
                        cardsArray.push({
                            type: "S",
                            order: namedCards[index - 9],
                            code: "s"+namedCards[index - 9].slice(0, 1).toLowerCase()
                        });
                        break;
                    case 3:
                        cardsArray.push({
                            type: "C",
                            order: namedCards[index - 9],
                            code: "c"+namedCards[index - 9].slice(0, 1).toLowerCase()
                        });
                        break;

                    default:
                        break;
                }
            }
        }
    }
    result = shuffle(cardsArray);
    console.log("result", result);
}

function shuffle(arrayIn) {
    let array = [];
    array = arrayIn;
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}