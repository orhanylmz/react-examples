import {createPanel} from "./panelHelper";

import {ADMIRAL, KREUZER, DESTROYER, BOAT} from "./shipHelper";

export const mapPanelToShips = (panel) => {
    const contents = panel.flat().filter(item => item.content !== null);
    if (contents.length < 20) {
        return;
    }

    const admiral = generateShip(contents.filter(item => item.content.type === ADMIRAL), 4);
    const kreuzer1 = generateShip(contents.filter(item => item.content.type === KREUZER && item.content.index === 0), 3);
    const kreuzer2 = generateShip(contents.filter(item => item.content.type === KREUZER && item.content.index === 1), 3);
    const destroyer1 = generateShip(contents.filter(item => item.content.type === DESTROYER && item.content.index === 0), 2);
    const destroyer2 = generateShip(contents.filter(item => item.content.type === DESTROYER && item.content.index === 1), 2);
    const destroyer3 = generateShip(contents.filter(item => item.content.type === DESTROYER && item.content.index === 2), 2);
    const boat1 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 0), 1);
    const boat2 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 1), 1);
    const boat3 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 2), 1);
    const boat4 = generateShip(contents.filter(item => item.content.type === BOAT && item.content.index === 3), 1);
    const miss = generateMiss(contents.filter(item => item.content.type !== BOAT && item.content.type !== DESTROYER && item.content.type !== KREUZER && item.content.type !== ADMIRAL && item.content.shot > 0));

    return {
        admiral: [admiral],
        kreuzer: [kreuzer1, kreuzer2],
        destroyer: [destroyer1, destroyer2, destroyer3],
        boat: [boat1, boat2, boat3, boat4],
        miss: [miss]
    }
}

export const validateShips = (ships, panel) => {
    if (!ships) {
        return;
    }
    const {admiral, kreuzer, destroyer, boat} = ships;

    if (!validateAdmiral(admiral[0])) {
        return "admiral";
    }

    if (!validateKreuzer(kreuzer[0])) {
        return "kreuzer1";
    }

    if (!validateKreuzer(kreuzer[1])) {
        return "kreuzer2";
    }

    if (!validateDestroyer(destroyer[0])) {
        return "destroyer1";
    }

    if (!validateDestroyer(destroyer[1])) {
        return "destroyer2";
    }

    if (!validateDestroyer(destroyer[2])) {
        return "destroyer3";
    }

    if (!validateBoat(boat[0])) {
        return "boat1";
    }

    if (!validateBoat(boat[1])) {
        return "boat2";
    }

    if (!validateBoat(boat[2])) {
        return "boat3";
    }

    if (!validateBoat(boat[3])) {
        return "boat4";
    }

    const allParts = admiral[0].parts
        .concat((kreuzer[0].parts)).concat((kreuzer[1].parts))
        .concat((destroyer[0].parts)).concat((destroyer[1].parts)).concat((destroyer[2].parts))
        .concat((boat[0].parts)).concat((boat[1].parts)).concat((boat[2].parts)).concat((boat[3].parts));
    console.log(allParts);

    const errorParts = allParts.filter(part => !validatePart(part, panel));
    console.log(errorParts);
    return errorParts.length <= 0;
}

const validatePart = (part, panel) => {
    if (part.j > 0) {
        const upPart = panel[part.j - 1][part.i];
        if (upPart.content && (upPart.content.type !== part.type || upPart.content.index !== part.index)) {
            return false;
        }
    }

    if (part.j < 9) {
        const downPart = panel[part.j + 1][part.i];
        if (downPart.content && (downPart.content.type !== part.type || downPart.content.index !== part.index)) {
            return false;
        }
    }

    if (part.i > 0) {
        const leftPart = panel[part.j][part.i - 1];
        if (leftPart.content && (leftPart.content.type !== part.type || leftPart.content.index !== part.index)) {
            return false;
        }
    }

    if (part.i < 9) {
        const rightPart = panel[part.j][part.i + 1];
        if (rightPart.content && (rightPart.content.type !== part.type || rightPart.content.index !== part.index)) {
            return false;
        }
    }
    return true;
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

export const generateShip = (ship, partSize) => {
    if (!ship) {
        return;
    }

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

export const validateAdmiral = (ship) => {
    if (!ship || !ship.parts || ship.parts.length !== 4) {
        return false;
    }

    const ii = ship.parts.map(part => part.i);
    const jj = ship.parts.map(part => part.j);

    const horizontalUp = jj[1] === jj[2] && jj[2] === jj[3]; // 0 a bak
    const horizontalDown = jj[0] === jj[1] && jj[1] === jj[2]; // 3 e bak
    const verticalRight = ii[0] === ii[1] && ii[1] === ii[3]; // 2 ye bak
    const verticalLeft = ii[0] === ii[2] && ii[2] === ii[3]; // 1 e bak

    if (!horizontalUp && !horizontalDown && !verticalRight && !verticalLeft) {
        return false;
    }

    if (horizontalUp) {
        return ii[0] === ii[2] && jj[0] === jj[2] - 1;
    }

    if (horizontalDown) {
        return ii[1] === ii[3] && jj[1] === jj[3] - 1;
    }

    if (verticalRight || verticalRight) {
        return jj[1] === jj[2] && ii[1] === ii[2] - 1;
    }

    return false;
}

export const validateKreuzer = (ship) => {
    if (!ship || !ship.parts || ship.parts.length !== 3) {
        return false;
    }
    const ii = ship.parts.map(part => part.i);
    const jj = ship.parts.map(part => part.j);

    const horizontal = jj[0] === jj[1] && jj[1] === jj[2]; // yatay
    const vertical = ii[0] === ii[1] && ii[1] === ii[2]; // dikey

    if (!horizontal && !vertical) {
        return false;
    }

    if (horizontal) {
        return ii[1] === ii[0] + 1 && ii[2] === ii[1] + 1;
    }
    if (vertical) {
        return jj[1] === jj[0] + 1 && jj[2] === jj[1] + 1;
    }

    return false;
}

export const validateDestroyer = (ship) => {
    if (!ship || !ship.parts || ship.parts.length !== 2) {
        return false;
    }
    const ii = ship.parts.map(part => part.i);
    const jj = ship.parts.map(part => part.j);

    const horizontal = jj[0] === jj[1]; // yatay
    const vertical = ii[0] === ii[1]; // dikey

    if (!horizontal && !vertical) {
        return false;
    }

    if (horizontal) {
        return ii[1] === ii[0] + 1;
    }
    if (vertical) {
        return jj[1] === jj[0] + 1;
    }

    return false;
}

export const validateBoat = (ship) => {
    if (ship && ship.parts && ship.parts.length === 1) {
        return true;
    }
    return false;
}

