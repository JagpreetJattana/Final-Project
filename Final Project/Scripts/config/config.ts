module config {

    // font constants
    export const FONT_FAMILY: string = "Consolas";
    export const FONT_SMALL: string = "20px";
    export const FONT_MEDIUM: string = "40px";
    export const FONT_LARGE: string = "60px";
    export const FONT_EXTRA_LARGE: string = "80px";

    // colour constants
    export const WHITE: string = "#FFFFFF";
    export const BLACK: string = "#000000";
    export const YELLOW: string = "#FFFF00";
    export const RED: string = "#FF0000";
    export const GREEN: string = "#00FF00";
    export const BLUE: string = "#0000FF";


    // state constants
    export const MENU_STATE: number = 0;
    export const INSTRUCTION_STATE: number = 1;
    export const PLAY_STATE: number = 2;
    export const GAME_OVER_STATE: number = 3;

    // key constants
    export var KEY_LEFT: number = 37;
    export var KEY_RIGHT: number = 39;
    export var KEY_UP: number = 38;
    export var KEY_DOWN: number = 40;
    export var KEY_SPACE: number = 32;
    export var KEY_A: number = 65;
    export var KEY_S: number = 83;
    export var KEY_D: number = 68;
    export var KEY_W: number = 87;
    export var KEY_DOWN_EVENT = 0x0001; //Key down flag
    export var KEY_UP_EVENT = 0x0002; //Key up flag

    // control constants
    export var FORWARD: boolean = false;
    export var REVERSE: boolean = false;
    export var TURN_LEFT: boolean = false;
    export var TURN_RIGHT: boolean = false;
    export var JUMP: boolean = false;
    export var FIRING: boolean = false;
    export var RINGSTRIKE: boolean = false;
    export var HAVING_BOW: boolean = false;
    export var PLAY_MELLON_ANIMATION: boolean = false;
    export var MELLON_IS_THERE: boolean = true;
    export var ARROW_FIRED: boolean = false;
    export var MOVE_UP: boolean = false;
    export var MOVE_DOWN: boolean = false;
    export var FIRING_FIREBALL: boolean = false;
    export var ACTIVE_STATE: number = 99;
    export var FRAME_COUNTER: number = 0;
    export var MONSTER_IS_THERE: boolean = true;
    export var MELLON_DIEING: boolean = false;
    export var DORAEMON_DIEING: boolean = false;
    export var HAVING_CONTROLS: boolean = true;

    // avatar constants
    export var PLAYER_FORWARD: number = 5;
    export var PLAYER_REVERSE: number = 2;
    export var PLAYER_TURN_RATE: number = 2;

    // bullet constants
    export const BULLET_SPEED: number = 10;

    
} 