


exports.getDate = function() {
    var date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}
exports.getDay = function() {
    var date = new Date();
    var options = {
        weekday: 'long',

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}




/*
exports.getDate = function() {
    var date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}
exports.getDay = function() {
    var date = new Date();
    var options = {
        weekday: 'long',

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}

We can shorten module.export.getDate to export.getDate






module.exports.getDate = function() {
    var date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}
module.exports.getDay = function() {
    var date = new Date();
    var options = {
        weekday: 'long',

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}
we can just add module.export.getDate to accept is as a variable
 * 
 * 
 * 
 function getDate() {
    var date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}
function getDay() {
    var date = new Date();
    var options = {
        weekday: 'long',

    };
    var days = date.toLocaleString("en-US", options);
    return days;
}


module.exports.getDate = getDate;
module.exports.getDay = getDay;



 * 
module.exports = getDate;

this function will send the data to whichever is necessary

module.exports.getDate = getDate;
module.exports.getDay = getDay;
this will allow us to extract more than 1 value in a directory
*/
