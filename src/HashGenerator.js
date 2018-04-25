function hashGeneratorSidebar() {
    var html = HtmlService.createHtmlOutputFromFile('HashGeneratorUi')
        .setTitle('Hash Generator');
    SpreadsheetApp.getUi()
        .showSidebar(html);
}