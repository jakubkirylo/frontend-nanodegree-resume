/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
$("#main").append("Jakub Kiryło");


var awesomeThoughts = "My name is J and I'm awesome";

var funThouhts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThouhts);
*/
var formattedRole = HTMLheaderRole.replace("%data%","Junior C#/SQL Programmer");
$("#header").append(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", "Jakub Kiryło");
$("#header").prepend(formattedName);

var skills = ["awesomeness","programming","team leading"];
$("#main").append(skills);