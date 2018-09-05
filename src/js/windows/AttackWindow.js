class AttackWindow {
  createWindow() {
    this.attackWindow = WindowFactory.createWindow({
      width: 320,
      text: chrome.i18n.getMessage("attackdetails")
    });

    this.targetNameTxt = jQuery("<h4>");
    this.targetNameTxt.text(chrome.i18n.getMessage("target")+" - ");

    this.hpTxt = jQuery("<h4>");
    this.hpTxt.text(chrome.i18n.getMessage("hp")+" - ");

    this.shdTxt = jQuery("<h4>");
    this.shdTxt.text(chrome.i18n.getMessage("shd")+" - ");

    this.targetNameTxt.appendTo(this.attackWindow);
    this.hpTxt.appendTo(this.attackWindow);
    this.shdTxt.appendTo(this.attackWindow);
  }

  removeTarget() {
    this.targetName.text(chrome.i18n.getMessage("target"));
    this.hpTxt.text(chrome.i18n.getMessage("hp"));
    this.shdTxt.text(chrome.i18n.getMessage("shd"));
  }

  targetName(value) {
    this.targetNameTxt.text(chrome.i18n.getMessage("target") + value);
  }

  hp(value) {
    this.hpTxt.text(chrome.i18n.getMessage("hp") + value);
  }

  shd(value) {
    this.shdTxt.text(chrome.i18n.getMessage("shd") + value);
  }
}