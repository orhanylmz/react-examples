export const createAdmiral = (i1, j1, i2, j2, i3, j3, i4, j4) => {
    return {
        parts: [createShipPart(i1, j1), createShipPart(i2, j2), createShipPart(i3, j3), createShipPart(i4, j4)],
        shot: false
    }
}

export const createKreuzer = (i1, j1, i2, j2, i3, j3) => {
    return {
        parts: [createShipPart(i1, j1), createShipPart(i2, j2), createShipPart(i3, j3)],
        shot: false
    }
}

export const createDestroyer = (i1, j1, i2, j2) => {
    return {
        parts: [createShipPart(i1, j1), createShipPart(i2, j2)],
        shot: false
    }
}

export const createBoat = (i1, j1) => {
    return {
        parts: [createShipPart(i1, j1)],
        shot: false
    }
}

export const shot = ({shots, shotOrder}, ship) => {
    const {parts, shot} = ship;
    var currentShotCount = 0;
    var totalShotCount = 0;
    const newParts = parts.map(part => {
        if (shots.find(shot => shot.i === part.i && shot.j === part.j)) {
            currentShotCount++;
            part = createShotPart(part, shotOrder);
        }
        if (part.shotOrder) {
            totalShotCount++;
        }
        return part;
    });

    return {
        currentShotCount: currentShotCount,
        parts: newParts,
        shot: totalShotCount === parts.length
    }
}

const createShotPart = (part, shotOrder) => {
    return {
        ...part,
        shotOrder: shotOrder
    }
}

const createShipPart = (i, j) => {
    return {
        i: i,
        j: j,
        shutOrder: null
    }
}