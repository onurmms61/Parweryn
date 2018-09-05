class GlobalSettings {
  constructor() {
    let self = this;
    chrome.storage.local.get({
      headerColor: "#191919",
      headerOpacity: "0.9",
      windowColor: "#191919",
      windowOpacity: "0.8",
      timerTick: 300,
      showRuntime: true,
      enableRefresh: false,
      refreshToReconnect: false,
      enableNPCBlockList: false,
      refreshTime: 60,
      speedFormat: 'hour',
      windowsToTabs: false,
      deltaOptions: false,
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
      palladiumLogic: false,
    }, items => {
      self._settings = items;
    });
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

  get showRuntime() {
    return this._settings.showRuntime;
  }

  get enableRefresh() {
    return this._settings.enableRefresh;
  }
  get refreshToReconnect(){
    return this._settings.refreshToReconnect;
  }
  get enableNPCBlockList() {
    return this._settings.enableNPCBlockList;
  }

  get refreshTime() {
    return this._settings.refreshTime;
  }

  get windowsToTabs() {
    return this._settings.windowsToTabs;
  }

  get deltaOptions() {
    return this._settings.deltaOptions;
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

  get palladiumLogic() {
    return this._settings.palladiumLogic;
  }
}