class NormalBotlarWindow {
  createWindow() {
    this.normalbotlarwindow = WindowFactory.createWindow({width: 320, text: "NormalBotlarWindow"});

    let options = [
	  {
        name: 'palladium',
        labelText: chrome.i18n.getMessage("palladiumbot"),
        appendTo: this.normalbotlarwindow,
        event: function () {
          window.settings.palladium = this.checked;
        }
      },
      {
        name: 'korsanbot',
          labelText: chrome.i18n.getMessage("korsanbot"),
          appendTo: this.normalbotlarwindow,
          event: function () {
            window.settings.korsanbot = this.checked;
          }
      },
	  {
        name: 'cubibot',
          labelText: chrome.i18n.getMessage("cubibot"),
          appendTo: this.normalbotlarwindow,
          event: function () {
            window.settings.cubibot = this.checked;
          }
      },
	  {
        name: 'korsanbotsolport',
          labelText: "Sol Port",
          appendTo: this.normalbotlarwindow,
          event: function () {
            window.settings.korsanbotsolport = this.checked;
          }
      },
	  {
        name: 'karantina',
          labelText: "Karantina Npc Önceliği",
          appendTo: this.normalbotlarwindow,
          event: function () {
            window.settings.karantina  = this.checked;
          }
      },
    ];

    options.forEach((option)=>{
      this[option.name] = ControlFactory.checkbox(option);
    });

  }
}

//yapımcı freshek
