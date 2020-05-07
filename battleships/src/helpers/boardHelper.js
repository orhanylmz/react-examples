export const initialBoard = () =>  [
    [initialValue(0,0), initialValue(1,0), initialValue(2,0), initialValue(3,0), initialValue(4,0), initialValue(5,0), initialValue(6,0), initialValue(7,0), initialValue(8,0), initialValue(9,0)],
    [initialValue(0,1), initialValue(1,1), initialValue(2,1), initialValue(3,1), initialValue(4,1), initialValue(5,1), initialValue(6,1), initialValue(7,1), initialValue(8,1), initialValue(9,1)],
    [initialValue(0,2), initialValue(1,2), initialValue(2,2), initialValue(3,2), initialValue(4,2), initialValue(5,2), initialValue(6,2), initialValue(7,2), initialValue(8,2), initialValue(9,2)],
    [initialValue(0,3), initialValue(1,3), initialValue(2,3), initialValue(3,3), initialValue(4,3), initialValue(5,3), initialValue(6,3), initialValue(7,3), initialValue(8,3), initialValue(9,3)],
    [initialValue(0,4), initialValue(1,4), initialValue(2,4), initialValue(3,4), initialValue(4,4), initialValue(5,4), initialValue(6,4), initialValue(7,4), initialValue(8,4), initialValue(9,4)],
    [initialValue(0,5), initialValue(1,5), initialValue(2,5), initialValue(3,5), initialValue(4,5), initialValue(5,5), initialValue(6,5), initialValue(7,5), initialValue(8,5), initialValue(9,5)],
    [initialValue(0,6), initialValue(1,6), initialValue(2,6), initialValue(3,6), initialValue(4,6), initialValue(5,6), initialValue(6,6), initialValue(7,6), initialValue(8,6), initialValue(9,6)],
    [initialValue(0,7), initialValue(1,7), initialValue(2,7), initialValue(3,7), initialValue(4,7), initialValue(5,7), initialValue(6,7), initialValue(7,7), initialValue(8,7), initialValue(9,7)],
    [initialValue(0,8), initialValue(1,8), initialValue(2,8), initialValue(3,8), initialValue(4,8), initialValue(5,8), initialValue(6,8), initialValue(7,8), initialValue(8,8), initialValue(9,8)],
    [initialValue(0,9), initialValue(1,9), initialValue(2,9), initialValue(3,9), initialValue(4,9), initialValue(5,9), initialValue(6,9), initialValue(7,9), initialValue(8,9), initialValue(9,9)]];


const initialValue = (i, j) => {
    return {
        i: i,
        j: j,
        moveOrder: null
    };
}

