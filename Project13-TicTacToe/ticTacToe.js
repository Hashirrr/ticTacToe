if (window.location.pathname === "/index.html")
{
    document.getElementById("leader").onclick = disp;
    function disp()
    {
        document.getElementById("alert1").style.display = "flex";
    }
    document.getElementById("ok").onclick = disp2;
    function disp2()
    {
        document.getElementById("alert1").style.display = "none";
    }
    document.getElementById("play").onclick = function(){
        window.location.pathname = "/gameForm.html"
    }
}
let name1 = "";
let name2 = "";
let value1 = "";
var err = 0;
if (window.location.pathname === "/gameForm.html")
{
    document.getElementById("continue").onclick = submit;
}
function submit()
{
    error();

    name1 = document.getElementById("input1").value;
    name2 =  document.getElementById("input2").value;    
    value1 = document.getElementById("option111").checked;
    if (err === 0)
    {
        innerH();
        document.getElementById("name1").innerHTML = name1;
        document.getElementById("name2").innerHTML = name2;
        
    }
    document.getElementById("main").onclick = function(){
        window.location.pathname = "/index.html";
        x = 0;
        y = 0;
        noOfGames = 0;
    }
}
function error()
{
    err = 0;
    document.getElementById("error").innerHTML = "";
    if (document.getElementById("input1").value.length === 0)
    {
        document.getElementById("error").innerHTML = "Enter the name of Player 1 to proceed";
        err = 1;
        document.getElementById("input1").value = "";
    }
    if (document.getElementById("input2").value.length === 0 && err !== 1)
    {
        document.getElementById("error").innerHTML = "Enter the name of Player 2 to proceed";
        err = 1;
    }
    if (document.getElementById("input1").value === document.getElementById("input2").value && err !== 1)
    {
        document.getElementById("error").innerHTML = "Enter 2 different names to proceed";
        err = 1;
    }
    if (document.getElementById("option111").checked === false && document.getElementById("option112").checked === false)
    {
        if (err !== 1)
        {
            document.getElementById("error").innerHTML = "Select any of 2 options for player 1 to proceed";
            err = 1;
        }
    }
    if (document.getElementById("option121").checked === false && document.getElementById("option122").checked === false)
    {
        if (err !== 1)
        {
            document.getElementById("error").innerHTML = "Select any of 2 options for player 2 to proceed";
            err = 1;
        }
    }
    if (document.getElementById("option111").checked === true && document.getElementById("option121").checked === true)
    {
        if (err !== 1)
        {
            document.getElementById("error").innerHTML = "Select 2 different options to proceed";
            err = 1;
        }
    }
    if (document.getElementById("option112").checked === true && document.getElementById("option122").checked === true)
    {
        if (err !== 1)
        {
            document.getElementById("error").innerHTML = "Select 2 different options to proceed";
            err = 1;
        }
    }
}
let x = 0;
let y = 0;
let noOfGames = 0;
function TacToe(){
    if (noOfGames % 2 === 0)
    {
        if(value1 === true && y === 0)
        {
            x = x + 1;
            y = 1;
        }
        if (x % 2 === 0)
        {
            if (document.getElementById("" + event.target.id).innerHTML === "")
            document.getElementById("" + event.target.id).innerHTML = "O";
        }
        else
        {
            if (document.getElementById("" + event.target.id).innerHTML === "")
            document.getElementById("" + event.target.id).innerHTML = "X";
        }
    }
    else
    {
        if(value1 === true && y === 0)
        {
            x = x + 1;
            y = 1;
        }
        if (x % 2 === 0)
        {
            if (document.getElementById("" + event.target.id).innerHTML === "")
            document.getElementById("" + event.target.id).innerHTML = "X";
        }
        else
        {
            if (document.getElementById("" + event.target.id).innerHTML === "")
            document.getElementById("" + event.target.id).innerHTML = "O";
        }
    }
    x++;
    wild();
}
function innerH()
{
    document.getElementById("container2").innerHTML = "<div class=\"console3\"><div id=\"contain\"><div id=\"names\"><div id=\"name1\" class=\"childd\">Hajra</div><div id=\"score1\" class=\"childd\">0</div><div id=\"name2\" class=\"childd\">Hashir</div><div id=\"score2\" class=\"childd\">0</div></div><div id=\"main\"><i class=\"fas fa-home fa-lg\"></i></div></div><div id=\"grid\"><div id=\"child1\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child2\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child3\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child4\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child5\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child6\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child7\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child8\" class=\"child\" onclick=\"TacToe()\"></div><div id=\"child9\" class=\"child\" onclick=\"TacToe()\"></div> </div></div>"
}
function wild()
{
    let win = "";
    let lose = "";
    let winn = 0;
    if (value1 === true)
    {
        win = "X";           
        lose = "O";
    }
    else
    {
        win = "O";
        lose = "X";           
    }
    if (document.getElementsByClassName("child")[0].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[1].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[2].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[3].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[5].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[6].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[7].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[8].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[0].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[3].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[6].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[1].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[7].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[2].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[5].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[8].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[0].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[8].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[2].innerHTML === win)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === win)
        {
            if (document.getElementsByClassName("child")[6].innerHTML === win)
            {
                winn = 1;
            }
        }
    }
    if (document.getElementsByClassName("child")[0].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[1].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[2].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[3].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[5].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[6].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[7].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[8].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[0].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[3].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[6].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[1].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[7].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[2].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[5].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[8].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[0].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[8].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (document.getElementsByClassName("child")[2].innerHTML === lose)
    {
        if (document.getElementsByClassName("child")[4].innerHTML === lose)
        {
            if (document.getElementsByClassName("child")[6].innerHTML === lose)
            {
                winn = 2;
            }
        }
    }
    if (winn === 1)
    {
        document.getElementById("score1").innerHTML = parseInt(document.getElementById("score1").innerHTML) + 1;
        document.getElementById("text2").innerHTML = document.getElementById("name1").innerHTML + " won";
        document.getElementById("alert2").style.display = "block";
        document.getElementById("continue2").onclick = cont;
    }
    if (winn === 2)
    {
        document.getElementById("score2").innerHTML = parseInt(document.getElementById("score2").innerHTML) + 1;
        document.getElementById("text2").innerHTML = document.getElementById("name2").innerHTML + " won";
        document.getElementById("alert2").style.display = "block";
        document.getElementById("continue2").onclick = cont;
    }
    let xyz = 1;
    for (let i = 0; i < 9; i++)
    {
        if (document.getElementById("child" + (i + 1)).innerHTML != "")
        {
            xyz++;  
        }
    }
    if (xyz === 10 && winn === 0)
    {
        document.getElementById("text2").innerHTML = "Draw";
        document.getElementById("alert2").style.display = "block";
        document.getElementById("continue2").onclick = cont;    
    }
}
function renew()
{
    for (let i = 0; i < 9; i++)
    {
        document.getElementById("child" + (i + 1)).innerHTML = "";
    }
    noOfGames++;
    x = 0;
    y = 0;
}
function cont()
{
    document.getElementById("alert2").style.display = "none";
    renew();
}