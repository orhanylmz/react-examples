export const LOAD_GAME = 'LOAD_GAME';
export const ON_CLICK = 'ON_CLICK';

export function onClick(gameBoard, button, rightClicked) {
    return dispatch => {
        dispatch({
            type: ON_CLICK,
            payload: {
                gameBoard: clickButton(gameBoard, button.i, button.j, rightClicked)
            }
        })
    }
}

export function loadBoard({x, y, bombCount}) {
    return dispatch => {
        dispatch({
            type: LOAD_GAME,
            payload: {
                bombCount: bombCount,
                gameBoard: createGame(x, y, bombCount)
            }
        })
    }
}

function createGame(x, y, bombCount) {
    const tempBoard = [];
    for (var j = 0; j < y; j++) {
        tempBoard[j] = [];
        for (var i = 0; i < x; i++) {
            tempBoard[j][i] = false;
        }
    }

    for (var i = 0; i < bombCount; i++) {
        var yy = Math.floor(Math.random() * y);
        var xx = Math.floor(Math.random() * x);
        if (tempBoard[yy][xx]) {
            --i;
            continue;
        }
        tempBoard[yy][xx] = true;
    }

    const board = [];
    for (var j = 0; j < y; j++) {
        board[j] = [];
        for (var i = 0; i < x; i++) {
            if (!tempBoard[j][i]) {
                board[j][i] = {
                    i: i,
                    j: j,
                    bombCount: nearBombCount(i, j, tempBoard),
                    clicked: false,
                    rightClicked: false
                };
                continue;
            }
            board[j][i] = {
                i: i,
                j: j,
                bombCount: -1,
                clicked: false,
                rightClicked: false            };
        }
    }

    return board;
}

function nearBombCount(i, j, tempBoard) {
    var bombCount = 0;

    var right = i < tempBoard[0].length -1;
    var left = i > 0;
    var up = j > 0;
    var down = j < tempBoard.length -1;

    if (right && tempBoard[j][i+1]){
        bombCount++;
    }
    if (left && tempBoard[j][i-1]){
        bombCount++;
    }
    if (up && tempBoard[j-1][i]){
        bombCount++;
    }
    if (down && tempBoard[j+1][i]){
        bombCount++;
    }
    if (left && up && tempBoard[j-1][i-1]){
        bombCount++;
    }
    if (left && down && tempBoard[j+1][i-1]){
        bombCount++;
    }
    if (right && up && tempBoard[j-1][i+1]){
        bombCount++;
    }
    if (right && down && tempBoard[j+1][i+1]){
        bombCount++;
    }
    return bombCount;
}

function clickButton(gameBoard, i, j, rightClicked) {
    if(i<0 || i>= gameBoard[0].length || j<0 || j>=gameBoard.length) {
        return gameBoard;
    }

    if(gameBoard[j][i].clicked){
        return gameBoard;
    }

    if (rightClicked){
        gameBoard[j][i] = {
            ...gameBoard[j][i],
            rightClicked: true
        };
        return gameBoard;
    }

    gameBoard[j][i] = {
        ...gameBoard[j][i],
        clicked: true
    };
    if (gameBoard[j][i].bombCount === -1) {
        for (var jj=0;jj<gameBoard.length;++jj) {
            for (var ii = 0; ii < gameBoard[0].length; ++ii) {
                gameBoard[jj][ii] = {
                    ...gameBoard[jj][ii],
                    clicked: true
                };
            }
        }
        return gameBoard;
    }
    if (gameBoard[j][i].bombCount !== 0) {
        return gameBoard;
    }
    gameBoard = clickButton(gameBoard, i-1, j-1, rightClicked);
    gameBoard = clickButton(gameBoard, i, j-1, rightClicked);
    gameBoard = clickButton(gameBoard, i+1, j-1, rightClicked);
    gameBoard = clickButton(gameBoard, i-1, j, rightClicked);
    gameBoard = clickButton(gameBoard, i+1, j, rightClicked);
    gameBoard = clickButton(gameBoard, i-1, j+1, rightClicked);
    gameBoard = clickButton(gameBoard, i, j+1, rightClicked);
    gameBoard = clickButton(gameBoard, i+1, j+1, rightClicked);
    /*

     */
    return gameBoard;
}



