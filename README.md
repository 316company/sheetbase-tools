# Sheetbase Tools

[<img src="https://sheetbase.dev/assets/images/logo.png" width="150">](https://sheetbase.dev)

Add-on for Google Spreadsheet, using Spreadsheet as Database. Edit JSON, HTML and more right from Spreadsheet.

## Introducing
We create this tool to use Google Spreadsheet (GG SS) as data storage, a helper to use with [https://sheetbase.dev](https://sheetbase.dev).

*Sheetbase Tools* contains:
* **JSON Editor**: Edit JSON right from GG SS.
* **HTML Editor**: Edit HTML, just like you do with Wordpress, right from GG SS.
* **Sync Rows**: Sync the number of rows between sheet.
* **Taxonomy Editor**: Load Taxonomies and modify Terms (categories, tags, ...) of posts.
* **Hash Generator**: Create hashed strings, supporting MD5, SHA1, SHA256, SHA512.

You may send us reports if you need anything or find out something is wrong. Contact us by [contact@sheetbase.dev](contact@sheetbase.dev).

Thank you very much!

[<img src="https://cloakandmeeple.files.wordpress.com/2017/06/become_a_patron_button3x.png?w=200">](https://www.patreon.com/lamnhan)

## Install
To use this tool, from Add-ons menu of a Spreadsheet, search for *Sheetbase Tools* then install.

Add-on link: [https://chrome.google.com/webstore/detail/ssdb-tools/iaocncapggdnlhmmjeahlejgcccgglmm?utm_source=permalink](https://chrome.google.com/webstore/detail/ssdb-tools/iaocncapggdnlhmmjeahlejgcccgglmm?utm_source=permalink).

## Increase Sidebar Width
To increase GG SS sidebar width, you can download *User CSS* from Chrome extention store. Then add a rule.

```css
.script-application-sidebar {
  width: 700px;
}
```

## Meta sheet
A meta sheet in a Spreadsheet is a sheet which starts/ends with \_\_ in the name. We create meta sheet to store extra data beside main content, example **\_\_taxonomy\_\_**, **\_\_anythingelse\_\_**, .... Meta sheets is ignored by *Sync Rows*.


## Sample SS as DB project
[https://docs.google.com/spreadsheets/d/1BkCUWPCVWr90xfOTy5bDCDDbw3fD83XNBWCna3J98JY/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1BkCUWPCVWr90xfOTy5bDCDDbw3fD83XNBWCna3J98JY/edit?usp=sharing).

The sample database is used to demonstrate how to use Spreadsheet to store data for a simple blog just like what we do with Wordpress.

## Usage

### JSON Editor
Edit your JSON then click "**[Set]**" button to add data to the active cell.

To view JSON data, select the cell that contains JSON then click "**[Get]**" button to view.

Click "**[Clear]**" button to clear data in the editor.

### HTML Editor
Edit your post in the editor then click "**[Set]**" button to save HTML data to the active cell.

You can also load the HTML content from a Google Docs file. Just enter the Docs Id and click "**[Load]**". If you have the Id somewhere in the active Spreadsheet, select that cell contains the Id, then click button "**[>.<]**" to faster input the Docs Id.

To view HTML data, select the cell that contains HTML then click "**[Get]**" button to view.

Click "**[Clear]**" button to clear data in the editor.


### Sync Rows
Enter the number of row you want all sheets of a Spreadsheet to have, then click "**[Ok]**".


### Taxonomy Editor
To automatic load Taxonomies, create a meta sheet name **\_\_taxonomy\_\_**. See [sample](https://docs.google.com/spreadsheets/d/125NSOvwvOM12WC2D-EhIbxInU_w6EUZyDgOSZwbq9i0/edit#gid=543645756).

To load taxonomies from Spreadsheet, enter the SS id ([sample](https://docs.google.com/spreadsheets/d/19vGV_6uErLyopWuzGaIy-8JPhdzVAVEl68vIDbpvLeI/edit#gid=821321751)) and range, click "**[Load]**". Or enter the Taxonomy SS id ([sample](https://docs.google.com/spreadsheets/d/1vYD41i0fT9MOhbS8Xma6XMyJOHBPwAnfEb5wB1ThS-c/edit?usp=sharing)), click "**[Load]**".

Select Taxonomy from dropdown menu to load Terms. Select terms you want for a post, and click "**[Set]**" to save data to the active cell.

Select a cell contains the Id, then click this button "**[>.<]**" to faster input the Docs Id.

### Hash Generator

Enter your string to be hashed, select a hashing algorithm.

Click "**[Set]**" to save data to the active cell.

## Terms of use
You are free to use this tools in your project. We use third party tools in this project with credit totally belong to the authors. You may may agree with Google Products Terms. You will have responsibility to what you do by using this tool.

## Privacy Policy
We don't collect any of your private information. You may agree to Google Products Privacy Policy.

## Credit
This project was blessed by many great tools from the community. We would like to give special thanks to the author of these tools.
* Google App Scripts.
* JSON Editor: http://www.jsoneditoronline.org/
* TinyMCE Editor: https://tinymce.com
* VueJS: https://vuejs.org/
* jsrsasign: https://kjur.github.io/jsrsasign/

## License
MIT
