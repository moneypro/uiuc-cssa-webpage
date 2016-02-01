/**
 * Created by MoNeY_Pro on 2016/1/31.
 */
var tab_undergrad = ["本科生部", ""];
var tab_grad = ["研究生部", ""];
var tab_sr = ["文体部", ""];
var tab_cs = ["网络技术部", ""];
var tab_pr = ["外联部", ""];
var tab_pub = ["宣传部", ""];
var tab_sa = ["学生事务部", ""];
var tab_tre = ["财务部", ""];
var tab_it = ["网络技术部", ""];
var tab_hr = ["人力资源部", ""];
var tab_pho = ["UIUC Photography", ""];
var tab_dance = ["ImagiNation", ""];
var tab_jf = ["Jasmine Field", ""];

var getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return "";
};

function fill(arr) {
    document.getElementsByTagName("division_name").innerHTML += arr[0];
    document.getElementById("intro").innerHTML = arr[1];
    //TODO: Pics.
}

function main() {
    switch (getQueryString('d')) {
        case "tab_undergrad":
            break;
        case "tab_grad":
            break;
        case "tab_sr":
            break;
        case "tab_cs":
            break;
        case "tab_pr":
            break;
        case "tab_pub":
            break;
        case "tab_sa":
            break;
        case "tab_tre":
            break;
        case "tab_it":
            break;
        case "tab_hr":
            break;
        case "tab_pho":
            break;
        case "tab_dance":
            break;
        case "tab_jf":
            break;


        //</ul>
        //</li>
        //<li class='has-sub'><a href='#'>Clubs<span id='tab_sub'></span></a>
        //<ul>
        //<li><a href='#'>UIUC Photography<span id='tab_pho'></span></a></li>
        //<li><a href='#'>ImagiNation<span id='tab_dance'></span></a></li>
        //<li><a href='#'>Jasmine Field<span id='tab_jf'></span></a></li>
        default:
            break
    }
}