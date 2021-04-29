//Movment Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector('.title');
const icon = document.querySelector('.icon');
const hire = document.querySelector('.hire button');
const discription = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving Animation Event 
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation IN
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    //  popout
    title.style.transform = "translateZ(150px)";
    icon.style.transform = "translateZ(200px) rotateZ(-45deg)";
    hire.style.transform = "translateZ(75px)";
    discription.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";

});



//Animation Out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    icon.style.transform = "translateZ(0px) rotateZ(0deg)";
    hire.style.transform = "translateZ(0px)";
    discription.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";

})