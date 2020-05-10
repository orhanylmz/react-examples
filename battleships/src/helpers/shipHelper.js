export const generateAdmiral = () => {
    let type = "admiral";
    let name = type + "_" + 0;
    return {
        parts: [generateShipPart(type, name, 0), generateShipPart(type, name, 1), generateShipPart(type, name, 2), generateShipPart(type, name, 3)],
        shot: false,
    }
}

export const generateKreuzer = (i) => {
    let type = "kreuzer";
    let name = type + "_" + i;
    return {
        parts: [generateShipPart(type, name, 0), generateShipPart(type, name, 1), generateShipPart(type, name, 2)],
        shot: false,
    }
}

export const generateDestroyer = (i) => {
    let type = "destroyer";
    let name = type + "_" + i;
    return {
        parts: [generateShipPart(type, name, 0), generateShipPart(type, name, 1)],
        shot: false,
    }
}

export const generateBoat = (i) => {
    let type = "boat";
    let name = type + "_" + i;
    return {
        parts: [generateShipPart(type, name, 0)],
        shot: false,
    }
}

const generateShipPart = (type, name, part) => {
    return {
        i: null,
        j: null,
        type: type,
        currentType: type,
        name: name,
        id: name + "_" + part,
        part: part,
        shot: null
    }
}