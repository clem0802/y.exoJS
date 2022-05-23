// What is the DOM? And what does it do?

// The Document Object Model represents HTML documents in a way JavaScript can interpret.
// The DOM is an object-oriented view of the HTML web page document 
// where each HTML attribute is an object within a hierarchy consisting of element, 
// attribute and body nodes that can then be accessed and modified or manipulated using functions.

<p id="demo"></p>
<p id="demo"></p>
<p class="test"></p>
<p class="test"></p>
<img id="image" src="smiley.gif">
<input type="text" id="myText" value="Hello">
<button id="demo">Click me1</button>

<script>
document.getElementById("demo").innerHTML = "Hello"; 
document.getElementsByTagName("p")[0].innerHTML = "Hello"; // 1st <p> elem and change to "Hello";
document.getElementsByClassName("test")[0].innerHTML = "Hello"; // 1st elem having the class name "test".
document.getElementById("image").src = "pic_mountain.jpg"; // change the value of img's src attribute;
document.getElementById("myText").value = "Have a nice day!";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.fontSize = "40px";
document.getElementById("demo").style.display = "none";
document.getElementById("demo").addEvenListener("click", myFunction);
</script>