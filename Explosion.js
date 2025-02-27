class Explosion {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.animator = new Animator(
            //ASSET_MANAGER.getAsset("./sprites/explosion-sheet.png"), 0, 0, 44, 48, 3, 0.1, 0, false, false
            ASSET_MANAGER.getAsset("./sprites/explosion-sheet1.png"),
            0, 2, 32, 35, 3, 0.1, 0, false, false    
        );
        this.removeFromWorld = false;
        this.timer = 0;
        this.duration = 0.3;   
        this.scale = 2;    //scaled up from 1.5 to make explosion bigger
        ASSET_MANAGER.playAsset("./audios/explosion.wav");
    }

    update() {
        this.timer += this.game.clockTick;
        if (this.timer > this.duration) {
            this.removeFromWorld = true;
        }
    }

    draw(ctx) {
        this.animator.drawFrame(
            this.game.clockTick, 
            ctx, 
            this.x - this.game.camera.x - (22 * this.scale),  // centers the explosion
            this.y - this.game.camera.y - (24 * this.scale),
            this.scale
        );
    }
}


