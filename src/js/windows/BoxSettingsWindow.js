class BoxSettingsWindow {
  createWindow() {
    this.boxSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "Kutu ayarları"
    });

    let controls = [{
        name: 'bonusBox',
        labelText: 'Bonus kutusu',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.bonusBox = this.checked;
        }
      },
      {
        name: 'materials',
        labelText: 'Malzemeler',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.materials = this.checked;
        }
      },
      {
        name: 'cargoBox',
        labelText: 'Kargo kutusu',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.cargoBox = this.checked;
        }
      },
      {
        name: 'greenOrGoldBooty',
        labelText: 'Yeşil | Altın ganimet kutuları',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.greenOrGoldBooty = this.checked;
        }
      },
      {
        name: 'redBooty',
        labelText: 'Kırmızı ganimet kutuları',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.redBooty = this.checked;
        }
      },
      {
        name: 'blueBooty',
        labelText: 'Mavi ganimet kutuları',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.blueBooty = this.checked;
        }
      },
      {
        name: 'masqueBooty',
        labelText: 'Apocalypse ganimet kutuları',
        appendTo: this.boxSettingsWindow,
        event: function () {
          window.settings.masqueBooty = this.checked;
        }
      }
    ]

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });
  }
}
