var formattedName =HTMLheaderName.replace("%data%", "Sadegh Shaikhi");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$('#header').prepend( formattedName );
$('#header').append( formattedRole );