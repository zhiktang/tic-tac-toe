var player = true;
var init = false;
var gameboard=new Array(3);
gameboard[0]=new Array(3);
gameboard[1]=new Array(3);
gameboard[2]=new Array(3);
function board()
{
	if(init==false)
	{
		var i = 0;
		var j = 0;
		for(i=0; i<3; i++)
		{
			for(j=0; j<3; j++)
			{
				gameboard[i][j]=5;
			}
		}
		init=true;
	}
}
function win()
{
	for(i=0; i<3; i++)
	{
		if(gameboard[i][0]+gameboard[i][1]+gameboard[i][2]==0)
		{
			document.getElementById("head").innerHTML="X Wins!";
		}
		else if(gameboard[i][0]+gameboard[i][1]+gameboard[i][2]==3)
		{
			document.getElementById("head").innerHTML="O Wins!";
		}
	}
	for(j=0; j<3; j++)
	{
		if(gameboard[0][j]+gameboard[1][j]+gameboard[2][j]==0)
		{
			document.getElementById("head").innerHTML="X Wins!";
		}
		else if(gameboard[0][j]+gameboard[1][j]+gameboard[2][j]==3)
		{
			document.getElementById("head").innerHTML="O Wins!";
		}
	}
	if(gameboard[0][0]+gameboard[1][1]+gameboard[2][2]==0)
	{
		document.getElementById("head").innerHTML="X Wins!";
	}
	else if(gameboard[0][0]+gameboard[1][1]+gameboard[2][2]==3)
	{
		document.getElementById("head").innerHTML="O Wins!";
	}
	if(gameboard[2][0]+gameboard[1][1]+gameboard[0][2]==0)
	{
		document.getElementById("head").innerHTML="X Wins!";
	}
	else if(gameboard[2][0]+gameboard[1][1]+gameboard[0][2]==3)
	{
		document.getElementById("head").innerHTML="O Wins!";
	}
}
function cell_00()
{
	board();
	if(player==true)
	{
		gameboard[0][0]=0;
		document.getElementById("00").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[0][0]=1;
		document.getElementById("00").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("00").innerHTML="Null";
	}
	win();
}
function cell_01()
{
	board();
	if(player==true)
	{
		gameboard[0][1]=0;
		document.getElementById("01").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[0][1]=1;
		document.getElementById("01").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("01").innerHTML="Null";
	}
	win();
}
function cell_02()
{
	board();
	if(player==true)
	{
		gameboard[0][2]=0;
		document.getElementById("02").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[0][2]=1;
		document.getElementById("02").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("02").innerHTML="Null";
	}
	win();
}
function cell_10()
{
	board();
	if(player==true)
	{
		gameboard[1][0]=0;
		document.getElementById("10").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[1][0]=1;
		document.getElementById("10").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("10").innerHTML="Null";
	}
	win();
}
function cell_11()
{
	board();
	if(player==true)
	{	
		gameboard[1][1]=0;
		document.getElementById("11").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[1][1]=1;
		document.getElementById("11").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("11").innerHTML="Null";
	}
	win();
}
function cell_12()
{
	board();
	if(player==true)
	{
		gameboard[1][2]=0;
		document.getElementById("12").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[1][2]=1;
		document.getElementById("12").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("12").innerHTML="Null";
	}
	win();
}
function cell_20()
{
	board();
	if(player==true)
	{
		gameboard[2][0]=0;
		document.getElementById("20").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[2][0]=1;
		document.getElementById("20").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("20").innerHTML="Null";
	}
	win();
}
function cell_21()
{
	board();
	if(player==true)
	{
		gameboard[2][1]=0;
		document.getElementById("21").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[2][1]=1;
		document.getElementById("21").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("21").innerHTML="Null";
	}
	win();
}
function cell_22()
{
	board();
	if(player==true)
	{
		gameboard[2][2]=0;
		document.getElementById("22").innerHTML="X";
		player = false;
	}
	else if(player==false)
	{
		gameboard[2][2]=1;
		document.getElementById("22").innerHTML="O";
		player = true;
	}
	else
	{
		document.getElementById("22").innerHTML="Null";
	}
	win();
}