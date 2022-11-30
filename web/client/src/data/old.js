// data scraped from the t_main.html template fragment. Currently used only for reference

import { startCase } from 'lodash'
export const door_colors = ['red', 'green', 'yellow', 'gray', 'wave', 'spazer', 'plasma', 'ice']

const ammo = ['missile', 'super-missile', 'power-bomb']
const energy = ['energy', 'reserve-tank']
const beams = ['charge-beam', 'ice-beam', 'wave-beam', 'spazer-beam', 'plasma-beam']
const suits = ['varia', 'gravity']
const items = [
  'morph-ball',
  'bomb',
  'spring-ball',
  'hi-jump-boots',
  'space-jump',
  'speed-booster',
  'grappling-beam',
  'x-ray',
]

export const items_by_group = { ammo, energy, beams, suits, items }
export const varia_item_groups = Object.entries(items_by_group).map(([slug, items]) => ({
  slug,
  name: startCase(slug),
  items: items.map((item_slug) => {
    const name = startCase(
      item_slug.replace(/(-beam|-boots|-missile)/, '').replace('x-ray', 'x-ray-scope'),
    )
    const src = `/solver/static/images/tracker/inventory/${name.replace(' ', '')}`
    return { name, item_slug, src }
  }),
}))

export const access_points = [
  'lowerMushroomsLeft',
  'moatRight',
  'greenPiratesShaftBottomRight',
  'keyhunterRoomBottom',
  'morphBallRoomLeft',
  'greenBrinstarElevator',
  'greenHillZoneTopRight',
  'noobBridgeRight',
  'westOceanLeft',
  'crabMazeLeft',
  'lavaDiveRight',
  'threeMuskateersRoomLeft',
  'warehouseZeelaRoomLeft',
  'warehouseEntranceLeft',
  'warehouseEntranceRight',
  'singleChamberTopRight',
  'kronicBoostRoomBottomLeft',
  'mainStreetBottom',
  'crabHoleBottomLeft',
  'leCoudeRight',
  'redFishRoomLeft',
  'redTowerTopLeft',
  'crabShaftRight',
  'aqueductTopLeft',
  'caterpillarRoomTopRight',
  'redBrinstarElevator',
  'eastTunnelRight',
  'eastTunnelTopRight',
  'glassTunnelTop',
  'goldenFour',
  'crocomireSpeedwayBottom',
  'crocomireRoomTop',
]

export const sand_doors = [
  'westSandHallLeft',
  'belowBotwoonEnergyTankRight',
  'westSandHallTunnelRight',
]

export const inter_area_access_points = [
  'wreckedShipMain',
  'wreckedShipBack',
  'lNEntrance',
  'lNAboveGT',
  'screwAttackBottom',
  'firefleas',
  'firefleasTop',
  'ridleyZone',
  'preciousRoomTop',
  'aqueduct',
  'aqueductBottom',
  'beach',
  'crabShaftLeft',
  'leftSandpit',
  'oasisBottom',
  'postBotwoon',
  'colosseumTopRight',
  'rightSandpit',
  'toiletTop',
  'landingSite',
  'ceres',
  'blueBrinstarElevatorBottom',
  'bigPink',
  'etecoonsSupers',
  'etecoonsBottom',
  'bubbleMountain',
  'bubbleMountainTop',
  'bubbleMountainBottom',
  'draygonRoomBottom',
  'wateringHole',
  'wateringHoleBottom',
  'gauntletTop',
  'businessCenter',
  'mamaTurtle',
  'cathedral',
  'moatLeft',
  'bowling',
  'wasteland',
  'grappleEscape',
  'redFishRoomBottom',
]

export const boss_doors = [
  'phantoonRoomOut',
  'phantoonRoomIn',
  'ridleyRoomOut',
  'ridleyRoomIn',
  'kraidRoomOut',
  'kraidRoomIn',
  'draygonRoomOut',
  'draygonRoomIn',
]

export const escape_doors = [
  'tourianEscapeRoom4TopRight',
  'climbBottomLeft',
  'greenBrinstarMainShaftTopLeft',
  'basementLeft',
  'businessCenterMidLeft',
  'crabHoleBottomRight',
]

export const item_locs = [
  'EnergyTankGauntlet',
  'Bomb',
  'EnergyTankTerminator',
  'ReserveTankBrinstar',
  'ChargeBeam',
  'MorphingBall',
  'EnergyTankBrinstarCeiling',
  'EnergyTankEtecoons',
  'EnergyTankWaterway',
  'EnergyTankBrinstarGate',
  'XRayScope',
  'Spazer',
  'EnergyTankKraid',
  'VariaSuit',
  'IceBeam',
  'EnergyTankCrocomire',
  'HiJumpBoots',
  'GrappleBeam',
  'ReserveTankNorfair',
  'SpeedBooster',
  'WaveBeam',
  'EnergyTankRidley',
  'ScrewAttack',
  'EnergyTankFirefleas',
  'ReserveTankWreckedShip',
  'EnergyTankWreckedShip',
  'RightSuperWreckedShip',
  'GravitySuit',
  'EnergyTankMamaturtle',
  'PlasmaBeam',
  'ReserveTankMaridia',
  'SpringBall',
  'EnergyTankBotwoon',
  'SpaceJump',
  'PowerBombCrateriasurface',
  'MissileoutsideWreckedShipbottom',
  'MissileoutsideWreckedShiptop',
  'MissileoutsideWreckedShipmiddle',
  'MissileCrateriamoat',
  'MissileCrateriabottom',
  'MissileCrateriagauntletright',
  'MissileCrateriagauntletleft',
  'SuperMissileCrateria',
  'MissileCrateriamiddle',
  'PowerBombgreenBrinstarbottom',
  'SuperMissilepinkBrinstar',
  'MissilegreenBrinstarbelowsupermissile',
  'SuperMissilegreenBrinstartop',
  'MissilegreenBrinstarbehindmissile',
  'MissilegreenBrinstarbehindreservetank',
  'MissilepinkBrinstartop',
  'MissilepinkBrinstarbottom',
  'PowerBombpinkBrinstar',
  'MissilegreenBrinstarpipe',
  'PowerBombblueBrinstar',
  'MissileblueBrinstarmiddle',
  'SuperMissilegreenBrinstarbottom',
  'MissileblueBrinstarbottom',
  'MissileblueBrinstartop',
  'MissileblueBrinstarbehindmissile',
  'PowerBombredBrinstarsidehopperroom',
  'PowerBombredBrinstarspikeroom',
  'MissileredBrinstarspikeroom',
  'MissileKraid',
  'Missilelavaroom',
  'MissilebelowIceBeam',
  'MissileaboveCrocomire',
  'MissileHiJumpBoots',
  'EnergyTankHiJumpBoots',
  'PowerBombCrocomire',
  'MissilebelowCrocomire',
  'MissileGrappleBeam',
  'MissileNorfairReserveTank',
  'MissilebubbleNorfairgreendoor',
  'MissilebubbleNorfair',
  'MissileSpeedBooster',
  'MissileWaveBeam',
  'MissileGoldTorizo',
  'SuperMissileGoldTorizo',
  'MissileMickeyMouseroom',
  'MissilelowerNorfairabovefireflearoom',
  'PowerBomblowerNorfairabovefireflearoom',
  'PowerBombPowerBombsofshame',
  'MissilelowerNorfairnearWaveBeam',
  'MissileWreckedShipmiddle',
  'MissileGravitySuit',
  'MissileWreckedShiptop',
  'SuperMissileWreckedShipleft',
  'MissilegreenMaridiashinespark',
  'SuperMissilegreenMaridia',
  'MissilegreenMaridiatatori',
  'SuperMissileyellowMaridia',
  'MissileyellowMaridiasupermissile',
  'MissileyellowMaridiafalsewall',
  'MissileleftMaridiasandpitroom',
  'MissilerightMaridiasandpitroom',
  'PowerBombrightMaridiasandpitroom',
  'MissilepinkMaridia',
  'SuperMissilepinkMaridia',
  'MissileDraygon',
  'Kraid',
  'Ridley',
  'Phantoon',
  'Draygon',
  'MotherBrain',
  'SporeSpawn',
  'Crocomire',
  'Botwoon',
  'GoldenTorizo',
]

export const golden_four = ['kraid', 'phantoon', 'draygon', 'ridley']

export const doors = [
  'LandingSiteRight',
  'LandingSiteTopRight',
  'KihunterBottom',
  'KihunterRight',
  'FlywayRight',
  'GreenPiratesShaftBottomRight',
  'RedBrinstarElevatorTop',
  'ClimbRight',
  'ConstructionZoneRight',
  'GreenHillZoneTopRight',
  'NoobBridgeRight',
  'MainShaftRight',
  'MainShaftBottomRight',
  'EarlySupersRight',
  'EtecoonEnergyTankLeft',
  'BigPinkTopRight',
  'BigPinkRight',
  'BigPinkBottomRight',
  'BigPinkBottomLeft',
  'RedTowerLeft',
  'RedBrinstarFirefleaLeft',
  'RedTowerElevatorTopLeft',
  'RedTowerElevatorLeft',
  'RedTowerElevatorBottomLeft',
  'BelowSpazerTopRight',
  'WestOceanRight',
  'LeCoudeBottom',
  'WreckedShipMainShaftBottom',
  'ElectricDeathRoomTopLeft',
  'BusinessCenterTopLeft',
  'BusinessCenterBottomLeft',
  'CathedralEntranceRight',
  'CathedralRight',
  'BubbleMountainTopRight',
  'BubbleMountainTopLeft',
  'SpeedBoosterHallRight',
  'SingleChamberRight',
  'DoubleChamberRight',
  'KronicBoostBottomLeft',
  'CrocomireSpeedwayBottom',
  'PostCrocomireUpperLeft',
  'PostCrocomireShaftRight',
  'RedKihunterShaftBottom',
  'WastelandLeft',
  'MainStreetBottomRight',
  'FishTankRight',
  'CrabShaftRight',
  'ColosseumBottomRight',
  'PlasmaSparkBottom',
  'OasisTop',
  'GreenBrinstarSaveStation',
  'MaridiaBottomSaveStation',
  'MaridiaAqueductSaveStation',
  'ForgottenHighwaySaveStation',
  'DraygonSaveRefillStation',
  'KraidRefillStation',
  'RedBrinstarEnergyRefill',
  'GreenBrinstarMissileRefill',
]
