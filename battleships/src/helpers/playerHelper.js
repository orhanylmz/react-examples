import {createPanel} from "./panelHelper";

import {ADMIRAL, KREUZER, DESTROYER, BOAT} from "./shipHelper";

export const generatePlayer = (name, username, panel) => {
    return {
        name: name,
        surname: username,
        ships: mapPanelToShips(panel)
    }
}

export const mapPanelToShips = (panel) => {
    const contents = panel.flat().filter(item => item.content !== null);
    if (contents.length < 20) {
        return;
    }

    const admiral = contents.filter(item => item.content.type === ADMIRAL);
    const kreuzer1 = contents.filter(item => item.content.type === KREUZER && item.content.index === 0);
    const kreuzer2 = contents.filter(item => item.content.type === KREUZER && item.content.index === 1);
    const destroyer1 = contents.filter(item => item.content.type === DESTROYER && item.content.index === 0);
    const destroyer2 = contents.filter(item => item.content.type === DESTROYER && item.content.index === 1);
    const destroyer3 = contents.filter(item => item.content.type === DESTROYER && item.content.index === 2);
    const boat1 = contents.filter(item => item.content.type === BOAT && item.content.index === 0);
    const boat2 = contents.filter(item => item.content.type === BOAT && item.content.index === 1);
    const boat3 = contents.filter(item => item.content.type === BOAT && item.content.index === 2);
    const boat4 = contents.filter(item => item.content.type === BOAT && item.content.index === 3);
    const miss = contents.filter(item =>
        item.content.type !== BOAT &&
        item.content.type !== DESTROYER &&
        item.content.type !== KREUZER &&
        item.content.type !== ADMIRAL &&
        item.content.shot > 0
    );

    return {
        admiral: [generateShip(admiral, 4)],
        kreuzer: [
            generateShip(kreuzer1, 3),
            generateShip(kreuzer2, 3)
        ],
        destroyer: [
            generateShip(destroyer1, 2),
            generateShip(destroyer2, 2),
            generateShip(destroyer3, 2)
        ],
        boat: [
            generateShip(boat1, 1),
            generateShip(boat2, 1),
            generateShip(boat3, 1),
            generateShip(boat4, 1)
        ],
        miss: [generateMiss(miss)]
    }
}

export const mapShipsToPanel = (ships, panel) => {
    const {admiral, kreuzer, destroyer, boat, miss} = ships;

    if (panel == null) {
        panel = createPanel();
    }
    addPanel(admiral[0], panel);
    addPanel(kreuzer[0], panel);
    addPanel(kreuzer[1], panel);
    addPanel(destroyer[0], panel);
    addPanel(destroyer[1], panel);
    addPanel(destroyer[2], panel);
    addPanel(boat[0], panel);
    addPanel(boat[1], panel);
    addPanel(boat[2], panel);
    addPanel(boat[3], panel);
    miss && miss.map(missone => {
        addPanel(missone, panel)
    });

    return panel;
}

const addPanel = ({parts}, panel) => {
    parts.map(part => {
        panel[part.j][part.i] = {
            ...panel[part.j][part.i],
            content: part
        }
    });
}

const generateShip = (ship, partSize) => {
    if (ship.length !== partSize) {
        return;
    }

    let parts = [];
    ship.map(shipPart => parts.push(part(shipPart)));
    return {
        parts,
        shot: false
    }
}

const generateMiss = (miss) => {
    let parts = [];
    miss.map(mPart => parts.push(missPart(mPart)));
    return {
        parts,
        shot: false
    }
}

const missPart = (part) => ({
    i: part.content.i,
    j: part.content.j,
    state: "miss",
    shot: part.content.shot
});

const part = (shipPart) => ({
    i: shipPart.content.i,
    j: shipPart.content.j,
    type: shipPart.content.type,
    index: shipPart.content.index,
    part: shipPart.content.part,
    state: shipPart.content.shot ? "shot" : shipPart.content.type,
    shot: shipPart.content.shot ? shipPart.content.shot : 0
});


