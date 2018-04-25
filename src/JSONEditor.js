function jsonEditorSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('JSONEditorUi')
      .setTitle('JSON Editor');
  SpreadsheetApp.getUi()
      .showSidebar(html);
}