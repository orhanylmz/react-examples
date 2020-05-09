export const EMPTY = "ship-item";
export const ADMIRAL = "ship-item ship-item-admiral";
export const KREUZER = "ship-item ship-item-kreuzer";
export const DESTROYER = "ship-item ship-item-destroyer";
export const BOAT = "ship-item ship-item-boat";

export const findClassName = (name) => {
    if (!name) {
        return EMPTY;
    }
    if (name.indexOf("admiral") >= 0) {
        return ADMIRAL;
    }
    if (name.indexOf("kreuzer") >= 0) {
        return KREUZER;
    }
    if (name.indexOf("destroyer") >= 0) {
        return DESTROYER;
    }
    if (name.indexOf("boat") >= 0) {
        return BOAT;
    }
    return EMPTY;
}
