/*
innerHTML and innerText are two commonly used properties in JavaScript for accessing and modifying the content
inside an HTML element, but they work differently
*/
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div>
        <p id = "p1" >p tag</p>
        <div class = "c1">div tag 2
            <h2>hello world </h2>
            <p> hi roshan</p>
        </div>
   </div>
   <div  > div tag </div>
   <p class = "c1" > p tag 2</p>

   <script>

    let ref = document.getElementsByTagName("div")

    console.log(ref[1].innerHTML)

    ref[1].innerHTML = " <h1>henil</h1> <h2>omkar</h2> <p>venkatesh</p> "     // ref[1].html
   

    

   </script>
    
</body>
</html>


