export const ADMIRAL = "admiral";
export const KREUZER = "kreuzer";
export const DESTROYER = "destroyer";
export const BOAT = "boat";
export const SHOT = "shot";
export const MISS = "miss";
export const LOADED = "loaded";

export const tempShips = () => {
    return {
        admiral: [tempAdmiral()],
        kreuzer: [
            tempKreuzer(0),
            tempKreuzer(1)
        ],
        destroyer: [
            tempDestroyer(0),
            tempDestroyer(1),
            tempDestroyer(2)
        ],
        boat: [
            tempBoat(0),
            tempBoat(1),
            tempBoat(2),
            tempBoat(3)
        ]
    }
}

const tempAdmiral = () => {
    return {
        parts: [part(ADMIRAL, 0, 0), part(ADMIRAL, 0, 1), part(ADMIRAL, 0, 2), part(ADMIRAL, 0, 3)],
        shot: false,
    }
}

const tempKreuzer = (index) => {
    return {
        parts: [part(KREUZER, index, 0), part(KREUZER, index, 1), part(KREUZER, index, 2)],
        shot: false,
    }
}

const tempDestroyer = (index) => {
    return {
        parts: [part(DESTROYER, index, 0), part(DESTROYER, index, 1)],
        shot: false,
    }
}

const tempBoat = (index) => {
    return {
        parts: [part(BOAT, index, 0)],
        shot: false,
    }
}

/**
 *
 * @param i
 * @param j
 * @param type admiral or kreuzer or ...
 * @param index 0, 1 for kreuzer, 0,1,2 for destroyer
 * @param part 0, 1...
 * @returns {{part: *, name: *, i: *, j: *, state: *, type: *, shot: number}}
 */
const part = (type, index, part) => ({
    id: Math.random(),
    content: {
        shot: 0,
        type: type,
        index: index,
        part: part,
        state: type
    }
})