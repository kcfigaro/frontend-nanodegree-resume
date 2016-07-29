var bio = {
    "name": "Kyungcheol Chang",
    "contacts": {
        "email": "kcfigaro@gmail.com",
        "mobile": "82)10-7300-1312",
        "github": "https://github.com/kcfigaro",
        "location": "Secho-gu, Seoul"
    },
    "welcomeMessage": "KC's Resume",
    "role": "cloud engineer",
    "skills": ["IaaS", "AWS architecturing", "Openstack engineering", "Process automation"],
    "biopic": "http://placekitten.com/185/145",
    display: function() {
        var data = '%data%';

        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);

        $("#header").append(formattedName, formattedRole, formattedBioPic);

        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);

        $("#topContacts, #footerContacts").append(formattedLocation, formattedMobile, formattedEmail);
        $("#footerContacts").append(formattedGithub);


        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace(data, skill);
                $("#skills").append(formattedSkills);
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "Kyunghee University",
        "degree": "Bachelor",
        "majors": ["Computer Engineering", "Electornic Engineering"],
        "location": "Yeongdeok-dong, Giheung-gu, Yongin-si",
        "dates": "2010",
        "url": ""
    }],
    "onlineCourses": [{
        "title": "Software Defined Networking",
        "school": "Coursera",
        "dates": "2014",
        "url": "https://www.coursera.org/signature/certificate/TAABNZFJ4Y"
    }, {
        "title": "An Introduction to Interactive Programming in Python",
        "school": "Coursera",
        "dates": "2015",
        "url": "https://www.coursera.org/account/accomplishments/verify/C94947TX3E"
    }],
    display: function() {
        education.schools.forEach(function(edu) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", edu.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", edu.degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry:last").append(formattedSchoolNameDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", edu.dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", edu.majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        });

        education.onlineCourses.forEach(function(online) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};

var work = {
    "jobs": [{
        "employer": "KT",
        "title": "Software Engineer of Cloud Computing Service",
        "location": "Omokgyo, Seoul",
        "dates": "Sep 2010 - Dec 2013",
        "description": "Deploy public cloud, Involved in Ucloud infra automation project, Consulted cloud service"
    }, {
        "employer": "SK Planet",
        "title": "Cloud Computing Engineer, T-academy Tech Trainer",
        "location": "264 Pangyo-ro, Seongnam-si, Gyeonggi-do",
        "dates": "Dec 2013 - July 2016",
        "description": "Delivering Private IaaS(using in-house openstack), Delivering SKP products on AWS & other cloud, Teaching Public Cloud class in T academy"
    }, {
        "employer": "NCSOFT",
        "title": "Cloud Solution Architect",
        "location": "12, Daewangpangyo 644, Bundang-gu, Seongnam-si, Gyeonggi-do",
        "dates": "Jun 2016 - in progress",
        "description": "Delivering mobile games using cloud service"
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployeer = HTMLworkEmployer.replace("%data%", job.employeer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployeerTitle = formattedEmployeer + formattedTitle;
            $(".work-entry:last").append(formattedEmployeerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Deployed public cloud",
        "dates": "Sep 2010 - Dec 2012",
        "description": "- Built cloud system using Cloudstack and launched public cloud service.<br>- Coordinated infra deploy management system and developed chef cookbooks.<br>- Created and verified ucloud Linux,Windows server images which is pre-configured operating system of ucloud virtual machines.<br>",
        "images": ["https://ucloudbiz.olleh.com/images/c_common/img_console_title01.gif", "https://cloudstack.apache.org/images/new-logo-sm.png"]
    }, {
        "title": "Involved in Ucloud infra automation project",
        "dates": "Sep 2010 - Dec 2013",
        "description": "- Participated in chef engineering and handling auto-deployment management system.<br>- Integrated automation system on ucloud monitoring (Nagios, Cacti and Collectd).<br>",
        "images": ["https://quickleft.com/wp-content/uploads/OC_Chef_Logo_small.jpg"]
    }, {
        "title": "Consulted cloud service",
        "dates": "Dec 2012 - Dec 2013",
        "description": "- Built Virtual Private Zone for tech-driven company and support VPC engineering.<br>- Designed financial firm private cloud infra with cloudstack and handover.<br>",
        "images": []
    }, {
        "title": "Delivering Private Cloud",
        "dates": "Mar 2014 - July 2016",
        "description": "- Design SKP in-house openstack architecture and cloud governance.<br>- Integrate openstack juno into SKP dev, stage and prodution environment and replace virtualization software solution and physical machine.<br>- Archived TCO reduction in infra operations with in-house cloud system.  (approx. 2K VM capacity)<br>",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/The_OpenStack_logo.svg/150px-The_OpenStack_logo.svg.png"]
    }, {
        "title": "Delivering SKP products on AWS & other cloud",
        "dates": "Dec 2013 - July 2016",
        "description": "- Design AWS VPC with SKP network connectivity and establish SKP public cloud infra management policies include security, resource management and monitoring.<br>- Design product infra (Musicmate, LauncherPlanet and etc) to launch globally.<br>",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/200px-AmazonWebservices_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/200px-Microsoft_Azure_Logo.svg.png"]
    }, {
        "title": "Teaching Public Cloud class in T academy",
        "dates": "Aug 2014 - July 2016",
        "description": "- Teach essential of public cloud such as AWS VPC architecting, cloud design pattern and etc.<br>- One day class bimonthly from July 2014 and attend approx. 20 students per class.<br>",
        "images": ["https://tacademy.sktechx.com/img/front/common/t_logo.jpg"]
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    console.log(x, y);
    logClicks(x, y);
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
