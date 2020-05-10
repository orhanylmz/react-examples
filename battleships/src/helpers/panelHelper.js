export const createPanel = () => {
    const panel = [];
    for (var j = 0; j < 10; j++) {
        const panelLine = [];
        for (var i = 0; i < 10; i++) {
            panelLine.push(value(i, j));
        }
        panel.push(panelLine);
    }
    return panel;
}

const value = (i, j) => {
    return {
        i: i,
        j: j,
        id: "panel_" + i + "_" + j,
        content: null
    };
}