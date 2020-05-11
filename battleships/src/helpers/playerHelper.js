import {createPanel} from "./panelHelper";

export const generatePlayer = (name, username, panel) => {
    return {
        name: name,
        surname: username,
        ships: mapPanelToShips(panel)
    }
}

export const mapPanelToShips = (panel) => {
    const contents = panel.flat().filter(item => item.content !== null);
    if (contents.length !== 20) {
        return;
    }

    const admiral = contents.filter(item => item.content.name.indexOf("admiral") >= 0);
    const kreuzer1 = contents.filter(item => item.content.name.indexOf("kreuzer_0") >= 0);
    const kreuzer2 = contents.filter(item => item.content.name.indexOf("kreuzer_1") >= 0);
    const destroyer1 = contents.filter(item => item.content.name.indexOf("destroyer_0") >= 0);
    const destroyer2 = contents.filter(item => item.content.name.indexOf("destroyer_1") >= 0);
    const destroyer3 = contents.filter(item => item.content.name.indexOf("destroyer_2") >= 0);
    const boat1 = contents.filter(item => item.content.name.indexOf("boat_0") >= 0);
    const boat2 = contents.filter(item => item.content.name.indexOf("boat_1") >= 0);
    const boat3 = contents.filter(item => item.content.name.indexOf("boat_2") >= 0);
    const boat4 = contents.filter(item => item.content.name.indexOf("boat_3") >= 0);

    return {
        admiral: generateAdmiral(admiral),
        kreuzers: [
            generateKreuzer(kreuzer1),
            generateKreuzer(kreuzer2)
        ],
        destroyers: [
            generateDestroyer(destroyer1),
            generateDestroyer(destroyer2),
            generateDestroyer(destroyer3)
        ],
        boats: [
            generateBoat(boat1),
            generateBoat(boat2),
            generateBoat(boat3),
            generateBoat(boat4),
        ]
    }
}

export const mapShipsToPanel = (ships) => {
    const {admiral, kreuzers, destroyers, boats} = ships;

    const panel = createPanel();
    addPanel("admiral", admiral, panel);
    addPanel("kreuzer_0", kreuzers[0], panel);
    addPanel("kreuzer_1", kreuzers[1], panel);
    addPanel("destroyer_0", destroyers[0], panel);
    addPanel("destroyer_1", destroyers[1], panel);
    addPanel("destroyer_2", destroyers[2], panel);
    addPanel("boat_0", boats[0], panel);
    addPanel("boat_1", boats[1], panel);
    addPanel("boat_2", boats[2], panel);
    addPanel("boat_3", boats[3], panel);

    return panel;
}

const addPanel = (name, {parts}, panel) => {
    parts.map(part => {
        panel[part.j][part.i] = {
            ...panel[part.j][part.i],
            content: {
                name: name
            }
        }
    })
}

const generateAdmiral = (admiral) => {
    if (admiral.length !== 4) {
        return;
    }
    return {
        parts: [
            part(admiral[0].i, admiral[0].j),
            part(admiral[1].i, admiral[1].j),
            part(admiral[2].i, admiral[2].j),
            part(admiral[3].i, admiral[3].j)
        ],
        shot: false
    }
}

const generateKreuzer = (kreuzer) => {
    if (kreuzer.length !== 3) {
        return;
    }
    return {
        parts: [
            part(kreuzer[0].i, kreuzer[0].j),
            part(kreuzer[1].i, kreuzer[1].j),
            part(kreuzer[2].i, kreuzer[2].j)
        ],
        shot: false
    }
}

const generateDestroyer = (destroyer) => {
    if (destroyer.length !== 2) {
        return;
    }
    return {
        parts: [
            part(destroyer[0].i, destroyer[0].j),
            part(destroyer[1].i, destroyer[1].j)
        ],
        shot: false
    }
}

const generateBoat = (boat) => {
    if (boat.length !== 1) {
        return;
    }
    return {
        parts: [
            part(boat[0].i, boat[0].j)
        ],
        shot: false
    }
}

const part = (i, j) => ({
    i: i,
    j: j,
    shot: 0
})