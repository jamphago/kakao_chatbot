//var can = "⎼".repeat(50);
//var skip = "\u200b".repeat(500);

function response(room, msg, sender, isGroupChat, replier, ImageDB) {

  if(msg.includes("/코로나")) {
    let pa = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=").get();
	let pa2 = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/regSocdisBoardView.do?brdId=6&brdGubun=68&ncvContSeq=495").get();

    
    var a = pa.select("dd.ca_value").get(0).text();
    var aa = pa.select("p.inner_value").get(0).text().replace(" ","");
    var b = pa.select("p.inner_value").get(1).text();
    var c = pa.select("p.inner_value").get(2).text(); // 코로나 알림이
    var d = pa.select("span.t_date").get(0).text();
   
   
   var a11 = pa2.select("h4.rssd_title_2").get(0).text();
   var a12 = pa2.select("p.rssd_descript").get(0).text().replace(/\-/g,"\n"); //2단계
   
   var a13 = pa2.select("h4.rssd_title_2").get(1).text();
   var a14 = pa2.select("p.rssd_descript").get(1).text().replace(/\-/g,"").replace("호남권 3개 (광주, 전북, 전남)","").replace("경북권 2개 (대구, 경북)","")
   .replace("경남권 3개 (부산, 울산, 경남)","").replace("강원 1개 (강원)","").replace("제주 1개 (제주)","");
   
   
   //var a15 = pa2.select("step_map_city1 > h3").get(0).text();
   //var a16 = pa2.select("step_map_city1 > h4").get(0).text();
   //var a17 = pa2.select("step_map_city1.p").get(0).text(); // 단계 표시
   //var a15 = a14.replace(/\r\n\t/g,"");                       //1.5단계
   
  /*  var a1 = pa2.select("h3.rssd_title_1").get(1).text(); // 서울
	var a2 = pa2.select("h4.rssd_title_2").get(2).text();
    
	var a3 = pa2.select("h3.rssd_title_1").get(2).text(); // 부산
	var a4 = pa2.select("h4.rssd_title_2").get(3).text();
	
	var a5 = pa2.select("h3.rssd_title_1").get(4).text(); //인천
	var a6 = pa2.select("h4.rssd_title_2").get(5).text();
	
	var a7 = pa2.select("h3.rssd_title_1").get(6).text(); //대전
	var a8 = pa2.select("h4.rssd_title_2").get(7).text();
	
	var a9 = pa2.select("h3.rssd_title_1").get(9).text(); //경기
	var a10 = pa2.select("h4.rssd_title_2").get(10).text();
   
		var now = new Date();
		var then = new Date("April 11,2021 09:00:00");
		var gap = then.getTime()-now.getTime();
		gapas = Math.floor((gap%(1000*60*60))/(1000*60)); //분
		gapa = Math.floor((gap%(1000*60*60*24))/(1000*60*60)); //시
		gap = Math.floor(gap/(1000*60*60*24));//일
   
   */
   
 
    replier.reply("[(아픔)코로나]"+d+"\n📍확진자 수: " +a+"명 ("+aa+"명)\nㄴ국내: +" 
	+b+"명\n" + "ㄴ해외: +"+c+"명\n" + "[(소주)거리두기 현황]\n" + 
	a11 + ": "+a12+"\n" +
	a13 + ": "+"\n" +a14+"\n"+
	//a5 + ": "+a6+"\n" +
	//a7 + ": "+a8+"\n" +
	//a9 + ": "+a10+"\n" +
	"적용기간: ~2021/04/11\n [(그만)인이상 집합금지]\n 적용기간: ~2021/04/11");
}
}