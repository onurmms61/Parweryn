class GeneralSettingsWindow {
  createWindow() {
    this.botSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "Genel"
    });

    let controls = [{
        name: 'palladium',
        labelText: 'Palladyum topla',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.palladium = this.checked;
        }
      },
      /*{
        name: 'save',
        labelText: 'Refresh',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.refresh = this.checked;
        }
      },*/
      {
        name: 'moveRandomly',
        labelText: 'Rastgele hareket et',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.moveRandomly = this.checked;
        }
      },
      {
        name: 'npcKiller',
        labelText: 'Yaratıkları öldür',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.killNpcs = this.checked;
        }
      },
      {
        name: 'fleeFromEnemy',
        labelText: 'Düşmandan kaç',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.fleeFromEnemy = this.checked;
        }
      },
      {
        name: 'avoidAttackedNpcs',
        labelText: 'Saldırıya uğrayan yaratıklardan kaçının<br>(PET ile kullanmayın)',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.avoidAttackedNpcs = this.checked;
        }
      },
      {
        name: 'npcCircle',
        labelText: 'Daire',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.circleNpc = this.checked;
        }
      },
      {
        name: 'npcCircleRadius',
        labelText: 'Daire yarıçapı <span> (500px)</span>',
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
        labelText: "Darbe Puanı 25% den küçük olduğunda daire çizmeyi bırak",
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.dontCircleWhenHpBelow25Percent = this.checked;
        }
      },
      {
        name: 'repairWhenHpIsLowerThanPercent',
        labelText: ' Darbe Puanı <span> (10%)</span> altına düştüğünde tamir ol',
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 0,
          max: 100,
          step: 1,
          value: 80,
        },
        event: function (ev) {
          window.settings.repairWhenHpIsLowerThanPercent = this.value;
          $('span:last-child', this.label).text(' (' + this.value + '%)');
        }
      },
      {
        name: 'reviveAtGate',
        labelText: 'En yakın kapıda tamir ol',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.reviveAtGate = this.checked;
        }
      },
      {
        name: 'reviveLimit',
        labelText: 'Ölüm limiti <span> (5)</span>',
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 0,
          max: 100,
          step: 1,
          value: 10
        },
        event: function () {
          window.settings.reviveLimit = this.value;
          $('span:last-child', this.label).text(' (' + this.value + ')');
        }
      }
    ];

    /*this.saveSettingsBtn = ControlFactory.btn({
      labelText: 'Save settings',
      appendTo: ControlFactory.emptyDiv(this.botSettingsWindow)
    });*/

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });

    /*$(this.saveSettingsBtn).on('click', (e) => {
      chrome.storage.sync.set(window.settings);
      console.log("saved")
    })*/
  }
}
