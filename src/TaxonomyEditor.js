function taxonomyEditorSidebar() {
    var html = HtmlService.createHtmlOutputFromFile('TaxonomyEditorUi')
        .setTitle('Taxonomy Editor');
    SpreadsheetApp.getUi()
        .showSidebar(html);
}