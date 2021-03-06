var xlsx = require('xlsx');
var fs = require('fs');

// 1. Create an new workbook. 
var workbook = xlsx.utils.book_new();

// 2. Prepare the data to be written.
var data = [{
    "Firstname": "Shailesh",
    "Lastname": "Kumar",
    "Age": "25",
    "Sex": "Male"  
}
];

// 3. Create and worksheet. 
var worksheet = xlsx.utils.json_to_sheet(data);

// 4.  Add the worksheet to the workbook and give it an name. 
xlsx.utils.book_append_sheet(workbook, worksheet, "New Sheet");

// 5. Write to the file.
xlsx.writeFile(workbook, "FirstExcel.xlsx");

// 6. Convert the excel to a CSV.
var csvData = xlsx.utils.sheet_to_csv(worksheet);

// 7. Write the CSV file.
fs.writeFileSync("FirstCsv.csv", csvData);