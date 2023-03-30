
var btn=document.getElementById("btn");
var btnc=document.getElementById("btn-c");
var btnmc=document.getElementById("btn-mc");
var btn24=document.getElementById("btn-24");

var eth=document.getElementById("eth");
var ethc=document.getElementById("eth-c");
var ethmc=document.getElementById("eth-mc");
var eth24=document.getElementById("eth-24");

var bnb=document.getElementById("bnb");
var bnbc=document.getElementById("bnb-c");
var bnbmc=document.getElementById("bnb-mc");
var bnb24=document.getElementById("bnb-24");

var doge=document.getElementById("doge");
var dogec=document.getElementById("doge-c");
var dogemc=document.getElementById("doge-mc");
var doge24=document.getElementById("doge-24");

var usdt=document.getElementById("usdt");
var usdtc=document.getElementById("usdt-c");
var usdtmc=document.getElementById("usdt-mc");
var usdt24=document.getElementById("usdt-24");

var lc=document.getElementById("lc-c");


//--get live coin prices--
var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cdogecoin%2Cbnb%2Clitecoin%2Cethereum%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    console.log(response);

    btn.innerHTML = response.bitcoin.usd;
    btnc.innerHTML = response.bitcoin.usd;
    btnmc.innerHTML = response.bitcoin.usd_market_cap;
    btn24.innerHTML = response.bitcoin.usd_24h_change;

    eth.innerHTML = response.ethereum.usd;
    ethc.innerHTML = response.ethereum.usd;
    ethmc.innerHTML = response.ethereum.usd_market_cap;
    eth24.innerHTML = response.ethereum.usd_24h_change;
    
    bnb.innerHTML = response.binancecoin.usd;
    bnbc.innerHTML = response.binancecoin.usd;
    bnbmc.innerHTML = response.binancecoin.usd_market_cap;
    bnb24.innerHTML = response.binancecoin.usd_24h_change;

    doge.innerHTML = response.dogecoin.usd;
    dogec.innerHTML = response.dogecoin.usd;
    dogemc.innerHTML = response.dogecoin.usd_market_cap;
    doge24.innerHTML = response.dogecoin.usd_24h_change;

    usdt.innerHTML = response.tether.usd;
    usdtc.innerHTML = response.tether.usd;
    usdtmc.innerHTML = response.tether.usd_market_cap;
    usdt24.innerHTML = response.tether.usd_24h_change;

    lc.innerHTML = response.litecoin.usd;
})

//--cancell reloading--
function handleForm(event){ event.preventDefault();}

//--add new item--
function shownewdivfrm1(){
    newitem+=1;
    document.getElementById("frm").addEventListener('click', handleForm);
    document.getElementById("newdivfrm1").style.display = "block";
    document.getElementById("bill-2").style.display = "block";
}
function shownewdivfrm2(){
    newitem+=1;
    document.getElementById("frm").addEventListener('click', handleForm);
    document.getElementById("newdivfrm2").style.display = "block";
    document.getElementById("bill-3").style.display = "block";
}
function shownewdivfrm3(){
    newitem+=1;
    document.getElementById("frm").addEventListener('click', handleForm);
    document.getElementById("newdivfrm3").style.display = "block";
    document.getElementById("bill-4").style.display = "block";
}
function shownewdivfrm4(){
    newitem+=1;
    document.getElementById("frm").addEventListener('click', handleForm);
    document.getElementById("newdivfrm4").style.display = "block";
    document.getElementById("bill-5").style.display = "block";
}
function shownewdivfrm5(){
    newitem+=1;
    document.getElementById("frm").addEventListener('click', handleForm);
    document.getElementById("newdivfrm5").style.display = "block";
    document.getElementById("bill-6").style.display = "block";
}
//--remove new item--
function remove1(){
    newitem-=1;
    document.getElementById("newdivfrm1").style.display = "none";
    document.getElementById("bill-2").style.display = "none";
}
function remove2(){
    newitem-=1;
    document.getElementById("newdivfrm2").style.display = "none";
    document.getElementById("bill-3").style.display = "none";
}
function remove3(){
    newitem-=1;
    document.getElementById("newdivfrm3").style.display = "none";
    document.getElementById("bill-4").style.display = "none";
}
function remove4(){
    document.getElementById("newdivfrm4").style.display = "none";
    document.getElementById("bill-5").style.display = "none";
}
function remove5(){
    newitem-=1;
    document.getElementById("newdivfrm5").style.display = "none";
    document.getElementById("bill-6").style.display = "none";
}

//---form validation---
var fname = document.getElementById("f-name");
var lname = document.getElementById("l-name");
var mail = document.getElementById("mail");
var newitem=1;


//--check fields--
function validation(){
    var accept=1;
    var text0="";
    var text1="";
    var text2="";
    var text3="";
    var text4="";
    var text5="";
    var text6="";
    var text7="";
    var text8="";

    if(fname.value ==""){
        text0="First name is missing\n";
        accept=0;
        
    }
    if(lname.value ==""){
        text1="Last name is missing\n";
        accept=0;
    }
    if(mail.value ==""){
        text2="E-mail is missing\n";
        accept=0;
    }
    if(document.getElementById("amount1").value==0){
        text3=document.getElementById("item1").value+" amount is missing\n";
        accept=0;
    }
    if(newitem>1){
        if(document.getElementById("amount2").value==0){
            text4=document.getElementById("item2").value+" amount is missing\n";
            accept=0;
        };
    }
    if(newitem>2){
        if(document.getElementById("amount3").value==0){
            text5=document.getElementById("item3").value+" amount is missing\n";
            accept=0;
        };
    }
    if(newitem>3){
        if(document.getElementById("amount4").value==0){
            text6=document.getElementById("item4").value+" amount is missing\n";
            accept=0;
        };
    }
    if(newitem>4){
        if(document.getElementById("amount5").value==0){
            text7=document.getElementById("item5").value+" amount is missing\n";
            accept=0;
        };
    }
    if(newitem>5){
        if(document.getElementById("amount6").value==0){
            text8=document.getElementById("item6").value+" amount is missing\n";
            accept=0;
        };
    }
    console.log(accept);
    if(accept==1){
        shwbill();
        document.getElementById("frm").reset();
    }
    else{
        alert(text0+text1+text2+text3+text4+text5+text6+text7+text8);
    }
}


//--buy clicking--
function buy1(){
    document.getElementById("item1").value="Bitcoin";
}
function buy2(){
    document.getElementById("item1").value="Ethereum";
}
function buy3(){
    document.getElementById("item1").value="BnB";
}
function buy4(){
    document.getElementById("item1").value="Doge";
}
function buy5(){
    document.getElementById("item1").value="USDT";
}
function buy6(){
    document.getElementById("item1").value="Litecoin";
}

//--hide bill--
function hidebill(){
    document.getElementById("bill").style.display="none";
}
//--reset all--
function reset_all(){
    document.getElementById("frm").reset();
    document.getElementById("bill").style.display="none";
}

//--total--
function shwbill(){
    //--display bill element--
    document.getElementById("bill").style.display= "block";
    let totalvalue=0;
    totalvalue = +document.getElementById("amount1").value;
    if(newitem>1){
        totalvalue=totalvalue+ +document.getElementById("amount2").value;
    }
    if(newitem>2){
        totalvalue=totalvalue+ +document.getElementById("amount3").value;
    }
    if(newitem>3){
        totalvalue=totalvalue+ +document.getElementById("amount4").value;
    }
    if(newitem>4){
        totalvalue=totalvalue+ +document.getElementById("amount5").value;
    }
    if(newitem>5){
        totalvalue=totalvalue+ +document.getElementById("amount6").value;
    }

    //--check coin type--
    function typecheck(nuM){
        var a = document.getElementById("item"+nuM).value;
        var c;
        switch(a){
            case "Bitcoin":
                c=44500;
                return c;
            case "Ethereum":
                c=3100;
                return c;
            case "Doge":
                c=0.15;
                return c;
            case "BnB":
                c=415;
                return c;
            case "Litecoin":
                c=120;
                return c;
            case "USDT":
                c=1;
                return c;
        }
    }

    //--calculate amount of coins--
    function calamount(num){
        let b;
        switch(num){
            case 1:
                b= +document.getElementById("amount1").value/typecheck(1);
                return b;
            case 2:
                b= +document.getElementById("amount2").value/typecheck(2);
                return b;
            case 3:
                b= +document.getElementById("amount3").value/typecheck(3);
                return b;
            case 4:
                b= +document.getElementById("amount4").value/typecheck(4);
                return b;
            case 5:
                b= +document.getElementById("amount5").value/typecheck(5);
                return b;
            case 6:
                b= +document.getElementById("amount6").value/typecheck(6);
                return b;
        }
        
    }

    document.getElementById("total").innerText=totalvalue;
    document.getElementById("fn").innerText=fname.value;
    document.getElementById("ln").innerText=lname.value;
    document.getElementById("em").innerText=mail.value;
    
    document.getElementById("product1").innerText=document.getElementById("item1").value;
    document.getElementById("product2").innerText=document.getElementById("item2").value;
    document.getElementById("product3").innerText=document.getElementById("item3").value;
    document.getElementById("product4").innerText=document.getElementById("item4").value;
    document.getElementById("product5").innerText=document.getElementById("item5").value;
    document.getElementById("product6").innerText=document.getElementById("item6").value;
    
    document.getElementById("amnt1").innerText= calamount(1);
    document.getElementById("amnt2").innerText= calamount(2);
    document.getElementById("amnt3").innerText= calamount(3);
    document.getElementById("amnt4").innerText= calamount(4);
    document.getElementById("amnt5").innerText= calamount(5);
    document.getElementById("amnt6").innerText= calamount(6);

    document.getElementById("price1").innerText= +document.getElementById("amount1").value;
    document.getElementById("price2").innerText= +document.getElementById("amount2").value;
    document.getElementById("price3").innerText= +document.getElementById("amount3").value;
    document.getElementById("price4").innerText= +document.getElementById("amount4").value;
    document.getElementById("price5").innerText= +document.getElementById("amount5").value;
    document.getElementById("price6").innerText= +document.getElementById("amount6").value;
}
//--submit function-- 
function func_submit(){
    var form = document.getElementById("frm");
    form.addEventListener('submit', handleForm);
    validation();
    
}