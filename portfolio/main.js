let links = document.getElementsByClassName('proj');

for (let i = 0; i<links.length; i++) {
    links[i].onmouseover = function() {
        var iconPos = links[i].getBoundingClientRect();
        let tooltip = document.getElementsByClassName('tooltip');
        let too = tooltip[i];
        too.style.opacity = "1";
        too.style.visibility = "visible";
        too.style.top = "100%";
        }
    links[i].onmouseout = function() {
        let tooltip = document.getElementsByClassName('tooltip');
        let too = tooltip[i];
        too.style.opacity = "0";
        too.style.visibility = "hidden";
        too.style.top = "0";
    };
    
}


  