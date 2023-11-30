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
                'G--gs-GG----S----gsG-GFgG',
                '--G-GffGGF---A---Gg-GgSG-',
                'G-S-F-GffG------G-G--GGG-',
                '--G-GG-GG--------fG--Gf-G',
                '-G--g-----------G---g--G-',
                '--G---------------G------',
                '-G-g-G-------------g-Gfg-',
                '---------------A--G------',
                '--AS------------------AsA',
                '-----------GGG-----------',
                '-----------GGG-----------',
                '-----------GGGs-------S--',
                '-As-------------------A--',
                'GgG-G-G-----S------G---G-',
                '--GG--G---------A-G-G-g-G',
                '-G-sGg---A-------A--G-GG-',
                '-G--G--GG-A-----GG--G-g-f',
                '--g-G-GG-G------g-SG--Gg-',
                '-G-G--g-F------G-G-GG--G-',
                'G-GgfG-gG-------G--G-S-G-',
                '-GgsGfgG-------G-GGgGfG--',
                '------Gg-G------fGf-GFg-G',
                '-------G--A-s--G-f---G-G-',
            ]
        },
        {
            base: [
                'ggggggggggggggggggggggggg',
                'ggggggggggggggggggggggggg',
                'ggLNNRgggggggggggggLNNRgg',
                'ggWdddNNNNNNNNNNNNNdddEgg',
                'ggWdddddddddddddddddddEgg',
                'ggldddSSSSSSSSSSSSSdddrgg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'gggWdEgggggggggggggWdEggg',
                'ggLdddNNNNNNNNNNNNNdddRgg',
                'ggWdddddddddddddddddddEgg',
                'ggWdddSSSSSSSSSSSSSdddEgg',
                'gglSSrggggggggggggglSSrgg',
                'ggggggggggggggggggggggggg',
                'ggggggggggggggggggggggggg', 
            ],
            decoration: [
                'GsG--GGGfG---G-G-g-S-GG-s',
                '-G--G-Gsg-G-gG-GG-Gg-GgGF',
                '-gA-A-G-GG-g----G-GSG---G',
                'G----------------------G',
                '-G--------------------GG-',
                '-G------A----------A---G',
                'G-G-------G-GGG--------G-',
                'G-------G-G-g-F---F---Gg-',
                'GG-----gG-G--g-G--G---g-G',
                '-G-----G-g-G--fs--G----GG',
                '--G---G---G--G---G----GGG',
                '-g-A---G-s-----G-g-----G-',
                'GS-----GGG-G-s-G--G----G-',
                'G-G----gG--G--g-G-------g',
                '-g-------g---G--g--A--Gg-',
                'gG-S----G--G------G------',
                '-------GGG---s-G-------G-',
                '--s---gG--G-g---g------gs',
                '-G----GGG--G--G---G-----Gf',
                'G-------------S---------g',
                '--GA------------------G--',
                'G-G--------------A-----g-',
                'Gg---G--G--Sg-G--g-s--G--',
                '-G-G-G-GG-g-sG-gFSg-G-SG-',
                'G-G--gs-GGG-G--G-G-fg---G',
            ]
        },
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