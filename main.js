const filterContainer = document.querySelector('.gallery-filter');
const galleryItems = document.querySelectorAll(".gallery-item");
const shareButton = document.querySelectorAll('.share-btn');
const activeBar = document.querySelector('.social-container');
const sideBar = document.querySelector('.side-bar');
const main = document.querySelector('main');

console.log(activeBar);
console.log(main);




 
filterContainer.addEventListener("click", (event) =>{
    
    if (event.target.classList.contains("baller")) {
        console.log(true);
      // deactivate existing active "filter-item"
        filterContainer.querySelector(".active").classList.remove('active');
      // activate new "filter-item"
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute('data-filter');


        galleryItems.forEach((item) =>{
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove('hide');
             item.classList.add('show');
             
        }
        else{
            item.classList.remove('show');
            item.classList.add('hide');
        }
         });
    }
});

$(document).ready(function(){
  //jquery for toggle sub menus
  $(".sub-btn").click(function(){
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate"); 
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function(){
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
    document.getElementById('popup').style.display = 'none';

  });
  //Active cancel button
  $(".close-btn").click(function(){
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
  $(".side-bar").removeClass("active");
  $(".menu-btn").css("visibility", "visible");
};

function closePopup() {
  document.getElementById('popup').style.display = 'none';
};