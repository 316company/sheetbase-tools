function onOpen(e) {
    SpreadsheetApp
        .getUi()
        .createMenu('SSDB Tools')
        .addItem('JSON Editor', 'jsonEditorSidebar')
        .addItem('HTML Editor', 'htmlEditorSidebar')
        .addSeparator()
        .addItem('Sync Rows', 'syncRowsDialog')
        .addSeparator()
        .addItem('Taxonomy Editor', 'taxonomyEditorSidebar')
        .addItem('Hash Generator', 'hashGeneratorSidebar')
        .addSeparator()
        .addItem('Functions List', 'functionsDialog')
        .addToUi();
}
function onInstall(e) {
    return onOpen(e);
}