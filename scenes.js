const LEVEL_ONE = {
    label: "level 1",
    type: 1,
    background: {src: "./maps/level1.png", width: 6000, height:1920, scale: 3},
    player: {x: 400, y: 1350, degree: Math.PI / 2},
    playerWeapon: {type: MissileType.MAVERICK},
    offRoad: [
        {x: 0, y: 0, endX: 480, endY: 405},
        {x: 480, y: 0, endX: 2620, endY: 350},
        {x: 2620, y: 0, endX: 2870, endY: 390},
        {x: 2870, y: 0, endX: 3210, endY: 110},
        {x: 3210, y: 0, endX: 3830, endY: 130},
        {x: 3830, y: 0, endX: 4060, endY: 150},
        {x: 4060, y: 0, endX: 4165, endY: 170},
        {x: 4165, y: 0, endX: 4225, endY: 195},
        {x: 4225, y: 0, endX: 4470, endY: 40},
        {x: 4470, y: 0, endX: 4635, endY: 85},
        {x: 4635, y: 0, endX: 6000, endY: 1445},
        {x: 4635, y: 0, endX: 6000, endY: 1445},
        {x: 3345, y: 1445, endX: 5700, endY: 1540},
        {x: 3400, y: 690, endX: 4635, endY: 755},
        {x: 3345, y: 755, endX: 4635, endY: 1445},
        {x: 3075, y: 270, endX: 3100, endY: 540},
        {x: 3110, y: 280, endX: 3845, endY: 395},
        {x: 3845, y: 300, endX: 4010, endY: 395},
        {x: 4010, y: 325, endX: 4105, endY: 395},
        {x: 4190, y: 325, endX: 4200, endY: 395},
        {x: 3475, y: 533, endX: 4400, endY: 536},
        {x: 0, y: 560, endX: 485, endY: 1920},
        {x: 485, y: 530, endX: 600, endY: 1920},
        {x: 600, y: 495, endX: 2515, endY: 1920},
        {x: 2515, y: 530, endX: 2640, endY: 1920},
        {x: 2640, y: 565, endX: 3065, endY: 1920},
        {x: 3065, y: 1710, endX: 3815, endY: 1920},
        {x: 3815, y: 1695, endX: 5700, endY: 1920},
        {x: 5700, y: 1790, endX: 6000, endY: 1920},
    ],
    finishLine: {x: 5820, y: 1445, endX: 6000, endY: 1790},
}