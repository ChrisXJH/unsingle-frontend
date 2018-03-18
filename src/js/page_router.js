const HOST = 'http://localhost:4000';
var account = {};
var exploreEventList = $("#explore .items");
var eventDetailsPage = $("#eventDetails");

function fetchEvents() {
    $.get( HOST + "/event", function( data ) {
        exploreEventList.html('');
        for (var i = 0; i < data.length; i++) {
            var event = new Event(data[i]);
            event.appendHtmlTo(exploreEventList);
        }
    });
}

function login() {
    var username = $("#login #username").val();
    var password = $("#login #password").val();
    console.log(password);
    $.post(HOST + '/validateAccount/' + username, function (result) {
        account = new Account(result);
    });
    $("#login").hide();
    $("#main-content").show();
}

function matchRequest(accountId, eventId) {
    $.post(HOST + '/match', {"userId": accountId, "eventId": eventId}, function (result) {
        
    });
}

function updateEventDetails(id) {
    $.get( HOST + "/event/" + id, function( result ) {
        var template = `
        <div class="form-group">
        <b for="title">Title:</b>
        <p class="title">` + result.title + `</p>
        </div>
        <div class="form-group">
        <b for="startTime">Start time:</b>
        <p class="startTime">` + result.startTime + `</p>
        </div>
        <div class="form-group">
        <b for="End">End time:</b>
        <p class="endTime">` + result.endTime + `</p>
        </div>
        <div class="form-group">
        <b for="description">Description:</b>
        <p class="description">` + result.description + `</p>
        </div>
        <span class="btn btn-primary" onclick="matchRequest('` + account.id + `', '` + result._id + `')">Match</span>`;
        eventDetailsPage.html(template);
    });
}

function explorePage() {
    $('#main-page .page').removeClass('active');
    $('#explore').addClass('active');
    $("#caption").html("Explore");
    fetchEvents(function (results) {
        console.log(results);
    });
}


function eventsPage() {
    $('#main-page .page').removeClass('active');
    $('#events').addClass('active');
    $("#caption").html("Events");

}

function settingsPage() {
    $('#main-page .page').removeClass('active');
    $('#settings').addClass('active');
    $("#caption").html("Settings");

}

function messagePage() {
    $('#main-page .page').removeClass('active');

    $('#message').addClass('active');
    $("#caption").html("Message");

}

function eventDetails(eventId) {
    $('#main-page .page').removeClass('active');

    $('#eventDetails').addClass('active');
    updateEventDetails(eventId);
    $("#caption").html("Event");

}
