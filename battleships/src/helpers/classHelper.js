export const EMPTY = "ship-item";
export const ADMIRAL = "ship-item ship-item-admiral";
export const KREUZER = "ship-item ship-item-kreuzer";
export const DESTROYER = "ship-item ship-item-destroyer";
export const BOAT = "ship-item ship-item-boat";

export const findClassName = ({admiral, kreuzer, destroyer, boat}) => {
    if (admiral) {
        return ADMIRAL;
    }
    if (kreuzer) {
        return KREUZER;
    }
    if (destroyer) {
        return DESTROYER;
    }
    if (boat) {
        return BOAT;
    }
    return EMPTY;
}
