var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('navbar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-80px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});

function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
    btn1 = document.getElementsByClassName('one');
    btn2 = document.getElementsByClassName('two');
    btn3 = document.getElementsByClassName('three');
    if(tabName == 'one'){
        btn1[0].classList.remove('untabbed');
        btn1[0].classList.add('tabbed');

        btn2[0].classList.remove('tabbed');
        btn2[0].classList.add('untabbed');

        btn3[0].classList.remove('tabbed');
        btn3[0].classList.add('untabbed');
    }
    if(tabName == 'two'){
        btn2[0].classList.remove('untabbed');
        btn2[0].classList.add('tabbed');

        btn1[0].classList.remove('tabbed');
        btn1[0].classList.add('untabbed');

        btn3[0].classList.remove('tabbed');
        btn3[0].classList.add('untabbed');
    }
    if(tabName == 'three'){
        btn3[0].classList.remove('untabbed');
        btn3[0].classList.add('tabbed');

        btn2[0].classList.remove('tabbed');
        btn2[0].classList.add('untabbed');

        btn1[0].classList.remove('tabbed');
        btn1[0].classList.add('untabbed');
    }
}
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



document.querySelectorAll(".nav-link").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    document
      .querySelectorAll(".nav-link")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
  })
);
