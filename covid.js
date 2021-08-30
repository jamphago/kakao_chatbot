//코로나 알림이 챗봇//

function response(room, msg, sender, isGroupChat, replier, ImageDB) {

  if(msg.includes("/코로나")) {
    let pa = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=").get();
	let pa2 = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/regSocdisBoardView.do?brdId=6&brdGubun=68&ncvContSeq=495").get();

    
    var a = pa.select("dd.ca_value").get(0).text();
    var aa = pa.select("p.inner_value").get(0).text().replace(" ","");
    var b = pa.select("p.inner_value").get(1).text();
    var c = pa.select("p.inner_value").get(2).text(); // 코로나 알림이
    //var d = pa.select("span.t_date").get(0).text();
   
   
   var a11 = pa2.select("h4.rssd_title_2").get(0).text();
   var a12 = pa2.select("p.rssd_descript").get(0).text().replace(/\-/g,"\n"); //2단계
   
   var a13 = pa2.select("h4.rssd_title_2").get(1).text();
   var a14 = pa2.select("p.rssd_descript").get(1).text().replace(/\-/g,"").replace("호남권 3개 (광주, 전북, 전남)","").replace("경북권 2개 (대구, 경북)","")
   .replace("경남권 3개 (부산, 울산, 경남)","").replace("강원 1개 (강원)","").replace("제주 1개 (제주)","");
   
   
 
    replier.reply("[(아픔)코로나]"+d+"\n📍확진자 수: " +a+"명 ("+aa+"명)\nㄴ국내: +" 
	+b+"명\n" + "ㄴ해외: +"+c+"명\n" + "[(소주)거리두기 현황]\n" + 
	a11 + ": "+a12+"\n" +
	a13 + ": "+"\n" +a14+"\n"+
	"적용기간: ~2021/04/11\n [(그만)인이상 집합금지]\n 적용기간: ~2021/04/11");
}
}
