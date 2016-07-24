/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "skills" : ["cloud","web"]
}

var work = {
  "jobs" : [
    {
      "employeer" : "kt",
      "title" : "Cloud system engineer",
      "date" : "Sep 2010 - Dec 2013",
      "descrption": "cloud engineer"
    },
    {
      "employeer" : "skp",
      "title" : "Cloud service engineer",
      "date" : "Dec 2013 - July 2016",
      "descrption": "cloud engineer"
    },
    {
      "employeer" : "ncsoft",
      "title" : "Cloud service engineer",
      "date" : "Jun 2016 - Current",
      "descrption": "cloud engineer"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", "kc");

var formattedRole = HTMLheaderRole.replace("%data%", "engineer");


$("#header").append(formattedName);
$("#header").append(formattedRole);
// $("#header").append(bio.skills.length);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
}
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployeer = HTMLworkEmployer.replace("%data%", work.jobs[job].employeer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployeerTitle = formattedEmployeer + formattedTitle;
    $(".work-entry:last").append(formattedEmployeerTitle);
    var formattedDates = HTMLworkDates.replace("%data", work.jobs[job].date);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDates.replace("%data", work.jobs[job].descrption);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationFinder() {
  var locations = [];

  for (var job in work.jobs) {
    locations.push(work.jobs[job].location);
  }

  return locations;
}

 // $("#header").append(kc);
