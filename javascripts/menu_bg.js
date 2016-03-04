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

//box position
function resize_bottombox_publication(){
var kk = document.getElementById("id_bottom_wrap").offsetHeight;
document.getElementById("bottombox").style.height=kk+"px";
var kk = document.getElementById("id_top_wrap").offsetHeight;
document.getElementById("topbox").style.height=kk+"px";
document.getElementById("topgradient").style.top=kk+"px";
}

//make the left column and right column have the same length
function align_column(){
var height_year = document.getElementById("id_years").offsetHeight;
var height_paper = document.getElementById("id_papers").offsetHeight;
if(height_year>height_paper)
{
document.getElementById("id_papers").style.height=height_year+"px";
}
if(height_paper>height_year)
{
document.getElementById("id_years").style.height=height_paper+"px";
}
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