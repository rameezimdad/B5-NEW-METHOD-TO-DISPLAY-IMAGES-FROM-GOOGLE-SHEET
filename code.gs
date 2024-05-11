
// Become Our Vip Member And Acess All of Our Google Sheets
// Price for 6 Months is 50 USD 
// Https://wa.me/923224083545
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').setTitle('Image Uploader');
}
function uploadFileToDrive(data, filename, name) {
  var folder = DriveApp.getFolderById('//// Folder Id ////'); // Replace with your folder ID
  var blob = Utilities.newBlob(Utilities.base64Decode(data), 'image/jpeg', filename);
  var file = folder.createFile(blob);
  var fileId = file.getId();
  var fileUrl = 'https://lh3.google.com/u/0/d/' + fileId;
  var sheet = SpreadsheetApp.openById('//// Sheet ID //////').getActiveSheet(); // Replace with your sheet ID
  sheet.appendRow([name ,filename, fileUrl]);
  return fileUrl;
}


