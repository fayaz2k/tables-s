var table;
var tblstrt;
var tblend;

table = +prompt("Table's","Enter The Table U Want");
        
tblstrt = +prompt("Table's","Enter The Table U Want to Start Fr0m");
tblend = +prompt("Table's","Enter The Table U want to End on");



var i;
for(i= tblstrt; i<=tblend; i++)
{ 
document.write(table + " * " + i + " = "+ table * i + '<br/>' ); 

} 