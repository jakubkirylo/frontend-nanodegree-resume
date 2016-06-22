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

var bio = {
	name: "Jakub",
	lastname: "Kirylo",
	role: "Programmer",
	pictureURL: "http://farm4.static.flickr.com/3114/2524849923_1c191ef42e.jpg",
	welcomeMsg: "Hello!",
	skills: ["C#", "HTML", "CSS", "SQL"]
};

$("#main").append(bio.name);

var work = new Object();
work.current = "Junior SQL programmer";
work.employer = "Brandbank";
work.years = 0;
work.city = "Warsaw";

function education(name,years,city)
{
	this.name = name;
	this.years = years;
	this.city = city;
}

;
var myEdycation = new education("WWSI",1,"Warsaw");

$("#main").append(work["current"]);
$("#main").append(myEdycation.name);