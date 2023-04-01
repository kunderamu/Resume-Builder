const workbutton = document.querySelector(".work-button");
const workList = document.querySelector(".work-list");
workbutton.addEventListener("click", work);

const skillsbutton = document.querySelector(".skills-button");
const skillsList = document.querySelector(".skills-list");
skillsbutton.addEventListener("click", skills);

const educationbutton = document.querySelector(".education-button");
const educationList = document.querySelector(".education-list");
educationbutton.addEventListener("click",education);

const projectbutton = document.querySelector(".projects-button");
const projectlist = document.querySelector(".projects-list");
projectbutton.addEventListener("click",projects);

const awardsbutton = document.querySelector(".awards-button");
const awardslist = document.querySelector(".awards-list");
awardsbutton.addEventListener("click",awards);

function education(e) {
    e.preventDefault();
  
    const educationDiv = document.createElement("div");
    educationDiv.classList.add("container");
  
    const graduationName = document.createElement("input");
    graduationName.className = "graduation";
    graduationName.placeholder = "graduation";
    educationDiv.appendChild(graduationName);
    
    const year= document.createElement("input");
    year.className = "graduationyear";
    year.placeholder = "year";
    educationDiv.appendChild(year);

    const boardname= document.createElement("input");
    boardname.className = "board";
    boardname.placeholder = "board name";
    educationDiv.appendChild(boardname);

    educationList.appendChild(educationDiv);
  }

  function skills(e) {
    e.preventDefault();
  
    const skillsDiv = document.createElement("div");
    skillsDiv.classList.add("container");
  
    const skill = document.createElement("input");
    skill.className = "skill";
    skill.placeholder = "Type Skill";
    skillsDiv.appendChild(skill);
  
    skillsList.appendChild(skillsDiv);
  }

  function projects(e) {
    e.preventDefault();
  
    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("container");
  
    const year = document.createElement("input");
    year.className = "projectyear";
    year.placeholder = "year";
    projectsDiv.appendChild(year);
    
    const title= document.createElement("input");
    title.className = "title";
    title.placeholder = "title";
    projectsDiv.appendChild(title);

    const description= document.createElement("input");
    description.className = "description";
    description.placeholder = "description";
    projectsDiv.appendChild(description);
    
    projectlist.appendChild(projectsDiv);

  }


function work(e) {
  e.preventDefault();

  const workDiv = document.createElement("div");
  workDiv.classList.add("container");

  const company = document.createElement("input");
  company.className = "name";
  company.placeholder = "Company Name";
  workDiv.appendChild(company);
  const year = document.createElement("input");
  year.className = "year";
  year.placeholder = "Year";
  workDiv.appendChild(year);
  const position = document.createElement("input");
  position.className = "position";
  position.placeholder = "Position";
  workDiv.appendChild(position);

  workList.appendChild(workDiv);
}



  function awards(e) {
    e.preventDefault();
  
    const awardsDiv = document.createElement("div");
    awardsDiv.classList.add("container");
  
    const name = document.createElement("input");
    name.className = "awardname";
    name.placeholder = "award name";
    awardsDiv.appendChild(name);
    
    const year= document.createElement("input");
    year.className = "awardyear";
    year.placeholder = "award year";
    awardsDiv.appendChild(year);
    
    awardslist.appendChild(awardsDiv);

  }

  function getData() {
  var fullname = document.querySelector(".fullname").value;
  var number = document.querySelector(".number").value;
  var email = document.querySelector(".email").value;
  var address = document.querySelector(".address").value;

  localStorage.setItem("txtValue1", fullname);
  localStorage.setItem("txtValue2", number);
  localStorage.setItem("txtValue3", email);
  localStorage.setItem("txtValue4", address);

  var graduation = document.querySelector(".graduation").value;
  var graduationyear = document.querySelector(".graduationyear").value;
  var board = document.querySelector(".board").value;

  localStorage.setItem("txtValue5", graduation);
  localStorage.setItem("txtValue6", graduationyear);
  localStorage.setItem("txtValue7", board);

  var skill = document.querySelector(".skill").value;

  localStorage.setItem("txtValue8", skill);

  var projectyear = document.querySelector(".projectyear").value;
  var title = document.querySelector(".title").value;
  var description = document.querySelector(".description").value;

  localStorage.setItem("txtValue9", projectyear);
  localStorage.setItem("txtValue10", title);
  localStorage.setItem("txtValue11", description);

  var name = document.querySelector(".name").value;
  var year = document.querySelector(".year").value;
  var position = document.querySelector(".position").value;

  localStorage.setItem("txtValue12", name);
  localStorage.setItem("txtValue13", year);
  localStorage.setItem("txtValue14", position);

  var awardname = document.querySelector(".awardname").value;
  var awardyear = document.querySelector(".awardyear").value;

  localStorage.setItem("txtValue15",  awardname);
  localStorage.setItem("txtValue16", awardyear);

  var linkedin = document.querySelector(".linkedin").value;
  var github = document.querySelector(".github").value;

  localStorage.setItem("txtValue17", linkedin);
  localStorage.setItem("txtValue18", github);



  }
