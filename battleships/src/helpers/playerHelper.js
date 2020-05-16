import {createPanel} from "./panelHelper";

import {ADMIRAL, KREUZER, DESTROYER, BOAT} from "./shipHelper";

export const mapPanelToShips = (panel, validate) => {
    const contents = panel.flat().filter(item => item.content !== null);
    if (contents.length < 20) {
        return;
    }

    const admiral = generateShip(contents.filter(item => item.content.type === ADMIRAL), 4);
    validate && validateAdmiral(admiral);
    const kreuzer1 = generateShip(contents.filter(item => item.content.type === KREUZER && item.content.index === 0), 3);
    validate && validateKreuzer(kreuzer1);
    const kreuzer2 = generateShip(contents.filter(item => item.content.type === KREUZER && item.content.index === 1), 3);
    validate && validateKreuzer(kreuzer2);
    const destroyer1 = generateShip(contents.filter(item => item.content.type === DESTROYER && item.content.index === 0), 2);
    validate && validateDestroyer(destroyer1);
    const destroyer2 = generateShip(contents.filter(item => item.content.type === DESTROYER && item.content.index === 1), 2);
    validate && validateDestroyer(destroyer2);
    const destroyer3 = generateShip(contents.filter(item => item.content.type === DESTROYER && item.content.index === 2), 2);
    validate && validateDestroyer(destroyer3);
    const boat1 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 0), 1);
    validate && validateBoat(boat1);
    const boat2 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 1), 1);
    validate && validateBoat(boat2);
    const boat3 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 2), 1);
    validate && validateBoat(boat3);
    const boat4 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 3), 1);
    validate && validateBoat(boat4);
    const miss = generateMiss(contents.filter(item => item.content.type !== BOAT && item.content.type !== DESTROYER && item.content.type !== KREUZER && item.content.type !== ADMIRAL && item.content.shot > 0));

    return {
        admiral: [admiral],
        kreuzer: [kreuzer1, kreuzer2],
        destroyer: [destroyer1, destroyer2, destroyer3],
        boat: [boat1, boat2, boat3, boat4],
        miss: [miss]
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

const validateAdmiral = ({parts}) => {
    if (parts.length !== 4){
        throw "Amiral parts length must be 4";
    }
    return true;
}

const validateKreuzer = ({parts}) => {
    if (parts.length !== 3){
        throw "Kreuzer parts length must be 3";
    }
    return true;
}

const validateDestroyer = ({parts}) => {
    if (parts.length !== 2){
        throw "Destroyer parts length must be 2";
    }
    return true;
}

const validateBoat = ({parts}) => {
    if (parts.length !== 1){
        throw "Boat parts length must be 1";
    }
    return true;
}

