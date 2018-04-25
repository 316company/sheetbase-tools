function functionsDialog() {
  var ui = SpreadsheetApp.getUi();

  var html = HtmlService.createHtmlOutputFromFile('FunctionsUi')
      .setWidth(700)
      .setHeight(500);
  
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Funtions');
}


/*
* count by key
*/
function SBCOUNT(key, range, id) {
  var values = get(id||null, range, true);
  var counter = 0;
  for(var i = 0; i < values.length; i++) {
      if(JSON.stringify(values[i].value).indexOf(key) > -1) counter++;
  }
  return counter;
}