import gp5, { constants } from "../sketch";
import game from "../game";
// Handles tilemapping 
const tilemapManager = {
    maps: [
        [
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'gggggggLNNdddddNNRggggggg',
            'gggggggWdddddddddEggggggg',
            'gggggggWdddddddddEggggggg',
            'NNNNNNNdddddddddddNNNNNNN',
            'ddddddddddddddddddddddddd',
            'ddddddddddddddddddddddddd',
            'ddddddddddddddddddddddddd',
            'SSSSSSSdddddddddddSSSSSSS',
            'gggggggWdddddddddEggggggg',
            'gggggggWdddddddddEggggggg',
            'ggggggglSSdddddSSrggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg',
            'ggggggggggWdddEgggggggggg' 
        ],
    ],
    display: function() {
        const map = game.state.LEVEL;
        let x;
        let y;
        this.maps[map].forEach((row, i) => {
            [...row].forEach((col, j) => {
                x = j * constants.TILEMAP_BLOCK_SIZE;
                y = i * constants.TILEMAP_BLOCK_SIZE;
                
                let img;
                switch (col) {
                    case 'g':
                        img = game.assets.tiles.plainGrass;
                        break;
                    case 'd':
                        img = game.assets.tiles.plainDirt;
                        break;
                    case 'E':
                        img = game.assets.tiles.dirtRightGrass;
                        break;
                    case 'W':
                        img = game.assets.tiles.dirtLeftGrass;
                        break;
                    case 'N':
                        img = game.assets.tiles.dirtTopGrass;
                        break;
                    case 'S':
                        img = game.assets.tiles.dirtBottomGrass;
                        break;
                    case 'L':
                        img = game.assets.tiles.dirtTopLeftGrass;
                        break;
                    case 'l':
                        img = game.assets.tiles.dirtBottomLeftGrass;
                        break;
                    case 'R':
                        img = game.assets.tiles.dirtTopRightGrass;
                        break;
                    case 'r':
                        img = game.assets.tiles.dirtBottomRightGrass;
                        break;
                    default:
                        img = game.assets.tiles.plainGrass
                }
                gp5.image(img, x, y);
            })
        })
    }
}

export default tilemapManager;