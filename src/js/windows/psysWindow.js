class psysWindow {
  createWindow() {
    this.psysWindow = WindowFactory.createWindow({width: 300, text: "psys"});


	
}
}



/* class PetWindow {
  createWindow() {
    this.petwindow = WindowFactory.createWindow({
      width: 320,
      text: chrome.i18n.getMessage("Pet")
    });

    let controls = [
      {
        name: 'GuardMode',
        labelText: chrome.i18n.getMessage("GuardMode"),
        appendTo: this.petWindowWindow,
        event: $(document).keyup(function (e) {
		clearTimeout($.data(this, 'timer'));
		var wait = setTimeout(guard, 500);
			$(this).data('timer', wait);
		});

		function guard() {
    if(e.keyCode == 82 || e.keyCode = 82) {
      $(this).toggleClass("key" + e.keyCode)
    }
  }
    }
  });
}	    
}

*/