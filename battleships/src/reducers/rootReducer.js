import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";

import player1 from "./player1";
import player2 from "./player2";

export default combineReducers({
    player1, player2, form: formReducer
})