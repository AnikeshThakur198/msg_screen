// Dark Mode
function dark(){
    var el = document.querySelector('body');
    var el1 = document.getElementById("footer");
    var el2 = document.getElementById("sent");
    var el3 = document.getElementById("s-msg1");
    var el4 = document.getElementById("s-msg2");
    var el5 = document.getElementById("list-link1");
    var el6 = document.getElementById("list-link2");
    var el7 = document.getElementById("header");
    var el8 = document.querySelector('.msg-inbox');
    var el9 = document.querySelectorAll('.r-msg > p')

    el.style.background = 'rgba(0, 0, 0, 0.1)';
    el1.style.background = 'rgba(0, 0, 0, 0.6)';
    el2.style.color = 'rgba(0, 0, 0, 0.6)';
    el3.style.background = 'rgba(0, 0, 0, 0.6)';
    el4.style.background = 'rgba(0, 0, 0, 0.6)';
    el5.style.color = 'rgba(0, 0, 0, 0.6)';
    el6.style.color = 'rgba(0, 0, 0, 0.6)';
    el7.style.background = 'rgba(0, 0, 0, 0.6)';
    el8.style.border = '1px solid rgba(0, 0, 0, 0.6)';
    for(e of el9){
        e.style.background = 'rgb(255, 255, 255)';
    }
}