using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BroadcastMessage.Web.Hubs
{
    public class ChatHub : Hub
    {
        public void BroadcastMessage(string fromUser, string message)
        {
            var random = new Random();
            var randomId=random.Next(10000);
            Clients.All.writeMessage(fromUser, message, randomId);
        }
    }
}