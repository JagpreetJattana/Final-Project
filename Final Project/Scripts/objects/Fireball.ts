module objects {

    // Fireball Class
    export class Fireball extends objects.GameObject {
        constructor() {
            super("Fireball");
            this.init();
            this.name = "Fireball";
            // game.addChild(this);
        }

        // PUBLIC METHODS
        public init() {

            this.x = final_Monster.x;
            this.y = final_Monster.y;
        }

        update() {
            this.x -= 6;

        }
    }
}   