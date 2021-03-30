window.onload = () =>{
    let show_mobile_menu = true;
    document.getElementById('mobile_icon_nav').onclick = function(){
        let status = "none";
        if(show_mobile_menu) status = "grid";
        show_mobile_menu = !show_mobile_menu;

        document.getElementsByClassName('div_nav_list')[0].style.display = status;
   
    };
}