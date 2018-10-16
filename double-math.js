
// 23
//+15
//---
//
var vertical2 = function (count, lf, method) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 90) )+10;
        var b = Math.floor((Math.random() * a) );
        var a1 = Math.floor(a/10);
        var a2 = a % 10;
        var b1 = Math.floor(b/10);
        var b2 = b % 10;

        var verticalForm =
               "<div class='mathborder'>"+
                 "<div class='mathq'>"+
                   "<table class='matht'  >"+
                     "<tr> <td></td>"+
                       "<td></td>"+
                       "<td>"+((a1!=0)?a1:" ")+"</td>" +
                       "<td>"+a2+"</td>" +
                     "</tr><tr>"+
                        "<td>"+method+"</td>"+
                       "<td></td>"+
                       "<td>"+((b1!=0)?b1:" ")+"</td>"+
                       "<td>"+b2+"</td>"+
                     "</tr>"+
                   "</table>"+
                 "</div>"+
              "</div>";

        result += verticalForm + lf;
    }
    return result;
}

// 23
//x 5
//---
//
var vertical2_1 = function (count, lf, method) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 90) )+10;
        var b = Math.floor((Math.random() * 9 + 1) );
        var a1 = Math.floor(a/10);
        var a2 = a % 10;
        var b1 = Math.floor(b/10);
        var b2 = b % 10;

        var verticalForm =
               "<div class='mathborder'>"+
                 "<div class='mathq'>"+
                   "<table class='matht'  >"+
                     "<tr> <td></td>"+
                       "<td></td>"+
                       "<td>"+((a1!=0)?a1:" ")+"</td>" +
                       "<td>"+a2+"</td>" +
                     "</tr><tr>"+
                        "<td>"+method+"</td>"+
                       "<td></td>"+
                       "<td>"+((b1!=0)?b1:" ")+"</td>"+
                       "<td>"+b2+"</td>"+
                     "</tr>"+
                   "</table>"+
                 "</div>"+
              "</div>";

        result += verticalForm + lf;
    }
    return result;
}


var vertical3 = function (count, lf, method) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 960) ) + 40;
        var b = Math.floor((Math.random() * a) );
        var a1 = Math.floor(a/100);   a1 = ((a1!=0)?a1:" ");
        var a2 = Math.floor((a-(a1*100))/10);   a2 = ((a2!=0)?a2:(a1==" "?" ": "0"))
        var a3 = a % 10;
        var b1 = Math.floor(b/100);  b1 = ((b1!=0)?b1:" ");
        var b2 = Math.floor((b-(b1*100))/10); b2 = ((b2!=0)?b2:(b1==" "?" ": "0"))
        var b3 = b % 10;

        var verticalForm =
               "<div class='mathborder'>"+
                 "<div class='mathq'>"+
                   "<table class='matht'  >"+
                     "<tr> <td></td>"+
                       "<td></td>"+
                       "<td>"+a1+"</td>" +
                       "<td>"+a2+"</td>" +
                       "<td>"+a3+"</td>" +
                     "</tr><tr>"+
                       "<td>"+method+"</td>"+
                       "<td></td>"+
                       "<td>"+b1+"</td>" +
                       "<td>"+b2+"</td>" +
                       "<td>"+b3+"</td>" +
                     "</tr>"+
                   "</table>"+
                 "</div>"+
              "</div>";

        result += verticalForm + lf;
    }
    return result;
}

var horizontal = function (count, lf, tag) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 99) + 1 );
        var b = Math.floor((Math.random() * 9 + 1) );
        var question = (''+a+' x '+b+'='+lf);
        if(tag != undefined) {
            question = '<'+tag+' class=\''+((i%2==1)?'even':'odd')+'\'>'+question+'</'+tag+'>';
        }
        result += question;
    }
    return result;
}

exports.vertical2 = vertical2;
exports.vertical2_1 = vertical2_1;
exports.vertical3 = vertical3;
exports.horizontal = horizontal;
