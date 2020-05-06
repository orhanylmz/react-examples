import {combineReducers} from "redux";
import board from "./board";
import settings from "./settings";

export default combineReducers({
    board, settings
});