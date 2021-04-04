window.onload = () =>{
    let show_mobile_menu = true;
    document.getElementById('mobile_icon_nav').onclick = function(){
        let status = "none";
        let symbol = "&#9776;";
        if(show_mobile_menu){
            status = "grid";
            symbol = "&#10005;";
        }
        show_mobile_menu = !show_mobile_menu;
        document.getElementById('mobile_icon_nav').innerHTML = symbol;
        document.getElementsByClassName('div_nav_list')[0].style.display = status;

    };


}