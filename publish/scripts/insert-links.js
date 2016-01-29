
/*
 * FUNCTIONS
 */

function insertBoth(links, letter) {

    var items = "<tr>"; var i;
    for (i = 0, j=1; i < links.length; i++, j++)
    {
         var index = "<span class=colorblack>" + letter + "." + j.toString() + "</span>";
         var href = "<a class=goto href=" + links[i][0] + " target=&quot;_blank&quot;>"
                  + links[i][1] + "</a>";
         items += "<td width=50px>" + index + "</td>";
         items += "<td>" + href  + "</td></tr>";
    }
    return items;
}

/*
 * DATA
 */

var campers_links = 
[
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=1",
     "List All"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=td",
     "Campers Home"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=dr&rid=516&rl=hir",
     "Campers Home for a Selected Camper"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=29",
     "All Campers, Parents, E-mail"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=51",
     "All Campers, with Med Info"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=52",
     "Campers Accepted, View/Edit Med Information"], 
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=54",
     "Campers Accepted, alphabetized with e-mail addresses"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=32",
     "Campers Accepted, grouped by Camper Care Group"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=50",
     "Campers Accepted, grouped by Dorm Room"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=48",
     "Campers Accepted, with Med Info"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=61",
     "Select Specific Camper, with Med Info"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=61&nv=1&v0=516",
     "Display Specific Camper, with Med Info"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=GenNewRecord",
     "Add a Camper's Med to the Medications Database"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=39",
     "Access/View Submitted Camper Profile Forms"],
    ["https://www.quickbase.com/db/bi8b6igq7?a=q&qid=24",
     "Alphabetical list with contact info and camper care group"],
];

var meds_links = 
[
    ["https://www.quickbase.com/db/bi8b6igw7?a=td",
     "Meds Home"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=q&qid=1",
     "List All"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=q&qid=9",
     "List All Aide-Administered Meds, grouped by Camper"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=q&qid=8",
     "List All Health Supervisor-Administered Meds, grouped by Camper"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=q&qid=6",
     "List All, grouped by Camper"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=q&qid=7",
     "List Meds for a specific camper"],
    ["https://www.quickbase.com/db/bi8b6igw7?a=q&qid=10&nv=1&v0=516",
     "Update Meds for a specific camper"],
];

var med_schedule_links = 
[
    ["https://www.quickbase.com/db/bi8b6igxf?a=td",
     "Med Schedule Items Home"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=31",
     "List All for CSV Export"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=1",
     "List All, grouped by Camper and by Day-of-Week"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=15",
     "List All, sorted by time-of-day (FRIDAY meds)"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=30",
     "List HS-dispensed meds (AS NEEDED meds)"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=28",
     "List HS-dispensed meds yet to be administered (FRIDAY meds)"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=22",
     "List LA bus riders afternoon meds, sorted by time-of-day (SATURDAY meds)"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=17",
     "List Med Schedule for a particular camper"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=19",
     "List Med Schedule for a particular Camper, grouped by Day-of-Week"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=18",
     "List Total Dosages for a particular camper"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=32",
     "List Total Dosages for each camper - LA bus riders"],
    ["https://www.quickbase.com/db/bi8b6igxf?a=q&qid=21",
     "List Total Dosages for each camper - summary only"],
];

var aides_links = 
[
    ["https://www.quickbase.com/db/bi8b6igxw?a=q",
     "List of All Aides with All Info for Each Aide"],
    ["https://www.quickbase.com/db/bi8b6igxw?a=dr&r=xu&rl=pyj",
     "All Info for a Particular Aide"],
];

var dorm_care_links = 
[
    ["https://www.quickbase.com/db/bi8b6igx7?a=td",
     "Dorm + Care Groups Home"],
    ["https://www.quickbase.com/db/bi8b6igx7?a=q&qid=1",
     "List All"],
];

var responsibilities_links = 
[
    ["https://www.quickbase.com/db/bi8b6igye?a=q",
     "Responsibilities Home"],
];

var suggestions_links = 
[
    ["https://www.quickbase.com/db/bi8b6igyp?a=q",
     "Ideas/Suggestions Home"],
];

var aide_assessment_links = 
[
    ["https://www.quickbase.com/db/bi8b6igyr?a=q",
     "Aide Assessment Forms Home"],
];

var church_contacts_links = 
[
    ["https://www.quickbase.com/db/bi8b6igyr?a=q",
     "Church Contacts Home"],
];

var scholarship_requests_links = 
[
    ["https://www.quickbase.com/db/bi8b6igy4?a=q",
     "Scholarship Requests Home"],
];

var heroku_links = 
[
    ["https://damp-anchorage-5607.herokuapp.com/",
     "Update a Camper's Med Schedule"],
    ["https://damp-anchorage-5607.herokuapp.com/campers/new",
     "Select a Camper in Order to Update Campers Med Schedule"],
    ["https://damp-anchorage-5607.herokuapp.com/campers/110/meds/new",
     "Select a Med in Order to Update Campers Med Schedule"],
    ["https://damp-anchorage-5607.herokuapp.com/meds/211/edit",
     "Based On Camper and Med, Update Campers Med Schedule"],
    ["http://stark-retreat-1229.herokuapp.com/meds?usr=special&pwd=camp",
     "Display/Print Med Forms"],
    ["http://stark-retreat-1229.herokuapp.com/meds/printform?dest=bvsatow@hpeprint.com"+
         "&year=2015&usr=special&pwd=camp&refresh=true&camperid=548",
     "Display/Print Med Forms for Particular Camper"],
];

/*
  resources :campers, :shallow => true do
    resources :meds, :shallow => true

These are the acceptable routes for https://damp-anchorage-5607.herokuapp.com/

    camper_meds GET    /campers/:camper_id/meds(.:format)     meds#index
                POST   /campers/:camper_id/meds(.:format)     meds#create
 new_camper_med GET    /campers/:camper_id/meds/new(.:format) meds#new         X
       edit_med GET    /meds/:id/edit(.:format)               meds#edit        X
            med GET    /meds/:id(.:format)                    meds#show
                PATCH  /meds/:id(.:format)                    meds#update
                PUT    /meds/:id(.:format)                    meds#update
                DELETE /meds/:id(.:format)                    meds#destroy
        campers GET    /campers(.:format)                     campers#index
                POST   /campers(.:format)                     campers#create
     new_camper GET    /campers/new(.:format)                 campers#new      X
    edit_camper GET    /campers/:id/edit(.:format)            campers#edit
         camper GET    /campers/:id(.:format)                 campers#show
                PATCH  /campers/:id(.:format)                 campers#update
                PUT    /campers/:id(.:format)                 campers#update
                DELETE /campers/:id(.:format)                 campers#destroy
           root GET    /                                      qb_auths#new
*/


/*
 * INSERT HTML CODE - innerHTML is the content between the tag open and close
 */

document.getElementById("campers").innerHTML              = insertBoth(campers_links, "1");
document.getElementById("meds").innerHTML                 = insertBoth(meds_links, "2");
document.getElementById("med_schedule").innerHTML         = insertBoth(med_schedule_links, "3");
document.getElementById("aides").innerHTML                = insertBoth(aides_links, "4");
document.getElementById("dorm_care").innerHTML            = insertBoth(dorm_care_links, "5");
document.getElementById("responsibilities").innerHTML     = insertBoth(responsibilities_links, "6");
document.getElementById("suggestions").innerHTML          = insertBoth(suggestions_links, "7");
document.getElementById("aide_assessment").innerHTML      = insertBoth(aide_assessment_links, "8");
document.getElementById("church_contacts").innerHTML      = insertBoth(church_contacts_links, "9");
document.getElementById("scholarship_requests").innerHTML = insertBoth(scholarship_requests_links, "10");
document.getElementById("heroku").innerHTML               = insertBoth(heroku_links, "11");

























/*
 * OBSOLETE
 */

if (false) {

function insertReferences(links, texts) {

    var items = "<tr>"; var i; var letter = "D"
    for (i = 0, j=1; i < links.length; i++, j++)
    {
         var index = "<span class=colorblack>(" + letter + j.toString() + ")</span>";
         var href = "<a class=goto href=" + links[i] + " target=&quot;_blank&quot;>"
                  + texts[i] + "</a>";
         items += "<td>" + index + "</td>";
         items += "<td>" + href  + "</td></tr>";
    }
    return items;
}

var campers1 = [
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=1",
    "https://www.quickbase.com/db/bi8b6igq7?a=td",
    "https://www.quickbase.com/db/bi8b6igq7?a=dr&rid=516&rl=hir",

    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=29",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=51",

    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=52",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=54",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=32",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=50",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=48",

    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=61",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=61&nv=1&v0=516",
    "https://www.quickbase.com/db/bi8b6igw7?a=GenNewRecord",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=39",
    "https://www.quickbase.com/db/bi8b6igq7?a=q&qid=24",
];

var campers2 = [
    "List All",
    "Campers Home",
    "Campers Home for a Selected Camper",

    "All Campers, Parents, E-mail",
    "All Campers, with Med Info",

    "Campers Accepted, View/Edit Med Information", 
    "Campers Accepted, alphabetized with e-mail addresses",
    "Campers Accepted, grouped by Camper Care Group",
    "Campers Accepted, grouped by Dorm Room",
    "Campers Accepted, with Med Info",

    "Select Specific Camper, with Med Info",
    "Display Specific Camper, with Med Info",
    "Add a Camper's Med to the Medications Database",
    "Access/View Submitted Camper Profile Forms",
    "Alphabetical list with contact info and camper care group",
];

document.getElementById("campers").innerHTML = insertReferences(campers1, campers2);
}

