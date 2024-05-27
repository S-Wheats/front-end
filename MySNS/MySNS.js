/* SNS Part Script.js */

var h = screen.height - 300;
var w = screen.width;

var x = screen.width / 2;

function openChatRoom(){
  window.open("./MyChat.html", "Chatting Room", "width="+ w +", height="+ h +", top=50, left="+ x +", resizable=no, scrollbars=no, status=no, location=no, toolbar=no, menubar=no")
}