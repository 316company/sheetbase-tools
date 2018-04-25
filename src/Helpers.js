function error(message, title) {
    var ui = SpreadsheetApp.getUi();
    return ui.alert(title||'Oops, something wrong!', message, ui.ButtonSet.OK);
}

function get(id, rangeA1, noHeaders, raw) {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if(id) spreadsheet = SpreadsheetApp.openById(id);

    var range = SpreadsheetApp.getActiveRange();
    if(rangeA1) range = spreadsheet.getRange(rangeA1);
  
    if(range.getWidth() <= 1 && range.getHeight() <= 1) return range.getValue();
    
    var value = range.getValues(); // in [][]
    if(raw) return value;
    return transformValue(value, noHeaders);
}

// A1 can be absolute Sheet1!A:A, or sheet name only Sheet1 to append data
function set(data, id, A1, append) {
    if(!data) return error('No data to save!');
    
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if(id) spreadsheet = SpreadsheetApp.openById(id);
  
    var sheet, range;
    if(append) {
        sheet = SpreadsheetApp.getActiveSheet();
        if(A1) sheet = spreadsheet.getSheetByName(A1);

        // append data to the last row
        var lastRow = sheet.getLastRow()+1;
        range = sheet.getRange('A'+ lastRow +':'+ lastRow);
    } else {
        range = SpreadsheetApp.getActiveRange();
        if(A1) range = spreadsheet.getRange(A1);
    }
  
    if(!id && get()) {
        var ui = SpreadsheetApp.getUi();
        var result = ui.alert(
            'Overwrite data',
            'Data exists, overwrite anyway?',
            ui.ButtonSet.YES_NO);
        
        // Process the user's response.
        if (result != ui.Button.YES) return;
    }
    
    if(range.getWidth() <= 1 && range.getHeight() <= 1) return range.setValue(data);  
    return range.setValues(data);
}

function transformValue(value, noHeaders) {
    var items = [];

    var headers = ['value'];
    var data = value || [];
    if(!noHeaders) {
        headers = value[0] || [],
        data = value.slice(1, value.length) || [];
    }

    for (var i = 0; i < data.length; i++) {
        var rows = data[i];        
        var item = {};

        for (var j = 0; j < rows.length; j++) {
          if(rows[j]) {
            var val = rows[j];
            if(!isNaN(val) && Number(val) % 1 === 0) {
              val = parseInt(val);
            }
            if(!isNaN(val) && Number(val) % 1 !== 0) {
              val = parseFloat(val);
            }
            item[headers[j] || (headers[0] + j)] = val;
          }
        }
        if(Object.keys(item).length > 0) items.push(item);
    }

    return items;
}


function getDoc(docId, withStyle) {
    var forDriveScope = DriveApp.getStorageUsed();
    var url = "https://www.googleapis.com/drive/v3/files/"+ docId +"/export?mimeType=text/html";
    
    var param = {
        method      : "get",
        headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
        muteHttpExceptions:true
    };
    
    var html = null;
    try {
        html = UrlFetchApp.fetch(url,param);
    } catch(err) {}
  
    if(!html || html.getResponseCode() !== 200) return;
  
    var htmlContent = html.getContentText();

    // with style
    if(withStyle) return htmlContent;
    
    // without style
    var removeAttrs = ['style', 'id', 'class', 'width', 'height'];
    for (var i = 0; i < removeAttrs.length; i++) {
        htmlContent = htmlContent.replace(new RegExp('(\ '+ removeAttrs[i] +'\=\".*?\")', 'g'), '');
    }
    htmlContent = htmlContent.substring(htmlContent.lastIndexOf("<body>")+6,htmlContent.lastIndexOf("</body>"));
    return htmlContent;
}