export const createAdmiral = ({part0, part1, part2, part3}) => {
    return {
        parts: [createShipPart(part0.i, part0.j), createShipPart(part1.i, part1.j), createShipPart(part2.i, part2.j), createShipPart(part3.i, part3.j)],
        shot: false
    }
}

export const createKreuzer = ({part0, part1, part2}) => {
    return {
        parts: [createShipPart(part0.i, part0.j), createShipPart(part1.i, part1.j), createShipPart(part2.i, part2.j)],
        shot: false
    }
}

export const createDestroyer = ({part0, part1}) => {
    return {
        parts: [createShipPart(part0.i, part0.j), createShipPart(part1.i, part1.j)],
        shot: false
    }
}

export const createBoat = ({part0}) => {
    return {
        parts: [createShipPart(part0.i, part0.j)],
        shot: false
    }
}

export const shot = ({shots, shotOrder}, {parts}) => {
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