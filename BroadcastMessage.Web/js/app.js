//Create a connection 
var chatHub = $.connection.chatHub;

//Start the connection
$.connection.hub.start();


//Client Call
chatHub.client.writeMessage = function (fromUser, message, randomId) {
    var template = "<div class=\"panel panel-default\">" +
                            "<div class=\"panel-heading\">" +
                                "<div class=\"container\">" + 
                                    "<label for=" + fromUser + " data-toggle=\"collapse\" data-target=\"#"+randomId +"\""+">" + fromUser + "</label>" +
                                        "<div class=\"collapse in\" id=" + randomId + ">" + message + "</div>"+
                                 "</div>"+
                              "</div>"+
                    "</div>";

    $("#messageList").prepend(template);
};

//Server Call
$("#shareMessage").on("click", function () {
    var fromUser = $("#personName").val();
    var message = $("#personMessage").val();

    chatHub.server.broadcastMessage(fromUser, message);
});


