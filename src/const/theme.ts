export const ThemeMap = new Map<string, Theme>();

export class Theme {
    title: string;
    text: string;
    background: string;
    stroke: string;
    strokeOpacity: number;
    icon: string;
    chart: string;
    constructor(
        title: string,
        text: string,
        background: string,
        stroke: string,
        strokeOpacity: number,
        icon: string,
        chart: string
    ) {
        this.title = title;
        this.text = text;
        this.background = background;
        this.stroke = stroke;
        this.strokeOpacity = strokeOpacity;
        this.icon = icon;
        this.chart = chart;
    }
}

// Set up themes
// We support short hex color, hex color and RGBA hex
// ThemeMap.set(name, new Theme('title', 'text', 'background', 'stroke', 'strokeOpacity', 'icon', 'chart'));
ThemeMap.set('holi', new Theme('#5ea9eb', '#d6e7ff', '#ffffff00', '#d6e7ff', 1, '#5090cb', '#5090cb'));
ThemeMap.set('2077', new Theme('#ff0055', '#03d8f3', '#ffffff00', '#141321', 1, '#fcee0c', '#00ffc8'));
ThemeMap.set('algolia', new Theme('#00aeff', '#ffffff', '#ffffff00', '#000000', 0, '#2dde98', '#00aeff'));
ThemeMap.set('apprentice', new Theme('#ffffff', '#bcbcbc', '#ffffff00', '#000000', 0, '#ffffaf', '#ffffff'));
ThemeMap.set('aura_dark', new Theme('#ff7372', '#dbdbdb', '#ffffff00', '#000000', 0, '#6cffd0', '#ff7372'));
ThemeMap.set('aura', new Theme('#a277ff', '#61ffca', '#ffffff00', '#000000', 0, '#ffca85', '#a277ff'));
ThemeMap.set('ayu_mirage', new Theme('#f4cd7c', '#c7c8c2', '#ffffff00', '#000000', 0, '#73d0ff', '#f4cd7c'));
ThemeMap.set('bear', new Theme('#e03c8a', '#bcb28d', '#ffffff00', '#000000', 0, '#00aeff', '#e03c8a'));
ThemeMap.set('blue_green', new Theme('#2f97c1', '#0cf574', '#ffffff00', '#000000', 0, '#f5b700', '#2f97c1'));
ThemeMap.set('blueberry', new Theme('#82aaff', '#27e8a7', '#ffffff00', '#000000', 0, '#89ddff', '#82aaff'));
ThemeMap.set('buefy', new Theme('#7957d5', '#363636', '#ffffff00', '#000000', 0, '#ff3860', '#7957d5'));
ThemeMap.set('calm', new Theme('#e07a5f', '#ebcfb2', '#ffffff00', '#000000', 0, '#edae49', '#e07a5f'));
ThemeMap.set('chartreuse_dark', new Theme('#7fff00', '#fff', '#ffffff00', '#000000', 1, '#00aeff', '#7fff00'));
ThemeMap.set('city_lights', new Theme('#5d8cb3', '#718ca1', '#ffffff00', '#000000', 0, '#4798ff', '#5d8cb3'));
ThemeMap.set('cobalt', new Theme('#e683d9', '#75eeb2', '#ffffff00', '#000000', 0, '#0480ef', '#e683d9'));
ThemeMap.set('cobalt2', new Theme('#ffc600', '#0088ff', '#ffffff00', '#000000', 0, '#ffffff', '#ffc600'));
ThemeMap.set('codeSTACKr', new Theme('#ff652f', '#ffffff', '#ffffff00', '#0c1a25', 1, '#ffe400', '#ff652f'));
ThemeMap.set('darcula', new Theme('#ba5f17', '#bebebe', '#ffffff00', '#000000', 0, '#ffb74d', '#ba5f17'));
ThemeMap.set('dark', new Theme('#fff', '#9f9f9f', '#ffffff00', '#000000', 0, '#79ff97', '#fff'));
ThemeMap.set('date_night', new Theme('#da7885', '#e1b2a2', '#ffffff00', '#170f0c', 1, '#bb8470', '#da7885'));
ThemeMap.set('default', new Theme('#586e75', '#586e75', '#ffffff00', '#e4e2e2', 1, '#586e75', '#586e75'));
ThemeMap.set('discord_old_blurple', new Theme('#7289da', '#ffffff', '#ffffff00', '#000000', 0, '#7289da', '#7289da'));
ThemeMap.set('dracula', new Theme('#ff79c6', '#ffb86c', '#ffffff00', '#282a36', 1, '#6272a4', '#bd93f9'));
ThemeMap.set('flag_india', new Theme('#ff8f1c', '#509e2f', '#ffffff00', '#000000', 0, '#250e62', '#ff8f1c'));
ThemeMap.set('github_dark', new Theme('#0366d6', '#77909c', '#ffffff00', '#2e343b', 1, '#8b949e', '#40c463'));
ThemeMap.set('github', new Theme('#0366d6', '#586069', '#ffffff00', '#e4e2e2', 1, '#586069', '#40c463'));
ThemeMap.set('gotham', new Theme('#2aa889', '#99d1ce', '#ffffff00', '#000000', 1, '#599cab', '#2aa889'));
ThemeMap.set('graywhite', new Theme('#24292e', '#24292e', '#ffffff00', '#000000', 0, '#24292e', '#24292e'));
ThemeMap.set('great_gatsby', new Theme('#ffa726', '#ffd95b', '#ffffff00', '#000000', 0, '#ffb74d', '#ffa726'));
ThemeMap.set('gruvbox', new Theme('#fabd2f', '#8ec07c', '#ffffff00', '#282828', 1, '#fe8019', '#fe8019'));
ThemeMap.set('highcontrast', new Theme('#e7f216', '#fff', '#ffffff00', '#000000', 0, '#00ffff', '#e7f216'));
ThemeMap.set('jolly', new Theme('#ff64da', '#ffffff', '#ffffff00', '#000000', 0, '#a960ff', '#ff64da'));
ThemeMap.set('kacho_ga', new Theme('#bf4a3f', '#d9c8a9', '#ffffff00', '#000000', 0, '#a64833', '#bf4a3f'));
ThemeMap.set('maroongold', new Theme('#f7ef8a', '#e0aa3e', '#ffffff00', '#000000', 0, '#f7ef8a', '#f7ef8a'));
ThemeMap.set('material_palenight', new Theme('#c792ea', '#ffffff00', '#292d3e', '#000000', 0, '#89ddff', '#c792ea'));
ThemeMap.set('merko', new Theme('#abd200', '#68b587', '#ffffff00', '#000000', 0, '#b7d364', '#abd200'));
ThemeMap.set('midnight_purple', new Theme('#9745f5', '#ffffff', '#ffffff00', '#000000', 0, '#9f4bff', '#9745f5'));
ThemeMap.set('moltack', new Theme('#86092c', '#574038', '#ffffff00', '#000000', 0, '#86092c', '#86092c'));
ThemeMap.set('monokai', new Theme('#eb1f6a', '#ffffff', '#ffffff00', '#2c292d', 1, '#e28905', '#ae81ff'));
ThemeMap.set('moonlight', new Theme('#ff757f', '#f8f8f8', '#ffffff00', '#222436', 1, '#599dff', '#ff757f'));
ThemeMap.set('nightowl', new Theme('#c792ea', '#7fdbca', '#ffffff00', '#000000', 0, '#ffeb95', '#c792ea'));
ThemeMap.set('noctis_minimus', new Theme('#d3b692', '#c5cdd3', '#ffffff00', '#000000', 0, '#72b7c0', '#d3b692'));
ThemeMap.set('nord_bright', new Theme('#3b4252', '#2e3440', '#ffffff00', '#e5e9f0', 1, '#8fbcbb', '#88c0d0'));
ThemeMap.set('nord_dark', new Theme('#eceff4', '#e5e9f0', '#ffffff00', '#eceff4', 1, '#8fbcbb', '#88c0d0'));
ThemeMap.set('ocean_dark', new Theme('#8957b2', '#92d534', '#ffffff00', '#000000', 0, '#ffffff', '#8957b2'));
ThemeMap.set('omni', new Theme('#ff79c6', '#e1e1e6', '#ffffff00', '#000000', 0, '#e7de79', '#ff79c6'));
ThemeMap.set('onedark', new Theme('#e4bf7a', '#df6d74', '#ffffff00', '#000000', 0, '#8eb573', '#e4bf7a'));
ThemeMap.set('outrun', new Theme('#ffcc00', '#8080ff', '#ffffff00', '#000000', 0, '#ff1aff', '#ffcc00'));
ThemeMap.set('panda', new Theme('#19f9d899', '#ff75b5', '#ffffff00', '#000000', 0, '#19f9d899', '#19f9d899'));
ThemeMap.set('prussian', new Theme('#bddfff', '#6e93b5', '#ffffff00', '#000000', 0, '#38a0ff', '#bddfff'));
ThemeMap.set('radical', new Theme('#fe428e', '#a9fef7', '#ffffff00', '#141321', 1, '#f8d847', '#ae81ff'));
ThemeMap.set('react', new Theme('#61dafb', '#ffffff', '#ffffff00', '#000000', 0, '#61dafb', '#61dafb'));
ThemeMap.set('rose_pine', new Theme('#9ccfd8', '#e0def4', '#ffffff00', '#000000', 0, '#ebbcba', '#9ccfd8'));
ThemeMap.set('shades_of_purple', new Theme('#fad000', '#a599e9', '#ffffff00', '#000000', 0, '#b362ff', '#fad000'));
ThemeMap.set('slateorange', new Theme('#faa627', '#ffffff', '#ffffff00', '#000000', 0, '#faa627', '#faa627'));
ThemeMap.set('solarized_dark', new Theme('#268bd2', '#839496', '#ffffff00', '#073642', 1, '#b58900', '#859900'));
ThemeMap.set('solarized', new Theme('#268bd2', '#586e75', '#ffffff00', '#fdf6e3', 1, '#b58900', '#859900'));
ThemeMap.set('swift', new Theme('#000000', '#000000', '#ffffff00', '#000000', 0, '#f05237', '#000000'));
ThemeMap.set('synthwave', new Theme('#e2e9ec', '#e5289e', '#ffffff00', '#000000', 0, '#ef8539', '#e2e9ec'));
ThemeMap.set('tokyonight', new Theme('#70a5fd', '#38bdae', '#ffffff00', '#1a1b27', 1, '#bf91f3', '#bf91f3'));
ThemeMap.set('transparent', new Theme('#006AFF', '#417E87', '#ffffff00', '#000000', 0, '#0579C3', '#006AFF'));
ThemeMap.set('vision_friendly_dark', new Theme('#ffb000', '#ffffff', '#ffffff00', '#000000', 0, '#785ef0', '#ffb000'));
ThemeMap.set('vue', new Theme('#41b883', '#000000', '#ffffff00', '#e4e2e2', 1, '#41b883', '#41b883'));
ThemeMap.set('yeblu', new Theme('#ffff00', '#ffffff', '#ffffff00', '#000000', 0, '#ffff00', '#ffff00'));
ThemeMap.set('zenburn', new Theme('#f0dfaf', '#dcdccc', '#ffffff00', '#3f3f3f', 1, '#8cd0d3', '#7f9f7f'));
