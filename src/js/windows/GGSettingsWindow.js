class GGSettingsWindow {
  createWindow() {
    this.GGSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "GG Yardımcısı"
    });

    let controls = [{
        name: 'alpha',
        labelText: 'Alpha Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.alpha = this.checked;
        }
      },
      {
        name: 'beta',
        labelText: 'Beta Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.beta = this.checked;
        }
      },
      {
        name: 'gamma',
        labelText: 'Gamma Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.gamma = this.checked;
        }
      },
      {
        name: 'delta',
        labelText: 'Delta Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.delta = this.checked;
        }
      },
      {
        name: 'epsilon',
        labelText: 'Epsilon Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.epsilon = this.checked;
        }
      },
      {
        name: 'zeta',
        labelText: 'Zeta Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.zeta = this.checked;
        }
      },
      {
        name: 'kappa',
        labelText: 'Kappa Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kappa = this.checked;
        }
      },
      {
        name: 'lambda',
        labelText: 'Lambda Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.lambda = this.checked;
        }
      },
      {
        name: 'kronos',
        labelText: 'Kronos Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kronos = this.checked;
        }
      },
      {
        name: 'hades',
        labelText: 'Hades Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.hades = this.checked;
        }
      },
      {
        name: 'kuiper',
        labelText: 'Kuiper Galaksi Kapısına Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kuiper = this.checked;
        }
      }
    ]

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });
  }
}
