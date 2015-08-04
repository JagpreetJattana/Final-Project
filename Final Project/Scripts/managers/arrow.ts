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

        // BULLET FIRE METHOD
        public _fire() {
            // create two bullets on either side of  plane
            var arrow: objects.Arrow = new objects.Arrow();

            game.addChild(arrow);
            arrow.init();
            this._arrows.push(arrow);
            

            // Play Bullet Sound
           // createjs.Sound.play("bullet");
        } // end fire

        // BULLET DESTROY METHOD
        private _destroyArrow(bullet: objects.Arrow) {
            var len: number = this._arrows.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this._arrows[count] == bullet) {
                    this._arrows.splice(count, 1);
                    game.removeChild(bullet);
                }
            }
        } // end destroyBullet

        private _checkBounds(arrow: objects.Arrow) {
            // check to see if the bullet has left the top of the stage
            if (arrow.y < 0) {
                this._destroyArrow(arrow);
            }

             // check to see if the bullet has left the bottom of the stage
            if (arrow.y > 480) {
                this._destroyArrow(arrow);
            }

            // check to see if the bullet has left the left side of the stage
            if (arrow.x < 0) {
                this._destroyArrow(arrow);
            }

            // check to see if the bullet has left the right side of the stage
            if (arrow.x > 640) {
                this._destroyArrow(arrow);
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // UPDATE METHOD
       public update() {
            var len: number = this._arrows.length;
            var arrow: objects.Arrow;

            for (var count = len - 1; count >= 0; count--) {
                arrow = this._arrows[count];
                // move current bullet up stage
                arrow.update();

                this._checkBounds(arrow);
            } 

            // fire bullet if mouse button is clicked or game container is tapped
            if ((config.FIRING) && (this._arrowCount % 10 == 0)) {
                    this._fire();
            }
            //increment bullet count to limit number of bullets being fired
            this._arrowCount++;
        } // end update

        
    }
}  