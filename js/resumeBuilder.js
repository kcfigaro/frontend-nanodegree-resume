/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Kyungcheol Chang",
  "contacts" : {
    "email" : "kcfigaro@gmail.com",
    "mobile" : "82)10-7300-1312",
    "github" : "https://github.com/kcfigaro",
    "location" : "Secho-4dong, Secho-gu, Seoul"
  },
  "welcomeMessage" : "KC's Resume",
  "role" : "cloud engineer",
  "skills" : ["IaaS", "AWS architecturing", "Openstack engineering", "Process automation"],
  // "pic" : "images/197x148.gif",
  "pic" : "http://placekitten.com/185/145",
  "display" : displayBio
}

var education = {
  "schools" : [
    {
      "name" : "Kyunghee University",
      "degree" : "Bachelor",
      "major" : "Computer Engineering",
      "location" : "Yeongdeok-dong, Giheung-gu, Yongin-si",
      "dates" : "2010"
    },
    {
      "name" : "Kyunghee University",
      "degree" : "Bachelor",
      "major" : "Electornic Engineering",
      "location" : "Yeongdeok-dong, Giheung-gu, Yongin-si",
      "dates" : "2010"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Software Defined Networking",
      "school" : "Coursera",
      "dates" : "2014",
      "url" : "https://www.coursera.org/signature/certificate/TAABNZFJ4Y"
    },
    {
      "title" : "An Introduction to Interactive Programming in Python",
      "school" : "Coursera",
      "dates" : "2015",
      "url" : "https://www.coursera.org/account/accomplishments/verify/C94947TX3E"
    }
  ],
  "display" : displayEducation
}

var work = {
  "jobs" : [
    {
      "employeer" : "KT",
      "title" : "Software Engineer of Cloud Computing Service",
      "location" : "Omokgyo, Seoul",
      "date" : "Sep 2010 - Dec 2013",
      "descrption": "Deploy public cloud, Involved in Ucloud infra automation project, Consulted cloud service"
    },
    {
      "employeer" : "SK Planet",
      "title" : "Cloud Computing Engineer, T-academy Tech Trainer",
      "location" : "264 Pangyo-ro, Seongnam-si, Gyeonggi-do",
      "date" : "Dec 2013 - July 2016",
      "descrption": "Delivering Private IaaS(using in-house openstack), Delivering SKP products on AWS & other cloud, Teaching Public Cloud class in T academy"
    },
    {
      "employeer" : "NCSOFT",
      "title" : "Cloud Solution Architect",
      "location" : "12, Daewangpangyo 644, Bundang-gu, Seongnam-si, Gyeonggi-do",
      "date" : "Jun 2016 - in progress",
      "descrption": "Delivering mobile games using cloud service"
    }
  ],
  "display" : displayWork
}

var projects = {
  "projects" : [
    {
      "title" : "Deployed public cloud",
      "date" : "Sep 2010 - Dec 2012",
      "descrption" : "- Built cloud system using Cloudstack and launched public cloud service.<br>- Coordinated infra deploy management system and developed chef cookbooks.<br>- Created and verified ucloud Linux,Windows server images which is pre-configured operating system of ucloud virtual machines.<br>"
    },
    {
      "title" : "Involved in Ucloud infra automation project",
      "date" : "Sep 2010 - Dec 2013",
      "descrption" : "- Participated in chef engineering and handling auto-deployment management system.<br>- Integrated automation system on ucloud monitoring (Nagios, Cacti and Collectd).<br>"
    },
    {
      "title" : "Consulted cloud service",
      "date" : "Dec 2012 - Dec 2013",
      "descrption" : "- Built Virtual Private Zone for tech-driven company and support VPC engineering.<br>- Designed financial firm private cloud infra with cloudstack and handover.<br>"
    },
    {
      "title" : "Delivering Private Cloud",
      "date" : "Mar 2014 - July 2016",
      "descrption" : "- Design SKP in-house openstack architecture and cloud governance.<br>- Integrate openstack juno into SKP dev, stage and prodution environment and replace virtualization software solution and physical machine.<br>- Archived TCO reduction in infra operations with in-house cloud system.  (approx. 2K VM capacity)<br>"
    },
    {
      "title" : "Delivering SKP products on AWS & other cloud",
      "date" : "Dec 2013 - July 2016",
      "descrption" : "- Design AWS VPC with SKP network connectivity and establish SKP public cloud infra management policies include security, resource management and monitoring.<br>- Design product infra (Musicmate, LauncherPlanet and etc) to launch globally.<br>"
    },
    {
      "title" : "Teaching Public Cloud class in T academy",
      "date" : "Aug 2014 - July 2016",
      "descrption" : "- Teach essential of public cloud such as AWS VPC architecting, cloud design pattern and etc.<br>- One day class bimonthly from July 2014 and attend approx. 20 students per class.<br>"
    }
  ],
  "display" : displayProject
}

function displayBio() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.pic);

  $("#header").append(formattedName);
  $("#header").append(formattedRole);
  $("#header").append(formattedBioPic);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkills);
    }
  }

}

displayBio();

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployeer = HTMLworkEmployer.replace("%data%", work.jobs[job].employeer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployeerTitle = formattedEmployeer + formattedTitle;
    $(".work-entry:last").append(formattedEmployeerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descrption);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

function displayEducation() {

    for (edu in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
      $(".education-entry:last").append(formattedSchoolNameDegree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

    for (online in education.onlineCourses) {

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
      $(".education-entry:last").append(formattedOnlineTitleSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
}

displayEducation();

// projects.display = function() {
function displayProject() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descrption);
      $(".project-entry:last").append(formattedProjectDescription);

    }
}

// projects.display();
displayProject();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  console.log(x,y);
  logClicks(x,y);
});

// function locationFinder() {
//   var locations = [];
//
//   for (var job in work.jobs) {
//     locations.push(work.jobs[job].location);
//   }
//
//   return locations;
// }

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function displayConnect() {
  // $("#footerContacts").append(HTMLcontactGeneric);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
}

displayConnect();

// function inName(name) {
//   inname = name.toLocaleUpperCase();
//   console.log(inname);
//   return inname;
// }
