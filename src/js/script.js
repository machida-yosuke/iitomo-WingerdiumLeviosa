import {Howl, Howler} from 'howler';
const btn = document.getElementsByClassName('js-record-btn')[0];
const content = document.getElementsByClassName('js-content')[0];
const speech = new webkitSpeechRecognition();

const sound = new Howl({
  src: ['sound/stop.wav']
});
const yarimasita = new Howl({
  src: ['sound/yarimasita.wav']
});


speech.lang = "ja";
btn.addEventListener('click',function(e){
  speech.start();
},false);

speech.addEventListener( 'result' , function( e ) {
	const quote = e.results[0][0].transcript;
	if(quote == 'ウィンガーディアムレビオーサ' ){
		content.innerHTML='スカート上がる';
    yarimasita.play();
		return;
	}else if(quote == 'ウィンガーディアムレビオサー' ){
		content.innerHTML='ちがう。あなたのはウィンガーディアムレビオサー';
    sound.play();
		return;
	}else{
		content.innerHTML=quote;
	}
},false);
