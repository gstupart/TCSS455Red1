
// TO BE CONTINUED

class MissileWeapon extends Weapon {
    constructor(game, owner, missileType = MissileType.MAVERICK) {
        super(game, owner);
        this.setMissileType(missileType);
        
        // Sprite sheet configuration
        this.frameWidth = 12;    // Width of each frame
        this.frameHeight = 36;   // Height of each frame
        this.frameCount = 7;     // Total number of frames
        this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/missile.png");
    }

    setMissileType(missileType) {
        this.missileType = missileType;
        this.fireRate = missileType.fireRate;
        this.damage = missileType.damage;
        this.projectileSpeed = missileType.speed;
    }

    draw(ctx) {
        if (this.isActive) {
            // Draw the specific missile type based on its frame index
            ctx.save();
            ctx.translate(this.owner.x, this.owner.y);
            ctx.rotate(this.owner.rotation); // Align with car's rotation
            
            ctx.drawImage(
                this.spriteSheet,
                this.missileType.frameIndex * this.frameWidth, 0,  // Source x, y
                this.frameWidth, this.frameHeight,                 // Source width, height
                -this.frameWidth / 2, -this.frameHeight / 2,      // Destination x, y
                this.frameWidth, this.frameHeight                  // Destination width, height
            );
            
            ctx.restore();
        }
    }

    createProjectile(targetX, targetY) {
        const angle = Math.atan2(targetY - this.owner.y, targetX - this.owner.x);
        return new MissileProjectile(
            this.game,
            this.owner.x,
            this.owner.y,
            angle,
            this.damage,
            this.missileType
        );
    }
}





