var x,y,a,t1,t2,h2up=h2down=h1up=h1down=start=angled=setangle=score=0,reverse=1,t=10;

function movball(){

	if(setangle==0){
		while(angled>-35&&angled<35){
			angled=Math.floor(Math.random()*91-45);
			angle=Math.PI*angled/180;
			setangle=1;
		}
	}


	balltop+=Math.round(Math.sin(angle)*reverse);
	ballleft+=Math.round(Math.cos(angle)*reverse);



	if(balltop==0||balltop==180){	//Collision with wall
		angle=-angle;
	}

	else if((ballleft==left2-20 && balltop>top2-20 && balltop<top2+50) || (ballleft==left1+10 && balltop>top1-20 && balltop<top1+50)){	//Collision with stick
		angle=-angle;
		reverse=-reverse;
		if(t>0){
			t--;
			
		}
		$("span").html(++score);
		$("#score").val(score);
		
	}
	else if (ballleft==-21 || ballleft==501) {
		final();
		
	}



	$(".ball").css("top",balltop);
	$(".ball").css("left",ballleft);

	setTimeout(movball,t);	
}


function up2(){ 	//Move stick2 upwards
	if(top2==0)
		clearInterval(t2up);
	else
			$(".stick2").css("top",--top2);

}

function down2(){	//Move stick2 downwards
	if(top2==150)
		clearInterval(t2down);
	else
			$(".stick2").css("top",++top2);

}



function up1(){		//Move stick1 upwards
	if(top1==0)
		clearInterval(t1up);
	else
			$(".stick1").css("top",--top1);

}

function down1(){	//Move stick1 downwards
	if(top1==150)
		clearInterval(t1down);
	else
			$(".stick1").css("top",++top1);

}

function final() {	//Game over
	$(".final").css("display","initial")
	clearTimeout();
	
}



$(document).ready(function() {


	top2=parseInt($(".stick2").css("top"));
	top1=parseInt($(".stick1").css("top"));
	left2=parseInt($(".stick2").css("left"));
	left1=parseInt($(".stick1").css("left"));
	ballleft=parseInt($(".ball").css("left"));
	balltop=parseInt($(".ball").css("top")); 

	$(document).keydown(function(event) {

		if(start==0&&event.which==32){
			start=1;
			setTimeout(movball,t);
		}

		else{

			if(event.which==38){
				if(h2up==0){
					t2up=setInterval(up2,10);
					h2up=1
				}
				
				
				
			}

			else if(event.which==40){
				if(h2down==0){
					t2down=setInterval(down2,10);
					h2down=1;
				}

			}


			else if(event.which==87){
				if(h1up==0){
					t1up=setInterval(up1,10);
					h1up=1
				}
				
			}

			else if(event.which==83){
				if(h1down==0){
					t1down=setInterval(down1,10);
					h1down=1;
				}
			}
		}




	});

	$(document).keyup(function(event) {
		if(event.which==38){
			h2up=0;
			clearInterval(t2up);

		}

		else if(event.which==40){
			h2down=0;
			clearInterval(t2down);
		}

		else if(event.which==87){
			h1up=0;
			clearInterval(t1up);

		}

		else if(event.which==83){
			h1down=0;
			clearInterval(t1down);
		}
	});


	
});