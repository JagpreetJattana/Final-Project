module managers {
    // BULLET MANAGER CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class FireballManager {
        // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++
        private _fireball = [];
        private _fireballCount: number = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++

        // ARROW FIRE METHOD
        public _fire() {
            // create two arrow on either side of  plane
            fireball = new objects.Fireball();

            game.addChild(fireball);

            fireball.init();
            
            this._fireball.push(fireball);
            

            // Play Bullet Sound
            // createjs.Sound.play("bullet");
        } // end fire

        // ARROW DESTROY METHOD
        private _destroyFireball(fireball: objects.Fireball) {
            var len: number = this._fireball.length;

            // remove arrow from game and from arrow array
            for (var count = 0; count <= len; count++) {
                if (this._fireball[count] == fireball) {
                    this._fireball.splice(count, 1);
                    game.removeChild(fireball);

                }
               
            }
        } // end destroyArrow

        private _checkBounds(fireball: objects.Fireball) {
            // check to see if the arrow has left the top of the stage
            if (fireball.y < 0) {
                this._destroyFireball(fireball);
            }

            // check to see if the arrow has left the bottom of the stage
            if (fireball.y > 480) {
                this._destroyFireball(fireball);
            }

            // check to see if the arrow has left the left side of the stage
            if (fireball.x < 0) {
                this._destroyFireball(fireball);
            }

            // check to see if the arrow has left the right side of the stage
            if (fireball.x > 640) {
                this._destroyFireball(fireball);
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // UPDATE METHOD
        public update() {
            var len: number = this._fireball.length;
            //  var arrow: objects.Arrow;

            for (var count = len - 1; count >= 0; count--) {
                fireball = this._fireball[count];
                // move current arrow up stage
                fireball.update();
                collision_other.check(doraemon, fireball);

                this._checkBounds(fireball);
            } 

            // fire arrow if mouse button is clicked or game container is tapped
            if ((config.FIRING_FIREBALL) && (this._fireballCount % 10 == 0)) {
                this._fire();
            }
            //increment arrow count to limit number of arrows being fired
            this._fireballCount++;



        } // end update

        
    }
}  