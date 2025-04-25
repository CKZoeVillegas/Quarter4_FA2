function generateTable() {
  
  var start = parseInt(document.getElementById("start").value);
  
  var end = parseInt(document.getElementById("end").value);
  
  var output = document.getElementById("tableOutput");
  
  output.innerHTML = "";

  if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > 10 || end > 10) {
    
    alert("Please enter numbers between 2 and 10");
    
    return;
    
  }

  var table = "<table>";

  for (var i = 1; i <= start; i++) {
    
    table += "<tr>";
    
    for (var j = 1; j <= end; j++) {
      
      table += " <td> " + (i * j) + " </td> ";
      
    }

  
    table += " /tr> ";
    
  }

  table += " </table> ";
  
  output.innerHTML = table;
  
}
