export const EMPTY = "ship-item";
export const ADMIRAL = "ship-item ship-item-admiral";
export const KREUZER = "ship-item ship-item-kreuzer";
export const DESTROYER = "ship-item ship-item-destroyer";
export const BOAT = "ship-item ship-item-boat";

export const findClassName = ({selected}) => {
    if (!selected) {
        return EMPTY;
    }
    if (selected.indexOf("admiral") >= 0) {
        return ADMIRAL;
    }
    if (selected.indexOf("kreuzer") >= 0) {
        return KREUZER;
    }
    if (selected.indexOf("destroyer") >= 0) {
        return DESTROYER;
    }
    if (selected.indexOf("boat") >= 0) {
        return BOAT;
    }
    return EMPTY;
}
