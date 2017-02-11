function sendTrack() {
    var objectName = $("#objectName").val();
    mixpanel.track(objectName, { objectName: { "genre": "hip-hop" } });

    mixpanel.track(
        "site.js",
        { "desc": "sent by site.js file" }
    );    
}