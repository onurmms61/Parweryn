class GeneralSettingsWindow {
  createWindow() {
    this.botSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: chrome.i18n.getMessage("general")
    });

    let controls = [
      {
        name: 'palladium',
        labelText: chrome.i18n.getMessage("palladiumbot"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.palladium = this.checked;
        }
      },
      {
        name: 'moveRandomly',
        labelText: chrome.i18n.getMessage("moverandomly"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.moveRandomly = this.checked;
        }
      },
      {
        name: 'npcKiller',
        labelText: chrome.i18n.getMessage("killnpcs"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.killNpcs = this.checked;
        }
      },
      {
        name: 'fleeFromEnemy',
        labelText: chrome.i18n.getMessage("fleefromenemy"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.fleeFromEnemy = this.checked;
        }
      },
      {
        name: 'avoidAttackedNpcs',
        labelText: chrome.i18n.getMessage("avoidattackednpc"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.avoidAttackedNpcs = this.checked;
        }
      },
      {
        name: 'npcCircle',
        labelText: chrome.i18n.getMessage("circle"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.circleNpc = this.checked;
        }
      },
      {
        name: 'npcCircleRadius',
        labelText: chrome.i18n.getMessage("circleradius"),
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 1,
          max: 800,
          step: 1,
          value: 500,
        },
        event: function (ev) {
          window.settings.npcCircleRadius = this.value;
          $('span:last-child', this.label).text(' (' + this.value + 'px)');
        }
      },
      {
        name: 'dontCircleWhenHpBelow25Percent',
        labelText: chrome.i18n.getMessage("dontcirclewhenhp"),
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.dontCircleWhenHpBelow25Percent = this.checked;
        }
      },
      {
        name: 'repairWhenHpIsLowerThanPercent',
        labelText: chrome.i18n.getMessage("repairwhenhp"),
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 0,
          max: 100,
          step: 1,
          value: 10,
        },
        event: function (ev) {
          window.settings.repairWhenHpIsLowerThanPercent = this.value;
          $('span:last-child', this.label).text(' (' + this.value + '%)');
        }
      }
    ];


    if (window.globalSettings.deltaOptions) {
      controls.splice(5,0,
        {
          name: 'jumpFromEnemy',
          labelText: chrome.i18n.getMessage("jumpandreturn"),
          appendTo: this.botSettingsWindow,
          event: function () {
            window.settings.jumpFromEnemy = this.checked;
          }
        }
      );
      controls.splice(6,0,
        {
          name: 'autoChangeConfig',
          labelText: chrome.i18n.getMessage("autochangeconfig"),
          appendTo: this.botSettingsWindow,
          event: function () {
            window.settings.autoChangeConfig = this.checked;
          }
        }
      );
      controls.splice(7,0,
        {
          name: 'dodgeTheCbs',
          labelText: chrome.i18n.getMessage("dodgethecbs"),
          appendTo: this.botSettingsWindow,
          event: function () {
            window.settings.dodgeTheCbs = this.checked;
          }
        }
      );
      controls.splice(11,0,
        {
          name: 'resetTargetWhenHpBelow25Percent',
          labelText: chrome.i18n.getMessage("resettarget"),
          appendTo: this.botSettingsWindow,
          event: function () {
            window.settings.resetTargetWhenHpBelow25Percent = this.checked;
          }
        }
      );
    } else {
      window.settings.travelsystem = false;
      window.settings.jumpFromEnemy = false;
      window.settings.autoChangeConfig = false;
      window.settings.dodgeTheCbs = false;
      window.settings.resetTargetWhenHpBelow25Percent = false;
    }

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });

    if (window.globalSettings.enableRefresh) {
      let saveButton = jQuery('<div class="saveButton"><button class="btn_save save btn">'+chrome.i18n.getMessage("savesettingsandenable")+'</button></div>');
    this.botSettingsWindow.append(saveButton);
    }
  }
}