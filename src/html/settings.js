/*
Created by Freshek on 31.10.2017
*/

function saveOptions(e) {
  e.preventDefault();
  var elements = {
    headerColor: $("#headerColor").val(),
    headerOpacity: $("#headerOpacity").val(),
    windowColor: $("#windowColor").val(),
    windowOpacity: $("#windowOpacity").val(),
    timerTick: $("#timerTick").val(),
    showRuntime: $("#showRuntime").prop('checked'),
    enableRefresh: $("#enableRefresh").prop('checked'),
    enableNPCBlockList: $("#enableNPCBlockList").prop('checked'),
    refreshToReconnect: $("#refreshToReconnect").prop('checked'),
    refreshTime: $("#refreshTime").val(),
    speedFormat: $('input[name="speedFormat"]:checked').val(),
    windowsToTabs: $("#windowsToTabs").prop('checked'),
    deltaOptions: $("#deltaOptions").prop('checked'),
    attackConfig: $("#attackConfig").val(),
    flyingConfig: $("#flyingConfig").val(),
    reviveType: $("#reviveType").val(),
    reviveLimit: $("#reviveLimit").val(),
    bonusBox: $("#bonusBox").prop('checked'),
    materials: $("#materials").prop('checked'),
    cargoBox: $("#cargoBox").prop('checked'),
    greenOrGoldBooty: $("#greenOrGoldBooty").prop('checked'),
    redBooty: $("#redBooty").prop('checked'),
    blueBooty: $("#blueBooty").prop('checked'),
    masqueBooty: $("#masqueBooty").prop('checked'),
    collectBoxWhenCircle: $("#collectBoxWhenCircle").prop('checked'),
    workmap: $("#workmap").val(),
    palladiumLogic: $("#palladiumLogic").prop('checked'),
  };

  chrome.storage.local.set(elements);
}

function restore() {
	$('[data-resource]').each(function() {
		  var el = $(this);
		  var resourceName = el.data('resource');
		  var resourceText = chrome.i18n.getMessage(resourceName);
		  el.text(resourceText);
		});
	
  var items = ["headerColor", "headerOpacity", "windowColor", "windowOpacity", "timerTick", "showRuntime", "enableRefresh", "enableNPCBlockList","refreshToReconnect", "refreshTime", "speedFormat", "windowsToTabs", "deltaOptions", "attackConfig", "flyingConfig", "reviveType", "reviveLimit", "bonusBox", "materials", "cargoBox", "greenOrGoldBooty", "redBooty", "blueBooty", "masqueBooty", "collectBoxWhenCircle", "workmap", "palladiumLogic"];

  var onGet = items => {

    if (items.headerColor)
      $("#headerColor").val(items.headerColor);
    if (items.headerOpacity)
      $("#headerOpacity").val(items.headerOpacity);
    if (items.windowColor)
      $("#windowColor").val(items.windowColor);
    if (items.windowOpacity)
      $("#windowOpacity").val(items.windowOpacity);
    if (items.timerTick)
      $("#timerTick").val(items.timerTick);
    if (items.showRuntime)
      $("#showRuntime").prop('checked', true);
    if (items.enableRefresh)
      $("#enableRefresh").prop('checked', true);
    if (items.enableNPCBlockList)
      $("#enableNPCBlockList").prop('checked', true);
    if(items.refreshToReconnect)
      $("#refreshToReconnect").prop('checked', true);
    if (items.refreshTime)
      $("#refreshTime").val(items.refreshTime);
    if (items.speedFormat) {
      let sel = `#speedFormat_${items.speedFormat}`;
      $(sel).prop('checked', true);
    }
    if (items.windowsToTabs) {
      $("#windowsToTabs").prop('checked', true);
    }
    if (items.deltaOptions) {
      $("#deltaOptions").prop('checked', true);
    }
    if (items.attackConfig) {
      $("#attackConfig").val(items.attackConfig);
    }
    if (items.flyingConfig) {
      $("#flyingConfig").val(items.flyingConfig);
    }
    if (items.reviveType) {
      $("#reviveType").val(items.reviveType);
    }
    if (items.reviveLimit) {
      $("#reviveLimit").val(items.reviveLimit);
    }
    if (items.bonusBox) {
      $("#bonusBox").prop('checked', true);
    }
    if (items.materials) {
      $("#materials").prop('checked', true);
    }
    if (items.cargoBox) {
      $("#cargoBox").prop('checked', true);
    }
    if (items.greenOrGoldBooty) {
      $("#greenOrGoldBooty").prop('checked', true);
    }
    if (items.redBooty) {
      $("#redBooty").prop('checked', true);
    }
    if (items.blueBooty) {
      $("#blueBooty").prop('checked', true);
    }
    if (items.masqueBooty) {
      $("#masqueBooty").prop('checked', true);
    }
    if (items.collectBoxWhenCircle) {
      $("#collectBoxWhenCircle").prop('checked', true);
    }
    if (items.workmap) {
      $("#workmap").val(items.workmap);
    }
    if (items.palladiumLogic) {
      $("#palladiumLogic").prop('checked', true);
    }
  };

  chrome.storage.local.get(items, onGet);
}

$('.clearSettings').on("click", chrome.storage.sync.clear());
$("form").on("submit", saveOptions);
$(document).ready(restore);