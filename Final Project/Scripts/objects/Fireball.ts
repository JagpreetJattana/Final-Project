module objects {

    // Arrow Class
    export class Fireball extends objects.GameObject {
        constructor() {
            super("Fireball");
            this.init();
            this.name = "Fireball";
            // game.addChild(this);
        }

        // PUBLIC METHODS
        public init() {

            this.x = finalMonster.x;
            this.y = finalMonster.y;
        }

        update() {
            this.x -= 6;

        }
    }
}   