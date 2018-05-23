class SafetyChecker {
  static check() {
    let jsCheck = JavaScriptChecker.safetyCheck();

    if (!jsCheck) {
      return "OYUN GÜNCELEME - JS GÜVENSİZ";
    }

    return true;
  }
}
