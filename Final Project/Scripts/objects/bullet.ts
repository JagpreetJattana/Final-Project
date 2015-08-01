module objects {

    // Bullet Class
    export class Bullet extends objects.GameObject {
        constructor() {
            super("bullet");
            this.init();
            game.addChild(this);
        }

        // PUBLIC METHODS
        public init() {
            
           
            this.x = superman.x;
            this.y = superman.y;
        }

        update() {
            this.x += 10;
           
        }
    }
} 