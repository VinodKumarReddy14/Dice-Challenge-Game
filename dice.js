var game = true;
while(game){
    var scrs = [];
    for(var i=0; i<2; i++){
        var pls= Math.floor(Math.random()*6)+1;
        scrs.push(pls);
        var imgsrcchg = "/images/dice"+pls+".png";
        document.querySelectorAll("img")[i].setAttribute("src",imgsrcchg);

    }
    if(scrs[0]>scrs[1]){document.querySelector('h1').innerHTML="Player1 Won!";}
    else if(scrs[0]<scrs[1]){document.querySelector('h1').innerHTML="Player2 Won!";}
    else{document.querySelector('h1').innerHTML="Draw!";}
}