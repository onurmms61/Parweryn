class AutolockWindow {
  createWindow() {
    this.autolockWindow = WindowFactory.createWindow({
      width: 320,
      text: "Otomatik kilitlenme"
    });

    let options = [{
        name: 'lockNpcs',
        labelText: 'Yaratıklara kilitlenme (tuş: x)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockNpcs = this.checked;
        }
      },
      {
        name: 'lockPlayers',
        labelText: 'Oyunculara kilitlenme (tuş: z)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockPlayers = this.checked;
        }
      },
      {
        name: 'autoAttack',
        labelText: 'Hedefe kilitlendiğinde saldır',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.autoAttack = this.checked;
        }
      },
    ];

    options.forEach((option) => {
      this[option.name] = ControlFactory.checkbox(option);
    });

  }
}
