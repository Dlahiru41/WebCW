function getTheValues(myRef){
	var total=0;
let valueArray1= getRadioValue(myRef.q1);

if (valueArray1=="Dogecoin"){
	total=total+2;
	var mydiv=document.getElementById("q133");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Dogecoin-</strong><i>your answer is correct</i></span>";
}
else if (valueArray1=="Ether"){
	total=total-1;
	var mydiv1=document.getElementById("q133");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Dogecoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q111");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Ether-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1=="Tether"){
	total=total-1;
	var mydiv1=document.getElementById("q133");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Dogecoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q122");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Tether-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1=="Cardano"){
	total=total-1;
	var mydiv1=document.getElementById("q133");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Dogecoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q144");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Cardano-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1==""){
	total=total;
	var mydiv=document.getElementById("q133");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Dogecoin-</strong><i>the correct answer</i></span>";

}

let valueArray2= getRadioValue(myRef.q2);
if (valueArray2=="Solana"){
	total=total+2;
	var mydiv=document.getElementById("q211");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Solana-</strong><i>your answer is correct</i></span>";
}
else if (valueArray2=="Binance"){
	total=total-1;
	var mydiv1=document.getElementById("q211");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Solana-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q222");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Binance coin-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray2=="Cardano"){
	total=total-1;
	var mydiv1=document.getElementById("q211");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Solana-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q233");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Cardano-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray2=="Dogecoin"){
	total=total-1;
	var mydiv1=document.getElementById("q211");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Solana-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q244");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Dogecoin-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray1==""){
	total=total;
	var mydiv=document.getElementById("q211");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Solana-</strong><i>the correct answer</i></span>";
}

let valueArray3= getRadioValue(myRef.q3);
if (valueArray3=="Buying Bitcoins directly in china is banded"){
	total=total+2;
	var mydiv=document.getElementById("q333");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Buying Bitcoins directly in china is banded-</strong><i>your answer is correct</i></span>";
}
else if (valueArray3=="It makes buying bitcoin cheaper"){
	total=total-1;
	var mydiv1=document.getElementById("q333");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Buying Bitcoins directly in china is banded-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q311");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>It makes buying bitcoin cheaper-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray3=="Bitcion exchanges only accept only USD dominated payments"){
	total=total-1;
	var mydiv1=document.getElementById("q333");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Buying Bitcoins directly in china is banded-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q322");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Bitcion exchanges only accept only USD dominated payments-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray3=="It allows access to services like Alipay"){
	total=total-1;
	var mydiv1=document.getElementById("q333");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Buying Bitcoins directly in china is banded-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q344");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>It allows access to services like Alipay-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray3==""){
	total=total;
	var mydiv=document.getElementById("q333");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Buying Bitcoins directly in china is banded-</strong><i>the correct answer</i></span>";

}


let valueArray4= getRadioValue(myRef.q4);
if (valueArray4=="A digital currency issued by the central bank"){
	total=total+2;
	var mydiv=document.getElementById("q444");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>A digital currency issued by the central bank-</strong><i>your answer is correct</i></span>";
}
else if (valueArray4=="A way encoding tion on a blaockchain"){
	total=total-1;
	var mydiv1=document.getElementById("q444");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>A digital currency issued by the central bank-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q411");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>A way encoding tion on a blaockchain-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray4=="A reward you get for lending bitcoin"){
	total=total-1;
	var mydiv1=document.getElementById("q444");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>A digital currency issued by the central bank-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q422");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>A reward you get for lending bitcoin-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray4=="A protocol used to convert digital currencies to real cash"){
	total=total-1;
	var mydiv1=document.getElementById("q444");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>A digital currency issued by the central bank-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q433");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>A protocol used to convert digital currencies to real cash-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray4==""){
	total=total;
	var mydiv=document.getElementById("q444");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>A digital currency issued by the central bank-</strong><i>the correct answer</i></span>";

}


let valueArray5= getRadioValue(myRef.q5);
if (valueArray5=="Bitcoin"){
	total=total+2;
	var mydiv=document.getElementById("q511");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Bitcoin-</strong><i>your answer is correct</i></span>";
}
else if(valueArray5=="Ether"){
	total=total-1;
	var mydiv1=document.getElementById("q511");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Bitcoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q522");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Ether-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray5=="Tether"){
	total=total-1;
	var mydiv1=document.getElementById("q511");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Bitcoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q533");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Tether-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray5=="Dogecoin"){
	total=total-1;
	var mydiv1=document.getElementById("q511");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Bitcoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q544");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Dogecoin-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray5==""){
	total=total;
	var mydiv=document.getElementById("q511");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Bitcoin-</strong><i>the correct answer</i></span>";
}

let valueArray6= getRadioValue(myRef.q6);
if (valueArray6=="More than Greece"){
	total=total+2;
	var mydiv=document.getElementById("q611");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Dogecoin-</strong><i>your answer is correct</i></span>";
}
else if (valueArray6=="More than Australia"){
	total=total-1;
	var mydiv1=document.getElementById("q611");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>More than Greece-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q622");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>More than Australia-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray6=="More than American Airlines"){
	total=total-1;
	var mydiv1=document.getElementById("q611");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>More than Greece-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q633");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>More than American Airlines-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray6=="More than U.S federal government"){
	total=total-1;
	var mydiv1=document.getElementById("q611");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>More than Greece-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q644");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>More than U.S federal government-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray6==""){
	total=total;
	var mydiv=document.getElementById("q611");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>More than Greece-</strong><i>the correct answer</i></span>";
}

let valueArray7= getRadioValue(myRef.q7);
if (valueArray7=="Pledging your tokens to verify transactions"){
	total=total+2;
	var mydiv=document.getElementById("q711");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Pledging your tokens to verify transactions-</strong><i>your answer is correct</i></span>";
}
else if (valueArray7=="Slang for buying cryptocurrency"){
	total=total-1;
	var mydiv1=document.getElementById("q711");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Pledging your tokens to verify transactions-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q722");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Slang for buying cryptocurrency-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray7=="Lending your cryptocurrency to other users"){
	total=total-1;
	var mydiv1=document.getElementById("q711");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>Pledging your tokens to verify transactions-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q733");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Lending your cryptocurrency to other users-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray7==""){
	total=total;
	var mydiv=document.getElementById("q711");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>Pledging your tokens to verify transactions-</strong><i>the correct answer</i></span>";
}

let valueArray8= getRadioValue(myRef.q8);
if (valueArray8=="The crypto equivalent for pump and dump"){
	total=total+2;
	var mydiv=document.getElementById("q822");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>The crypto equivalent for pump and dump-</strong><i>your answer is correct</i></span>";
}
else if (valueArray8=="An alternative cryptocurrency"){
	total=total-1;
	var mydiv1=document.getElementById("q822");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The crypto equivalent for pump and dump-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q811");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>An alternative cryptocurrency-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray8=="Slang for teasing someone about their crypto Purchases"){
	total=total-1;
	var mydiv1=document.getElementById("q822");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The crypto equivalent for pump and dump-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q833");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Slang for teasing someone about their crypto Purchases-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray8=="An upgrade to a cryptocurrency"){
	total=total-1;
	var mydiv1=document.getElementById("q822");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The crypto equivalent for pump and dump-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q844");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>An upgrade to a cryptocurrency-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray8==""){
	total=total;
	var mydiv=document.getElementById("q822");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>The crypto equivalent for pump and dump-</strong><i>the correct answer</i></span>";
}

let valueArray9= getRadioValue(myRef.q9);
if (valueArray9=="The method for verifying  transactions is different and less energy intensive than for"){
	total=total+2;
	var mydiv=document.getElementById("q933");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>The method for verifying  transactions is different and less energy intensive than for<br>bitcoin-</strong><i>your answer is correct</i></span>";
}
else if (valueArray9=="It mandates that renewable power must be used for coin mining"){
	total=total-1;
	var mydiv1=document.getElementById("q933");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The method for verifying  transactions is different and less energy intensive than for<br>bitcoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q911");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>It mandates that renewable power must be used for coin mining-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray9=="It’s less popular and smaller than bitcoin, so it simply uses less energy"){
	total=total-1;
	var mydiv1=document.getElementById("q933");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The method for verifying  transactions is different and less energy intensive than for<br>bitcoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q922");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>It’s less popular and smaller than bitcoin, so it simply uses less energy-</strong><i>your answer is incorrect</i></span>";
}
else if (valueArray9=="Its logo on currency exchanges is green"){
	total=total-1;
	var mydiv1=document.getElementById("q933");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The method for verifying  transactions is different and less energy intensive than for<br>bitcoin-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q944");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>Its logo on currency exchanges is green-</strong><i>your answer is incorrect</i></span>";
}
else if(valueArray9==""){
	total=total;
	var mydiv=document.getElementById("q933");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>The method for verifying  transactions is different and less energy intensive than for<br>bitcoin-</strong><i>the correct answer</i></span>";

}

let valueArray10= getRadioValue(myRef.q10);
if (valueArray10=="The organized destruction of coins"){
	total=total+2;
	var mydiv=document.getElementById("q1011");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>The organized destruction of coins-</strong><i>your answer is correct</i></span>";
}
else if (valueArray10=="When prices soar more than 10% in a day"){
	total=total-1;
	var mydiv1=document.getElementById("q1011");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The organized destruction of coins-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q1022");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>When prices soar more than 10% in a day-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray10=="A giveaway of coins for promotional purposes"){
	total=total-1;
	var mydiv1=document.getElementById("q1011");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The organized destruction of coins-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q1033");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>A giveaway of coins for promotional purposes-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray10=="A police sting designed to trap criminals using the coin"){
	total=total-1;
	var mydiv1=document.getElementById("q1011");
	mydiv1.innerHTML="<span style=\"color:#008000\"><strong>The organized destruction of coins-</strong><i>the correct answer</i></span>";
	var mydiv2=document.getElementById("q1044");
	mydiv2.innerHTML="<span style=\"color:#A41623\"><strong>A police sting designed to trap criminals using the coin-</strong><i>your answer is incorrect</i></span>";

}
else if(valueArray10==""){
	total=total;
	var mydiv=document.getElementById("q1011");
	mydiv.innerHTML="<span style=\"color:#008000\"><strong>The organized destruction of coins-</strong><i>the correct answer</i></span>";
}
document.getElementById("score").innerHTML="your score is "+total+"<span style=\"color:grey\">/20</span>";
document.getElementById("retake").style.display="block";

console.log(total);
clearInterval(time);
document.getElementById("sub").style.display="none";
if (total>=12 && total<=20){
document.querySelector("body").style.backgroundColor="#40F99B";}
if(total>=8 && total<12){
document.querySelector("body").style.backgroundColor="#F0F757";}
if(total<5){
document.querySelector("body").style.backgroundColor="#FF4949";}	
}


function getRadioValue(radioArray){
    for( let i=0; i< radioArray.length; i++){
        if (radioArray[i].checked){
            return radioArray[i].value;
            
        }
    }
    return "";
}

var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        getTheValues(quiz);
        document.getElementById('sub').style.display="none";
    }
}