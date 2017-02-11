function sendTrack() {    
    mixpanel.track($("#myName").val(), $("#myObject").val());

    mixpanel.track(
        "site.js",
        { "desc": "sent by site.js file" }
    );    
}