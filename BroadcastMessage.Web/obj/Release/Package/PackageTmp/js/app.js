var chatHub = $.connection.chatHub;

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

$("#sendMessage").on("click", function () {
    var fromUser = $("#personName").val();
    var message = $("#personMessage").val();

    chatHub.server.broadcastMessage(fromUser, message);
});

$.connection.hub.start();
