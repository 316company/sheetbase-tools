function syncRowsDialog() {
    var ui = SpreadsheetApp.getUi();
    
    var result = ui.prompt(
        'Sync the number of rows between all sheets.',
        'Number of rows (3-300):',
        ui.ButtonSet.OK_CANCEL);

    // Process the user's response.
    var button = result.getSelectedButton();
    var number = parseInt(result.getResponseText());

    if (button != ui.Button.OK) return;

    if(!number || isNaN(number)) return error('Please, enter a valid number.', 'Bad input!');
    
    if(number < 3 || number > 300) return error('Please, enter a number between 3 and 300.', 'Bad input!');

    var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = spreadSheet.getSheets();

    for(var i = 0; i < sheets.length; i++) {
        var sheet = sheets[i];
        
        var sheetName = sheet.getSheetName();
        
        if(sheetName.match("^\_\_") && sheetName.match("\_\_$")) continue;
      
        var maxRows = sheets[i].getMaxRows();
        if(number == maxRows) {
            break;
        } else if(number > maxRows) { // add
            sheets[i].insertRowsAfter(maxRows, Math.abs(maxRows - number));
        } else { // remove
            sheets[i].deleteRows(number+1, maxRows-number);
        }
    }
}