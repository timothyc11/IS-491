function MenuChoice()
{
     if (document.getElementById("menu").value == "Show Area 1")
     {
        document.getElementById("Sec1").style.visibility = "visible";
        document.getElementById("Sec2").style.visibility = "hidden";
     }
     else if (document.getElementById("menu").value == "Show Area 2")
     {
        document.getElementById("Sec1").style.visibility = "hidden";
        document.getElementById("Sec2").style.visibility = "visible";
     }
     else
     {
        document.getElementById("Sec1").style.visibility = "hidden";
        document.getElementById("Sec2").style.visibility = "hidden";
     }
}