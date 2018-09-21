/*
Created by Freshek on 31.10.2017
*/

function saveOptions(e) {
  e.preventDefault();
  let knownNpcList = [
    "-=[ Streuner ]=-",
    "-=[ Aider Streuner ]=-",
    "-=[ Recruit Streuner ]=-",
    "-=[ Lordakia ]=-",
    "-=[ Devolarium ]=-",
    "-=[ Mordon ]=-",
    "-=[ Sibelon ]=-",
    "-=[ Saimon ]=-",
    "-=[ Lordakium ]=-",
    "-=[ Sibelonit ]=-",
    "-=[ Kristallin ]=-",
    "-=[ Kristallon ]=-",
    "-=[ StreuneR ]=-",
    "-=[ Protegit ]=-",
    "-=[ Cubikon ]=-",
    "-=[ Interceptor ]=-",
    "-=[ Barracuda ]=-",
    "-=[ Saboteur ]=-",
    "-=[ Annihilator ]=-",
    "-=[ Battleray ]=-",
    "-=[ Deadly Battleray ]=-",
    "..::{ Boss Streuner }::..",
    "..::{ Boss Lordakia }::..",
    "..::{ Boss Mordon }::..",
    "..::{ Boss Saimon }::..",
    "..::{ Boss Devolarium }::..",
    "..::{ Boss Sibelonit }::..",
    "..::{ Boss Sibelon }::..",
    "..::{ Boss Lordakium }::...",
    "..::{ Boss Kristallin }::..",
    "..::{ Boss Kristallon }::..",
    "..::{ Boss StreuneR }::..",
    "( UberStreuner )",
    "( UberLordakia )",
    "( UberMordon )",
    "( UberSaimon )",
    "( UberDevolarium )",
    "( UberSibelonit )",
    "( UberSibelon )",
    "( UberLordakium )",
    "( UberKristallin )",
    "( UberKristallon )",
    "( UberStreuneR )",
    "( Uber Interceptor )",
    "( Uber Barracuda )",
    "( Uber Saboteur )",
    "( Uber Annihilator )",
    "( Uber Battleray )",
    "-=[ Referee-Bot ]=-",
    "<=< Icy >=>",
    "<=< Ice Meteoroid >=>",
    "<=< Super Ice Meteoroid >=>",
    "-=[ Skoll ]=-",
    "<=< Skoll's Icy >=>",
    "-=[ Santa -1100101 ]=-",
    "<=< Gygerthrall >=>",
    "<=< Blighted Gygerthrall >=>",
    "-=[ Blighted Kristallon ]=-",
    "<=< Plagued Gygerthrall >=>",
    "-=[ Plagued Kristallin ]=-",
    "-=[ Plague Rocket ]=-",
    "..::{ Boss Lordakium }::... δ21",
    "..::{ Boss Lordakium }::... δ23",
    "..::{ Boss Lordakium }::... δ25",
    "-={ demaNeR Escort }=-",
    "-={ Demaner Corsair }=-",
    "-={ demaNeR Freighter }=-",
    "-=[ Hitac 2.0 ]=-",
    "-=[ Hitac-Minion ]=-"
  ];
  
  var npcList = []; 
  for (i = 0; i < knownNpcList.length; i++) { 
	  var npcdata = {
	    name:        $("#name"+i).val(),
	    range:        $("#range"+i).val(),
	    ammo:        $("#ammo"+i).val(),
	    priority:        $("#priority"+i).val() 
	  }
	  npcList.push(npcdata);
  }
  
  var elements = {
    headerColor:        $("#headerColor").val(),
    headerOpacity:      $("#headerOpacity").val(),
    windowColor:        $("#windowColor").val(),
    windowOpacity:      $("#windowOpacity").val(),
    timerTick:          $("#timerTick").val(),
    enableRefresh:      $("#enableRefresh").prop('checked'),
    refreshToReconnect: $("#refreshToReconnect").prop('checked'),
    refreshTime:        $("#refreshTime").val(),
    speedFormat:        $('input[name="speedFormat"]:checked').val(),
    windowsToTabs:      $("#windowsToTabs").prop('checked'),
    autoChangeConfig:   $("#autoChangeConfig").prop('checked'),
    attackConfig:       $("#attackConfig").val(),
    changeFormation:    $("#changeFormation").prop('checked'),
    flyingFormation:    $("#flyingFormation").val(),
    attackFormation:    $("#attackFormation").val(),
    flyingConfig:       $("#flyingConfig").val(),
    useHability:        $("#useHability").prop('checked'),
    habilitySlot:       $("#habilitySlot").val(),
    reviveType:         $("#reviveType").val(),
    reviveLimit:        $("#reviveLimit").val(),
    bonusBox:           $("#bonusBox").prop('checked'),
    materials:          $("#materials").prop('checked'),
    cargoBox:           $("#cargoBox").prop('checked'),
    greenOrGoldBooty:   $("#greenOrGoldBooty").prop('checked'),
    redBooty:           $("#redBooty").prop('checked'),
    blueBooty:          $("#blueBooty").prop('checked'),
    masqueBooty:        $("#masqueBooty").prop('checked'),
    collectBoxWhenCircle: $("#collectBoxWhenCircle").prop('checked'),
    workmap:            $("#workmap").val(),
    npcList:            npcList,
    changeAmmunition:   $("#changeAmmunition").prop('checked'),
    x1Slot:             $("#x1Slot").val(),
    x2Slot:             $("#x2Slot").val(),
    x3Slot:             $("#x3Slot").val(),
    x4Slot:             $("#x4Slot").val(),
    sabSlot:            $("#sabSlot").val(),
    stopafterxminutes:  $("#stopafterxminutes").val(),
    waitafterRepair:    $("#waitafterRepair").val(),
    useHabilityAegis : $("#useHabilityAegis").prop('checked'),
    HabilitySlotAegisHP : $("#HabilitySlotAegisHP").val(),
    HabilitySlotAegisSHD : $("#HabilitySlotAegisHP").val(),
    HabilitySlotAegisBeacon : $("#HabilitySlotAegisBeacon").val()
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

  var items = ["headerColor", "headerOpacity", "windowColor", "windowOpacity", "timerTick", "windowsToTabs",
                "enableRefresh","refreshToReconnect", "refreshTime", 
                "speedFormat", "autoChangeConfig", "attackConfig", "flyingConfig",
                "useHability","habilitySlot", "changeFormation","flyingFormation",
                "attackFormation","reviveType", "reviveLimit",
                "bonusBox", "materials", "cargoBox", "greenOrGoldBooty",
                "redBooty", "blueBooty", "masqueBooty", "collectBoxWhenCircle", "workmap", "npcList", "changeAmmunition", "x1Slot", "x2Slot", "x3Slot", "x4Slot", "sabSlot", "stopafterxminutes", "waitafterRepair", "useHabilityAegis", "HabilitySlotAegisHP", "HabilitySlotAegisSHD", "HabilitySlotAegisBeacon"];

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
    if (items.enableRefresh)
      $("#enableRefresh").prop('checked', true);
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
    if (items.autoChangeConfig) {
      $("#autoChangeConfig").prop('checked', true);
    }
    if (items.attackConfig) {
      $("#attackConfig").val(items.attackConfig);
    }
    if (items.flyingConfig) {
      $("#flyingConfig").val(items.flyingConfig);
    }
    if (items.changeFormation) {
      $("#changeFormation").prop('checked', true);
    }
    if (items.attackFormation) {
      $("#attackFormation").val(items.attackFormation);
    }
    if (items.flyingFormation) {
      $("#flyingFormation").val(items.flyingFormation);
    }
    if (items.useHability) {
      $("#useHability").prop('checked', true);
    }
    if (items.habilitySlot) {
      $("#habilitySlot").val(items.habilitySlot);
    }
    if (items.workmap) {
      $("#workmap").val(items.workmap);
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
    if (items.changeAmmunition) {
      $("#changeAmmunition").prop('checked', true);
    }
    if (items.x1Slot) {
      $("#x1Slot").val(items.x1Slot);
    }
    if (items.x2Slot) {
      $("#x2Slot").val(items.x2Slot);
    }
    if (items.x3Slot) {
      $("#x3Slot").val(items.x3Slot);
    }
    if (items.x4Slot) {
      $("#x4Slot").val(items.x4Slot);
    }
    if (items.sabSlot) {
      $("#sabSlot").val(items.sabSlot);
    }
    if (items.stopafterxminutes) {
      $("#stopafterxminutes").val(items.stopafterxminutes);
    }
    if (items.waitafterRepair) {
      $("#waitafterRepair").val(items.waitafterRepair);
    }
    if (items.useHabilityAegis) {
      $("#useHabilityAegis").prop('checked', true);
    }
    if (items.HabilitySlotAegisHP){
      $("#HabilitySlotAegisHP").val(items.HabilitySlotAegisHP);
    }
    if (items.HabilitySlotAegisSHD){
      $("#HabilitySlotAegisSHD").val(items.HabilitySlotAegisSHD);
    }
    if (items.HabilitySlotAegisBeacon){
      $("#HabilitySlotAegisBeacon").val(items.HabilitySlotAegisBeacon);
    }
    if (items.npcList) {
      var knownNpcList = items.npcList;
	  for (i = 0; i < knownNpcList.length; i++) {
	      $("#name"+i).val(knownNpcList[i]["name"]);
	      $("#range"+i).val(knownNpcList[i]["range"]);
	      $("#ammo"+i).val(knownNpcList[i]["ammo"]);
	      $("#priority"+i).val(knownNpcList[i]["priority"]);
	  }
    }
  };

  chrome.storage.local.get(items, onGet);
}

$('.clearSettings').on("click", chrome.storage.sync.clear());
$("form").on("submit", saveOptions);
$(document).ready(restore);