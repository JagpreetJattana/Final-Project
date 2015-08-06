module objects {
    // fireball Class ++++++++++++++++++++++++++++++++++++++
    export class Obstacle_down extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "obstacle_down";

            this.soundString = "fireballs";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fireball has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = obstacle1.y+400; // start fireballs at random location
            this.x = 660; // start fireball off stage
            
          
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= 3; // moves fireball up and down the stage
            // drifts fireballs left
            this.checkBounds();
        }
    }
}   