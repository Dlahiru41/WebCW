var question001 = [
	"Q 01. Who is the record holder in the 100m? ",
    "Q 02. Which of the following games were previously called ‘British Empire Games’? ",
    "Q 03. In which game the term ‘Putting’ is used? ",
    "Q 04. How big is a football team?",
    "Q 05. In what frequency are the summer Olympics held? ",
    "Q 06. Where was the 2018 FIFA World Cup held? ",
    "Q 07. How long is a marathon? ",
    "Q 08. How big is a basketball team? ",
    "Q 09. Serena Williams is a famous player of? ",
    "Q 10. Which sport is linked with the term “Butterfly Stroke” ",
    ]

	var options001 = ["<button class=buttons001 onclick=q01correct()>   a. Usain Bolt   	</button>	<button class=buttons001 onclick=q01incorrect()> b. Yohan Blake	</button>	<button class=buttons001 onclick=q01incorrect()> 	c. Milkha Singh	</button>	<button class=buttons001 onclick=q01incorrect()> 	d. Edward Thompson	</button>"];
	var options002 = ["<button class=buttons001 onclick=q02correct()>   a. Commonwealth Games     </button>	<button class=buttons001 onclick=q02incorrect()> b. East Asian Games </button>	<button class=buttons001 onclick=q02incorrect()> c. Southeast Asian Games	</button>	<button class=buttons001 onclick=q02incorrect()> d. Olympic Games	</button>"];
	var options003 = ["<button class=buttons001 onclick=q03incorrect()> a. Chess	</button>	<button class=buttons001 onclick=q03correct()>   b. Golf	</button>	<button class=buttons001 onclick=q03incorrect()>   c. Hockey			</button>	<button class=buttons001 onclick=q03incorrect()>   d. Billiards		</button>"];
	var options004 = ["<button class=buttons001 onclick=q04incorrect()> a. 10				</button>	<button class=buttons001 onclick=q04incorrect()> b. 09		</button>	<button class=buttons001 onclick=q04correct()> c. 11 				</button>	<button class=buttons001 onclick=q04incorrect()>    d. 12	</button>"];
	var options005 = ["<button class=buttons001 onclick=q05incorrect()> a. Every 2 years		</button>	<button class=buttons001 onclick=q05incorrect()> b. Every 3 years		</button>	<button class=buttons001 onclick=q05incorrect()> c. Every 5 years			</button>	<button class=buttons001 onclick=q05correct()>  d. Every 4 years	</button>"];
	var options006 = ["<button class=buttons001 onclick=q06incorrect()> a. Qatar 			</button>	<button class=buttons001 onclick=q06correct()>   b. Russia			</button>	<button class=buttons001 onclick=q06incorrect()> c. UK				</button>	<button class=buttons001 onclick=q06incorrect()> d. Brazil		</button>"];
	var options007 = ["<button class=buttons001 onclick=q07correct()>   a. 42.2km				</button>	<button class=buttons001 onclick=q07incorrect()> b. 41.2km 		</button>	<button class=buttons001 onclick=q07incorrect()> c. 41km					</button>	<button class=buttons001 onclick=q07incorrect()> d. 42km			</button>"];
	var options008 = ["<button class=buttons001 onclick=q08incorrect()> a. 3				</button>	<button class=buttons001 onclick=q08incorrect()> b. 6		</button>	<button class=buttons001 onclick=q08correct()>  c. 5	</button>	<button class=buttons001 onclick=q08incorrect()> d. 8 </button>"];
	var options009 = ["<button class=buttons001 onclick=q09correct()>   a. Tennis		</button>	<button class=buttons001 onclick=q09incorrect()> b. Badminton		</button>	<button class=buttons001 onclick=q09incorrect()> c. Chess			</button>	<button class=buttons001 onclick=q09incorrect()> d. Golf	 </button>"];
	var options010 = ["<button class=buttons001 onclick=q10incorrect()> a. Water polo		</button>	<button class=buttons001 onclick=q10incorrect()> b. Rowing 			</button>	<button class=buttons001 onclick=q10incorrect()> c. Diving 	</button>	<button class=buttons001 onclick=q10correct()> d. Swimming	</button>"];
        
      
function begin001() {
    k = 2;
	j = 4;
	l = 6;
	m = 10;
	n = 8;
	o = 3;
	p = 1;
	q = 5;
	r = 9;
	s = 7;
	a = 1;
	b = 0;
	c = 60;
	d = 0;
    
	disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = options001;
	message003.innerHTML ="";
    number001.innerHTML = a+ " out of 10 Questions";
			
    }
		
function q01correct() {
	message003.innerHTML = " Correct";
	message001.innerHTML = "";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
    count.innerHTML=j+=1;
	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
	}

function q01incorrect() {
	message001.innerHTML = question001[0];
	message003.innerHTML = " Incorrect";
    message002.innerHTML = "";
	score001.innerHTML =  b=b-1;
	count.innerHTML=j-=1;	
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
	}

function q02correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct.";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count001.innerHTML=k+=1;	       
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q02incorrect() {
    message001.innerHTML = question001[1];
	message003.innerHTML = " Incorrect. ";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count001.innerHTML=k-=1;       
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
	}

function q03correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count002.innerHTML=l+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q03incorrect() {
    message001.innerHTML = question001[2];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count002.innerHTML=l-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q04correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct.";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count003.innerHTML=m+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
	}

function q04incorrect() {
    message001.innerHTML = question001[3];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count003.innerHTML=m-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q05correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct.";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count004.innerHTML=n+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q05incorrect() {
    message001.innerHTML = question001[4];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count004.innerHTML=n-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q06correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count005.innerHTML=o+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
	}

function q06incorrect() {
	message001.innerHTML = question001[5];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count005.innerHTML=o-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q07correct() {
    message001.innerHTML = ""; 
	message003.innerHTML = " Correct";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count006.innerHTML=p+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q07incorrect() {
    message001.innerHTML = question001[6];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count006.innerHTML=p-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q08correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct.";
    message002.innerHTML = "";
    score001.innerHTML =b=b+2;
	count007.innerHTML=q+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q08incorrect() {
    message001.innerHTML = question001[7];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count007.innerHTML=q-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q09correct() {
    message001.innerHTML = "";
	message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count008.innerHTML=r+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q09incorrect() {
    message001.innerHTML = question001[8];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count008.innerHTML=r-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q10correct() {
    message001.innerHTML = "";
	message003.innerHTML = " Correct.";
    message002.innerHTML = "";
    score001.innerHTML = b=b+2;
	count009.innerHTML=s+=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }

function q10incorrect() {
    message001.innerHTML = question001[9];
	message003.innerHTML = " Incorrect.";
    message002.innerHTML = "";
	score001.innerHTML = b=b-1;
	count009.innerHTML=s-=1;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
		
function next001() {
	a=a+1;
	if (a == "2") {
        message001.innerHTML = question001[1];
        message002.innerHTML = options002;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
	}

    else if (a == "3") {
        message001.innerHTML = question001[2];
        message002.innerHTML = options003;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
        }

    else if (a == "4") {
        message001.innerHTML = question001[3];
        message002.innerHTML = options004;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions" ;
        message004.innerHTML = "";
    }

    else if (a == "5") {
        message001.innerHTML = question001[4];
        message002.innerHTML = options005;
        message003.innerHTML = "";
        number001.innerHTML =a +" out of 10 Questions";
        message004.innerHTML = "";
    }

    else if (a == "6") {
        message001.innerHTML = question001[5];
        message002.innerHTML = options006;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
    }

    else if (a == "7") {
        message001.innerHTML = question001[6];
        message002.innerHTML = options007;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
    }

    else if (a == "8") {
        message001.innerHTML = question001[7];
        message002.innerHTML = options008;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
    }

    else if (a == "9") {
        message001.innerHTML = question001[8];
        message002.innerHTML = options009;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
    }

    else if (a == "10") {
        message001.innerHTML = question001[9];
        message002.innerHTML = options010;
        message003.innerHTML = "";
        number001.innerHTML = a +" out of 10 Questions";
        message004.innerHTML = "";
    } 
	
	else {
		number001.innerHTML = "Questions:Completed." ;
		if (b <1)
			document.body.style.backgroundColor="#2b2b05";
		if (b >=1)
			document.body.style.backgroundColor="#c40229";
		if (b>=5)
			document.body.style.backgroundColor="#f7a22a";
		if (b>=10)
			document.body.style.backgroundColor="#e5f229";
		if (b>=15)
			document.body.style.backgroundColor="#62b1d0";
		if (b>=20)
			document.body.style.backgroundColor="#f72aea";
			 
		window.clearInterval(update);
		c = "-";
		message001.innerHTML = "End of Quiz";
		message002.innerHTML = "";
		message003.innerHTML = "";
		message015.innerHTML="Results"
	
		if(j=="5")
			{message005.innerHTML = "Q01. Who is the record holder in the 100m? " + "Usain Bolt  " + "<span style=\"color:green;\"> Correct" + " <img src=img/c.png height='20' width='30'>";} 
		else if(j=="3")
			{message005.innerHTML = "Q01. Who is the record holder in the 100m? " + "<span style=\"color:red;\"> Incorrect"+" <img src=img/w.png height='20' width='20'>" + " Correct answer : Usain Bolt ";}
        
		if(k=="3")
			{message006.innerHTML = "Q02. Which of the following games were previously called ‘British Empire Games’? "+ "Commonwealth Games " + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>" ;} 
		else if (k=="1")
			{message006.innerHTML = "Q02. Which of the following games were previously called ‘British Empire Games’? " + "<span style=\"color:red;\"> Incorrect"+ " <img src=img/w.png height='20' width='20'>" + " Correct answer : Commonwealth Games ";}
		
		if(l=="7")
			{message007.innerHTML = "Q03. In which game the term ‘Putting’ is used? " + "Golf " + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>" ;} 
		else if (l=="5")
			{message007.innerHTML = "Q03. In which game the term ‘Putting’ is used? " + "<span style=\"color:red;\"> Incorrect"+" <img src=img/w.png height='20' width='20'>" + "Correct answer : Golf";}
		
		if(m=="11")
			{message008.innerHTML = "Q04. How big is a football team? " + "11" + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>";} 
		else if (m=="9")
			{message008.innerHTML = "Q04. How big is a football team? " + "<span style=\"color:red;\"> Incorrect"+ " <img src=img/w.png height='20' width='20'>" + "Correct answer : 11 ";}
		
		if(n=="9")
			{message009.innerHTML = "Q05. In what frequency are the summer Olympics held? " + " Every 4 years "+"<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>";} 
		else if (n=="7")
			{message009.innerHTML = "Q05. In what frequency are the summer Olympics held? " + "<span style=\"color:red;\"> Incorrect"+" <img src=img/w.png height='20' width='20'>" + "Correct answer : Every 4 years";}
		
		if(o=="4")
			{message010.innerHTML = "Q06. Where was the 2018 FIFA World Cup held? " + "Russia" + "<span style=\"color:green;\">  Correct"+" <img src=img/c.png height='20' width='30'>" ;} 
		else if (o=="2")
			{message010.innerHTML = "Q06. Where was the 2018 FIFA World Cup held? " + "<span style=\"color:red;\"> Incorrect"+ " <img src=img/w.png height='20' width='20'>" +"Correct answer : Russia";}
		
		if(p=="2")
			{message011.innerHTML = "Q07. How long is a marathon? " + "42.2km " + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>" ;} 
		else if (p=="0")
			{message011.innerHTML = "Q07. How long is a marathon?" + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : 42.2km ";}
		
		if(q=="6")
			{message012.innerHTML = "Q08. How big is a basketball team ? " + "5" + "<span style=\"color:green;\">  Correct"+" <img src=img/c.png height='20' width='30'>" ;} 
		else if (q=="4")
			{message012.innerHTML = "Q08. How big is a basketball team ? " + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : 5";}
		
		if(r=="10")
			{message013.innerHTML = "Q09. Serena Williams is a famous player of ?" + "Tennis" + "<span style=\"color:green;\">  Correct" + "<img src=img/c.png height='20' width='30'>" ;} 
		else if (r=="8")
			{message013.innerHTML = "Q09. Serena Williams is a famous player of ?" + "<span style=\"color:red;\"> Incorrect" + "<img src=img/w.png height='20' width='20'>" + "Correct answer : Tennis";}
		
		if(s=="8")
			{message014.innerHTML = "Q10. Which sport is linked with the term “Butterfly Stroke”? " + "Swimming" + "<span style=\"color:green;\">  Correct" + "<img src=img/c.png height='20' width='30'>" ;} 
		else if (s=="6")
			{message014.innerHTML = "Q10. Which sport is linked with the term “Butterfly Stroke” ?" + "<span style=\"color:red;\"> Incorrect" + "<img src=img/w.png height='20' width='20'>" + "Correct answer : Swimming";}
		
		else{
			message015.innerHTML = "";}
            message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
        }
	}
	     
function timer001(){
    c = c - 1;
	d=d+1;
			
    if (c < 70) {
        time001.innerHTML ="Time Remaining: "+ c+" seconds";
		time002.innerHTML = "Time Taken: "+d + " seconds";
    }

    if (c < 1) {
        window.clearInterval(update);
			if (b <1)
				document.body.style.backgroundColor="#008000";
			if (b >=1)
			   document.body.style.backgroundColor ="#ca022a";
			if (b>=5)
			    document.body.style.backgroundColor="#ffcc00";
			if (b>=10)
			    document.body.style.backgroundColor=" #cbd90d";
			if (b>=15)
			    document.body.style.backgroundColor="#30819c";
			if (b>=20)
				document.body.style.backgroundColor="#7b0473";
            
			message001.innerHTML = "Time up ...! ";
            message002.innerHTML = "";
            message003.innerHTML = "";
			message015.innerHTML= "--- Results ---"
		
		if(j=="5")
			{message005.innerHTML = "Q01. Who is the record holder in the 100m?  " + "Usain Bolt " + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>";} 
		else if(j=="3")
			{message005.innerHTML = "Q01. Who is the record holder in the 100m?  " + "<span style=\"color:red;\"> Incorrect"+" <img src=img/w.png height='20' width='20'>" +"Correct answer : Usain Bolt ";}
        else
			{message005.innerHTML = "Q01. Who is the record holder in the 100m? " + "<span style=\"color:red;\"> Not selected"+" <img src=img/q.png height='20' width='20'>" +"Correct answer : Usain Bolt ";}
		 
		 if(k=="3")
			{message006.innerHTML = "Q02. Which of the following games were previously called ‘British Empire Games’? " + " Commonwealth Games " + "<span style=\"color:green;\">  Correct"+ " <img src=img/c.png height='20' width='30'>" ;} 
		else if (k=="1")
			{message006.innerHTML = "Q02. Which of the following games were previously called ‘British Empire Games’?" + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : Commonwealth Games ";}
		else
			{message006.innerHTML = "Q02. Which of the following games were previously called ‘British Empire Games’? " + "<span style=\"color:red;\"> Not selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : Commonwealth Games ";}
		
		if(l=="7")
			{message007.innerHTML = "Q03. In which game the term ‘Putting’ is used? " + "Golf" + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>" ;} 
		else if (l=="5")
			{message007.innerHTML = "Q03. In which game the term ‘Putting’ is used? " + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : Golf";}
		else	
			{message007.innerHTML = "Q03. In which game the term ‘Putting’ is used?  " + "<span style=\"color:red;\"> Not selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : Golf";}
		
		if(m=="11")
			{message008.innerHTML = "Q04. How big is a football team? " + "11" + "<span style=\"color:green;\">  Correct"+ " <img src=img/c.png height='20' width='30'>";} 
		else if (m=="9")
			{message008.innerHTML = "Q04. How big is a football team? " + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : 11";}
		else
			{message008.innerHTML = "Q04. How big is a football team? " + "<span style=\"color:red;\"> Not selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : 11";}
		
		if(n=="9")
			{message009.innerHTML = "Q05. In what frequency are the summer Olympics held? " + "Every 4 years " + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>";} 
		else if (n=="7")
			{message009.innerHTML = "Q05. In what frequency are the summer Olympics held? " + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : Every 4 years";}
		else
			{message009.innerHTML = "Q05. In what frequency are the summer Olympics held? " + "<span style=\"color:red;\"> Not Selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : Every 4 years";}
		
		if(o=="4")
			{message010.innerHTML = "Q06. Where was the 2018 FIFA World Cup held? " + "Russia" + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>" ;} 
		else if (o=="2")
			{message010.innerHTML = "Q06. Where was the 2018 FIFA World Cup held? " + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : Russia";}
		else
			{message010.innerHTML = "Q06. Where was the 2018 FIFA World Cup held? " + "<span style=\"color:red;\"> Not selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : Russia";}
		
		if(p=="2")
			{message011.innerHTML = "Q07. How long is a marathon? " + "42.2km " + "<span style=\"color:green;\">  Correct" + " <img src=img/c.png height='20' width='30'>" ;} 
		else if (p=="0")
			{message011.innerHTML = "Q07. How long is a marathon?" + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : 42.2km ";}
		else
			{message011.innerHTML = "Q07. How long is a marathon?" + "<span style=\"color:red;\"> Not selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : 42.2km ";}
		
		if(q=="6")
			{message012.innerHTML = "Q08. How big is a basketball team ?" + "5" + "<span style=\"color:green;\">  Correct"+" <img src=img/c.png height='20' width='30'>" ;} 
		else if (q=="4")
			{message012.innerHTML = "Q08. How big is a basketball team ?" + "<span style=\"color:red;\"> Incorrect" + " <img src=img/w.png height='20' width='20'>" + "Correct answer : 5";}
		else
			{message012.innerHTML = "Q08. How big is a basketball team  ?" + "<span style=\"color:red;\"> Not selected" + " <img src=img/q.png height='20' width='20'>" + "Correct answer : 5";}
		
		if(r=="10")
			{message013.innerHTML = "Q09. Serena Williams is a famous player of?" + "Tennis" + "<span style=\"color:green;\">  Correct" + "<img src=img/c.png height='20' width='30'>" ;} 
		else if (r=="8")
			{message013.innerHTML = "Q09. Serena Williams is a famous player of? " + "<span style=\"color:red;\"> Incorrect" + "<img src=img/w.png height='20' width='20'>" + "Correct answer is: Tennis";}
		else
			{message013.innerHTML = "Q09. Serena Williams is a famous player of? " + "<span style=\"color:red;\"> Not selected" + "<img src=img/q.png height='20' width='20'>" + "Correct answer is: Tennis";}
		
		if(s=="8")
			{message014.innerHTML = "Q10. Which sport is linked with the term “Butterfly Stroke”" + "Swimming" + "<span style=\"color:green;\">  Correct"+"<img src=img/c.png height='20' width='30'>" ;} 
		else if (s=="6")
			{message014.innerHTML = "Q10. Which sport is linked with the term “Butterfly Stroke”" + "<span style=\"color:red;\"> Incorrect" + "<img src=img/w.png height='20' width='20'>" + "Correct answer is: Swimming";}
		else
			{message014.innerHTML = "Q10. Which sport is linked with the term “Butterfly Stroke”" + "<span style=\"color:red;\"> Not selected" + "<img src=img/q.png height='20' width='20'>" + "Correct answer is: Swimming";}
             message004.innerHTML =  "<button class=buttons002 onclick=repeat001()>...Repeat...</button>";
            }
                
            
    }
	
update = setInterval("timer001()", 1000);

function repeat001() {
    location.reload();
    }
		
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} 
	else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}