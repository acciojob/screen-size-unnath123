//your JS code here. If required.
function getsize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + "  Height: " + h + "</h1>";
}