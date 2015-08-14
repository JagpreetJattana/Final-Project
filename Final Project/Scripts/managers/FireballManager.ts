module managers {
    // FIREBALL MANAGER CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++
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
            // create fireballs 
            fireball = new objects.Fireball();

            game.addChild(fireball);
            createjs.Sound.play("monsterFiring");

            fireball.init();
            
            this._fireball.push(fireball);
            

            
        } // end fire

        // FIREBALL DESTROY METHOD
        private _destroyFireball(fireball: objects.Fireball) {
            var len: number = this._fireball.length;

            // remove fireball from game and from arrow array
            for (var count = 0; count <= len; count++) {
                if (this._fireball[count] == fireball) {
                    this._fireball.splice(count, 1);
                    game.removeChild(fireball);

                }
               
            }
        } // end destroyFireball

        private _checkBounds(fireball: objects.Fireball) {
            // check to see if the fireball has left the top of the stage
            if (fireball.y < 0) {
                this._destroyFireball(fireball);
            }

            // check to see if the fireball has left the bottom of the stage
            if (fireball.y > 480) {
                this._destroyFireball(fireball);
            }

            // check to see if the fireball has left the left side of the stage
            if (fireball.x < 0) {
                this._destroyFireball(fireball);
            }

            // check to see if the fireball has left the right side of the stage
            if (fireball.x > 640) {
                this._destroyFireball(fireball);
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // UPDATE METHOD
        public update() {
            var len: number = this._fireball.length;
        

            for (var count = len - 1; count >= 0; count--) {
                fireball = this._fireball[count];
                // move current fireball up stage
                fireball.update();
                collision_other.check(doraemon, fireball);

                this._checkBounds(fireball);
            } 

            // fire fireball condition
            if ((config.FIRING_FIREBALL) && (this._fireballCount % 10 == 0)) {
                this._fire();
            }
            //increment fire count to limit number of arrows being fired
            this._fireballCount++;



        } // end update

        
    }
}  