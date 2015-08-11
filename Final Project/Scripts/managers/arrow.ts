 module managers {
    // BULLET MANAGER CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class ArrowManager {
        // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++
        private _arrows = [];
        private _arrowCount: number = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++

        // ARROW FIRE METHOD
        public _fire() {
            // create two arrow on either side of  plane
            arrow = new objects.Arrow();

            game.addChild(arrow);
            createjs.Sound.play("arrowSound");

            arrow.init();
            config.ARROW_FIRED = true;
            this._arrows.push(arrow);
            

            // Play Bullet Sound
           // createjs.Sound.play("bullet");
        } // end fire

        // ARROW DESTROY METHOD
        private _destroyArrow(arrow: objects.Arrow) {
            var len: number = this._arrows.length;

            // remove arrow from game and from arrow array
            for (var count = 0; count <= len; count++) {
                if (this._arrows[count] == arrow) {
                    this._arrows.splice(count, 1);
                    game.removeChild(arrow);
                   
                }
                config.ARROW_FIRED = false;
            }
        } // end destroyArrow

        private _checkBounds(arrow: objects.Arrow) {
            // check to see if the arrow has left the top of the stage
            if (arrow.y < 0) {
                this._destroyArrow(arrow);
            }

             // check to see if the arrow has left the bottom of the stage
            if (arrow.y > 480) {
                this._destroyArrow(arrow);
            }

            // check to see if the arrow has left the left side of the stage
            if (arrow.x < 0) {
                this._destroyArrow(arrow);
            }

            // check to see if the arrow has left the right side of the stage
            if (arrow.x > 640) {
                this._destroyArrow(arrow);
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // UPDATE METHOD
       public update() {
            var len: number = this._arrows.length;
          //  var arrow: objects.Arrow;

            for (var count = len - 1; count >= 0; count--) {
                arrow = this._arrows[count];
                // move current arrow up stage
                arrow.update();
                if (config.ACTIVE_STATE == constants.PLAY_LEVEL_TWO){
                    collision_other.check(watermellon, arrow);
                }
               else if (config.ACTIVE_STATE == constants.PLAY_LEVEL_THREE){
                    collision_other.check(final_Monster, arrow);
                }

                this._checkBounds(arrow);
            } 

            // fire arrow if mouse button is clicked or game container is tapped
            if ((config.FIRING) && (this._arrowCount % 10 == 0)&&(config.HAVING_BOW)) {
                    this._fire();
            }
            //increment arrow count to limit number of arrows being fired
            this._arrowCount++;

           
           
        } // end update

        
    }
}  