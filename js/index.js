


$('.cd100').countdown100({
    /*Set Endtime here*/
    /*Endtime must be > current time*/
    endtimeYear: 2020,
    endtimeMonth: 02,
    endtimeDate: 27,
    endtimeHours: 13,
    endtimeMinutes: 30,
    endtimeSeconds: 0,
    timeZone: "" 
    // ex:  timeZone: "America/New_York"
    //go to " http://momentjs.com/timezone/ " to get timezone
});

$("document").ready(function(){
    alert(1);
    var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
        var i,s,ss=['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
    }).listen();
});


