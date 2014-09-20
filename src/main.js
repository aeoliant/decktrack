// On click, decrement the card.
// CSS handles displaying the count (or hiding the card if count is 0)
var onClickHandler = function() {
  var count = parseInt(this.getAttribute("count"));
  count = count - 1;
  this.setAttribute("count", count);
};

var deck = document.getElementById("deck");

var numChildren = deck.children.length;
var i = 0;
for (; i < numChildren; i++) {
  deck.children[i].onclick = onClickHandler;
}