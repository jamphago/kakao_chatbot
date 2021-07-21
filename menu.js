
//점심메뉴 추천 챗봇

const scriptName="menu.js"


var menu = ['수육국밥', '삼겹살', '돈까스', '닭갈비','뼈해장국','햄버거','백반','제육볶음','김치찌개','초밥','떡볶이'];
//var setmenu = new Set(menu);

function response(room, msg, sender, isGroupChat, replier) {
    msg = msg.trim();
	if(msg == "/메뉴") {
			var pick = menu[Math.floor(Math.random()*menu.length)];
			/*var pick2 = member[Math.floor(Math.random()*9)];
			var now = new Date();
			var then = new Date("December 18,2020 09:00:00");
			var gap = then.getTime()-now.getTime();
			gapas = Math.floor((gap%(1000*60*60))/(1000*60)); //분
			gapa = Math.floor((gap%(1000*60*60*24))/(1000*60*60)); //시
			gap = Math.floor(gap/(1000*60*60*24));//일*/
		   
			replier.reply(sender + "님 오늘의 추천 메뉴는 "+pick+"입니다!\n\n"+"음식을 추가하고 싶은 경우 '/추가 음식명' 명령어를 입력해주세요!");
			}
       
    
  if(msg.startsWith("/추가 ")) {
	var add1 = msg.slice(4);
	if(!menu.includes(add1)){
		menu.push(add1);
    	replier.reply(add1+"(이)가 메뉴판에 추가되었습니다!!");	
	}else{
		replier.reply("해당 음식이 이미 메뉴판에 존재합니다!!");
	}
  }
  if(msg.startsWith("/삭제 ")){
	  var del1 = msg.slice(4);
	  if(menu.includes(del1)){
		menu.splice(menu.indexOf(del1),1);
		replier.reply(del1+"이 삭제되었습니다!");
	  }else{
		  replier.reply("해당 음식이 메뉴판에 존재하지않습니다!");
	    }
  }

  if(msg == "/메뉴판") {
		replier.reply(menu);
}
}



