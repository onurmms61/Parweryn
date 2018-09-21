class ShipSelectedHandler {
  static get ID() {
    return 13233;//32473;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsedJson = JSON.parse(e.detail);
      let ship = a.ships[parsedJson.userId];
      ship.maxHp = parsedJson[Variables.selectMaxHp]; //
      ship.maxShd = parsedJson[Variables.selectMaxShd]; // 
      ship.hp = parsedJson[Variables.selectHp];//_-p2W 
      ship.shd = parsedJson.shield;

      if (ship != null){
        a.lockedShip = ship;
        if(window.settings.autoAttack || window.settings.autoAttackNpcs && a.autoLocked && $.now() - a.lastAutoLock < 900){
          if (!a.attacking && window.settings.avoidAttackedNpcs || !a.attacking && a.lockedShip) {
            a.startLaserAttack();
            a.lastAttack = $.now();
            a.attacking = true;
          }
        }
      }
    }
  }

  get handler() {
    return this._handler;
  }
}