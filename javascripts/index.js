function GetScreenCordinates(obj) {
        var p = {};
        p.x = obj.offsetLeft;
        p.y = obj.offsetTop;
        while (obj.offsetParent) {
            p.x = p.x + obj.offsetParent.offsetLeft;
            p.y = p.y + obj.offsetParent.offsetTop;
            if (obj == document.getElementsByTagName("body")[0]) {
                break;
            }
            else {
                obj = obj.offsetParent;
            }
        }
        return p;
    }

//bottom box position
function resize_bottombox(){
var kk = document.getElementById("id_bottom_wrap").offsetHeight;
document.getElementById("bottombox").style.height=kk+"px";
}

function pos_transbox(){
var kk = document.getElementById("id_menu").offsetHeight;
document.getElementById("id_trans_box").style.top=String(Number(kk)-15)+"px";
var kk = document.getElementById("featured").offsetHeight;
document.getElementById("id_trans_box").style.height=String(Number(kk)+30)+"px";
var kk = document.getElementById("featured").offsetWidth;
document.getElementById("id_trans_box").style.width=String(Number(kk)+30)+"px";
var kk = document.getElementById("id_page_wrap").offsetLeft;
document.getElementById("id_trans_box").style.left=kk+"px";
}

//navigator bar color	
function mouseOver(id,color)
{   
var dc=document.getElementById(id);
dc.style.background="#7094FF";
}
function mouseOut(id,color)
{  
var dc=document.getElementById(id);
dc.style.background="transparent";
}