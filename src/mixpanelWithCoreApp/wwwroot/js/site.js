function sendTrack() {    
    mixpanel.track($("#myName").val(), $("#myObject").val());
}