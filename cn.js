(function(d){
  const BASE = "https://classroom.google.com/u/0/share?";
  const title = window.location.host.split(".")[0];
  
  const classroomLink = d.createElement('a')
  classroomLink.href = `${BASE}title=${title}&url=${window.location.origin}`;
  classroomLink.target = "_blank"
  
  const logo = d.createElement('img')
  logo.src = "https://codenation.org/wp-content/themes/codenation/src/public/img/ico-code-nation.ico"
  logo.style.width = "10vw"
  
  classroomLink.style.visibility = "hidden";
  
  
  const container = d.createElement('div')
  container.style.position = "absolute"
  container.style.bottom = "2vh"
  container.style.right = "5vw"
  
  container.addEventListener("mouseenter", ()=>{
    classroomLink.style.visibility = "visible"
  })
  container.addEventListener("mouseleave", ()=>{
    classroomLink.style.visibility = "hidden"
  })
  
  classroomLink.appendChild(logo)
  container.appendChild(classroomLink)
  d.body.appendChild(container)
  
})(document)