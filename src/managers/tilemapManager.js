import gp5, { constants } from "../sketch";
import game from "../game";
// Handles tilemapping 
const tilemapManager = {
    maps: [
        {
            base: [
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
                'NNNNNNNddddSSSddddNNNNNNN',
                'ddddddddddEgggWdddddddddd',
                'ddddddddddEgggWdddddddddd',
                'ddddddddddEgggWdddddddddd',
                'SSSSSSSddddNNNddddSSSSSSS',
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
            decoration: [
                '-G----G-----------G------',
                '--G--G-GG-------G-G------',
                '---gs-GG----S----gsG-GFgG',
                '--G-GffGGF---A---Gg-GgSG-',
                '--S-F-GffG------G-G--GGG-',
                '--G-GG-GG--------fG--Gf-G',
                '-G--g-----------G---g--G-',
                '--G---------------G------',
                '-G-g-G-------------g-Gfg-',
                '---------------A--G------',
                '--AS------------------AsA',
                '-----------GGG-----------',
                '-----------GGG-----------',
                '-----------GGGs-------S--',
                '-As----------------------',
                '------------S------------',
                '--GG------------A-G-G-g--',
                '---------A-------A--G-G--',
                '-G--G--GG-A-----G---G-g--',
                '--g-G-GG-G---------G--G--',
                '---G--g-F--------G-GG--G-',
                '--GgfG-gG----------G-S-G-',
                '---sGfgG---------GGgGfG--',
                '--G-gSg--G------fGf-GFg-G',
                '----------A-s----f---G-G-',
            ]
        }

    ],
    display: function() {
        const map = game.state.LEVEL;
        const baseMap = {
            g: 'plainGrass',
            d: 'plainDirt',
            E: 'dirtRightGrass',
            W: 'dirtLeftGrass',
            N: 'dirtTopGrass',
            S: 'dirtBottomGrass',
            L: 'dirtTopLeftGrass',
            l: 'dirtBottomLeftGrass',
            R: 'dirtTopRightGrass',
            r: 'dirtBottomRightGrass'
        };
        let x;
        let y;
        this.maps[map].base.forEach((row, i) => {
            [...row].forEach((col, j) => {
                x = j * constants.TILEMAP_BLOCK_SIZE;
                y = i * constants.TILEMAP_BLOCK_SIZE;
                const baseTile = game.assets.tiles[baseMap[col]];
                gp5.image(baseTile, x, y);                
            })
        });

        const decorationMap = {
            D: 'dirt1',
            d: 'dirt2',
            R: 'dirt3',
            F: 'flower1',
            f: 'flower2',
            L: 'flower3',
            G: 'grass1',
            g: 'grass2',
            A: 'grass3',
            S: 'stone1',
            s: 'stone2',
            T: 'stone3'
        }

        this.maps[map].decoration.forEach((row, i) => {
            [...row].forEach((col, j) => {
                x = j * constants.DECORATION_BLOCK_SIZE;
                y = i * constants.DECORATION_BLOCK_SIZE;
                if (col !== '-') {
                    const baseTile = game.assets.decorations[decorationMap[col]];
                    gp5.image(baseTile, x, y);                
                }
            })
        })
    }
}

export default tilemapManager;