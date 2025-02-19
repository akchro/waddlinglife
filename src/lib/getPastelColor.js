function getPastelColor(){
    const h = 360 * Math.random()
    const s = (25 + 70 * Math.random())
    const l = (85 + 10 * Math.random())

    return hslToHex(h, s, l)
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

export default getPastelColor;