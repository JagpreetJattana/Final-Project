/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="config/config.ts" />
/// <reference path="managers/arrow.ts" />
/// <reference path="managers/collisionother.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="managers/fireballmanager.ts" />

/// <reference path="utility/utility.ts" />


/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/doraemon.ts" />
/// <reference path="objects/fireball.ts" />
/// <reference path="objects/finalmonster.ts" />

/// <reference path="objects/arrow.ts" />
/// <reference path="objects/ring.ts" />
/// <reference path="objects/bow.ts" />
/// <reference path="objects/mellon.ts" />



/// <reference path="objects/obstacle.ts" />
/// <reference path="objects/obstacle_down.ts" />

/// <reference path="objects/scoreboard.ts" />


/// <reference path="objects/colliding.ts" />
/// <reference path="constants.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/play_level_two.ts" />
/// <reference path="states/play_level_three.ts" />


/// <reference path="objects/button.ts" />

/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />



// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var game: createjs.Container;
var game: createjs.Container;







// Game Variables
var city: objects.City;
var colliding: objects.Colliding;
var doraemon: objects.Doraemon;
var finalMonster: objects.FinalMonster;
var arrow: objects.Arrow;
var fireball: objects.Fireball;
var doraemonArrow: objects.Doraemon;
var iron_bow: objects.Bow;
var watermellon: objects.WaterMellon;
var menulbl: createjs.Bitmap;
var gameoverlbl: createjs.Bitmap;
var ring: objects.Ring;

var obstacle1: objects.Obstacle;
var obstacle_down: objects.Obstacle_down;
var scoreboard: objects.ScoreBoard;
var play: states.Play;
var menu: states.Menu;
var play_level_two: states.Play_Level_Two;
var play_level_three: states.Play_Level_Three;

var gameover: states.Gameover;
var currentstate;
//Game managers
var assets: managers.Assets;
var arrowManager: managers.ArrowManager;
var fireballManager: managers.FireballManager;
var collision: managers.Collision;
var collision_other: managers.Collision_other;

//game buttons
var startbutton: objects.Button;
var playagainbutton: objects.Button;


// Preloader Function
function preload() {
    assets = new managers.Assets();
    arrowManager = new managers.ArrowManager();
    fireballManager = new managers.FireballManager();
   
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 
    optimizeForMobile();

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    ///updating current state
    currentstate.update();
  
  

    stats.end(); // end measuring
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}


// Our Main Game Function
function main() {
  
 
    menu = new states.Menu();
    //currentstate = menu;
  // play = new states.Play();
  //  currentstate = play;
   // play_level_two = new states.Play_Level_Two();
   // currentstate = play_level_two;
    play_level_three = new states.Play_Level_Three();
    currentstate = play_level_three;

}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
           // currentstate = menu;
            //currentstate = play;
           // currentstate = play_level_two;


            break;

        case constants.PLAY_STATE:
            // instantiate play screen
           // play = new states.Play();
           // currentstate = play;
         //   play_level_two = new states.Play_Level_Two();
           // currentstate = play_level_two;

            break;

        case constants.PLAY_LEVEL_TWO:
            // instantiate play screen
         //   play_level_two = new states.Play_Level_Two();
         //   currentstate = play_level_two;
          //  play = new states.Play();
           // currentstate = play;
           // play_level_two = new states.Play_Level_Two();
            //currentstate = play_level_two;

            break;

        case constants.PLAY_LEVEL_THREE:
            // instantiate play screen
          //  play_level_three = new states.Play_Level_Three();
          //  currentstate = play_level_three;
            //play = new states.Play();
          //  play_level_two = new states.Play_Level_Two();
          //  currentstate = play_level_two;

            break;

        case constants.GAME_OVER_STATE:
            gameover = new states.Gameover();
            //currentstate = gameover;
            //currentstate = play;
           // play_level_two = new states.Play_Level_Two();
           // currentstate = play_level_two;
            break;
    }
}