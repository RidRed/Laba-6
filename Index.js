function Change()
{
    var text = document.getElementById("textbox").value;
    document.getElementById("Sait").href = text;
    
}   

function ChangeColor()
{
    var text = document.getElementById("textbox2").value;
    var articleDiv = document.querySelector("div.Main2");
    articleDiv.removeAttribute("style");
    articleDiv.setAttribute("style", "background-color:"+ text);

    
}



