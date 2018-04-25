function htmlEditorSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('HTMLEditorUi')
      .setTitle('HTML Editor');
  SpreadsheetApp.getUi()
      .showSidebar(html);
}