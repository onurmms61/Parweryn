class GlobalSettings {
  constructor() {
    let self = this;
    chrome.storage.local.get({
      headerColor: "#191919",
      headerOpacity: "0.9",
      windowColor: "#191919",
      windowOpacity: "0.8",
      timerTick: 300,
      enableRefresh: false,
      refreshToReconnect: false,
      refreshTime: 60,
      speedFormat: 'hour',
      windowsToTabs: false,
      autoChangeConfig: false,
      attackConfig: 1,
      flyingConfig: 1,
      reviveType: 1,
      reviveLimit: 5,
      bonusBox: false,
      materials: false,
      cargoBox: false,
      greenOrGoldBooty: false,
      redBooty: false,
      blueBooty: false,
      masqueBooty: false,
      collectBoxWhenCircle: false,
      workmap: 0,
      changeFormation: false,
      attackFormation: -2,
      flyingFormation: -2,
      useHability: false,
      habilitySlot: -1,
      npcList: null,
      changeAmmunition: false,
      x1Slot: -1,
      x2Slot: -1,
      x3Slot: -1,
      x4Slot: -1,
      sabSlot: -1
    }, items => {
      self._settings = items;
    });
  }
  get habilitySlot(){
    return this._settings.habilitySlot;
  }
  get useHability(){
    return this._settings.useHability;
  }

  get changeFormation(){
    return this._settings.changeFormation;
  }

  get attackFormation(){
    return this._settings.attackFormation;
  }

  get flyingFormation(){
    return this._settings.flyingFormation;
  }

  get headerColor() {
    return this._settings.headerColor;
  }

  get headerOpacity() {
    return this._settings.headerOpacity;
  }

  get windowColor() {
    return this._settings.windowColor;
  }

  get windowOpacity() {
    return this._settings.windowOpacity;
  }

  get timerTick() {
    return this._settings.timerTick;
  }

  get speedFormat() {
    return this._settings.speedFormat;
  }

  get enableRefresh() {
    return this._settings.enableRefresh;
  }
  
  get refreshToReconnect(){
    return this._settings.refreshToReconnect;
  }

  get refreshTime() {
    return this._settings.refreshTime;
  }

  get windowsToTabs() {
    return this._settings.windowsToTabs;
  }
  
  get autoChangeConfig() {
    return this._settings.autoChangeConfig;
  }
  get attackConfig() {
    return this._settings.attackConfig;
  }

  get flyingConfig() {
    return this._settings.flyingConfig;
  }

  get reviveType() {
    return this._settings.reviveType;
  }

  get reviveLimit() {
    return this._settings.reviveLimit;
  }

  get bonusBox() {
    return this._settings.bonusBox;
  }

  get materials() {
    return this._settings.materials;
  }

  get cargoBox() {
    return this._settings.cargoBox;
  }

  get greenOrGoldBooty() {
    return this._settings.greenOrGoldBooty;
  }

  get redBooty() {
    return this._settings.redBooty;
  }

  get blueBooty() {
    return this._settings.blueBooty;
  }

  get masqueBooty() {
    return this._settings.masqueBooty;
  }

  get collectBoxWhenCircle() {
    return this._settings.collectBoxWhenCircle;
  }

  get workmap() {
    return this._settings.workmap;
  }
  
  get npcList() {
	return this._settings.npcList;
  }

  get changeAmmunition() {
    return this._settings.changeAmmunition;
  }

  get x1Slot() {
    return this._settings.x1Slot;
  }

  get x2Slot() {
    return this._settings.x2Slot;
  }

  get x3Slot() {
    return this._settings.x3Slot;
  }

  get x4Slot() {
    return this._settings.x4Slot;
  }

  get sabSlot() {
    return this._settings.sabSlot;
  }

}