/**
 * Created by MoNeY_Pro on 2016/1/31.
 */
var tab_undergrad = ["��������", ""];
var tab_grad = ["�о�����", ""];
var tab_sr = ["���岿", ""];
var tab_cs = ["���缼����", ""];
var tab_pr = ["������", ""];
var tab_pub = ["������", ""];
var tab_sa = ["ѧ������", ""];
var tab_tre = ["����", ""];
var tab_it = ["���缼����", ""];
var tab_hr = ["������Դ��", ""];
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