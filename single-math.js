var singleDigitPlus = function (count, lf, tag) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 10) + 1 );
        var b = Math.floor((Math.random() * 10) );
        var question = (''+a+'+'+b+'='+lf);
        if(tag != undefined) {
              question = '<'+tag+' class=\''+((i%2==1)?'even':'odd')+'\'>'+question+'</'+tag+'>';
        }
        result += question;
    }
    return result;
}

// not really single , could be as large as 19
var singleDigitMinus = function(count, lf, tag) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }



    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 19) + 1 );
        var b = Math.floor((Math.random() * a + 1) );
        var question = (''+a+'-'+b+'='+lf);
        if(tag != undefined) {
            question = '<'+tag+' class=\''+((i%2==1)?'even':'odd')+'\'>'+question+'</'+tag+'>';
        }
        result += question;
    }
    return result;
}

var singleDigitProduction = function (count, lf, tag) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 9) + 2 );
        var b = Math.floor((Math.random() * 9) + 2 );
        var question = (''+a+'x'+b+'='+lf);
        if(tag != undefined) {
            question = '<'+tag+' class=\''+((i%2==1)?'even':'odd')+'\'>'+question+'</'+tag+'>';
        }
        result += question;
    }
    return result;
}


var singleDigitMix = function(count, lf, tag) {
    if (count == undefined) {
        count = 1;
    }

    if (lf == undefined || lf == null) {
        lf = '<br>';
    }

    var sign = '+';

    var result = '';
    for(var i=0; i<count; i++) {
        var a = Math.floor((Math.random() * 10) + 1 );
        var b = Math.floor((Math.random() * a + 1) );

        var signNum = Math.floor(Math.random()*10);
        if ( (signNum%2) == 0 )
            sign = '-';
        else
            sign = '+';

        var question = ('' + a + sign + b + '=' + lf);
        if(tag != undefined) {
            question = '<'+tag+'>'+question+'</'+tag+'>';
        }
        result += question;
    }
    return result;
}

exports.plus = singleDigitPlus;
exports.minus = singleDigitMinus;
exports.mix = singleDigitMix;
exports.multi = singleDigitProduction;
