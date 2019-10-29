function setCartString(){
	this.writetext = this.items_in_cart.toString();// + this.text;
}

function setFirsatVisNext(){
	if (this.firsatvisnum > 0){
		this.firsatvisnum = 0;
	}else{
		this.firsatvisnum = this.firsatvisnum + 1;
	}
}

function setFirsatVisPrev(){
	if (this.firsatvisnum == 0){
		this.firsatvisnum = 1;
	}else{
		this.firsatvisnum = this.firsatvisnum - 1;
	}
}

function setPopularVisNext(){
	if (this.popularvisnum > 0){
		this.popularvisnum = 0;
	}else{
		this.popularvisnum = this.popularvisnum + 1;
	}
}

function setPopularVisPrev(){
	if (this.popularvisnum == 0){
		this.popularvisnum = 1;
	}else{
		this.popularvisnum = this.popularvisnum - 1;
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleFooter(){
	this.showfooter = !this.showfooter;
	if(this.showfooter)
		this.footerbuttontext = "X";
	else
		this.footerbuttontext = "V";
}

window.document.body.onscroll = function() {
    if(window.scrollY > 200){
			app.showscrollbutton = true;
		}
		else{
			app.showscrollbutton = false;
		}
}

function populateArrays(){
	//populate days
	for(i = 1; i < 32; i++){
		this.range.push(i);
	}

	//populate months
	for(i = 1; i < 13; i++){
		this.monthrange.push(i);
	}

	//populate years
	for(i = 1945; i < 2014; i++){
		this.yearrange.push(i);
	}
}

function checkifempty(index){
	if(index == 6 && app.textboxentries[index].length < 6){
		app.textboxempty[index] = true;
	}
	else if((index > 2 && index < 6) && (app.textboxentries[index] == "GÜN" || app.textboxentries[index] == "AY" || app.textboxentries[index] == "YIL")){
			app.textboxempty[index] = true;
	}
	else if((index < 3 || index > 6) && (app.textboxentries[index].length == 0)){
			app.textboxempty[index] = true;
	}
	else{
		app.textboxempty[index] = false;
	}

	this.$forceUpdate();
}

function modifyPhoneNumber(){
	if(isNaN(parseInt(app.textboxentries[7][app.textboxentries[7].length - 1], 10))){
		app.textboxentries[7] = app.textboxentries[7].slice(0, -1);
	}

	if(app.textboxentries[7].length > app.prevlength){
		if(app.textboxentries[7].length == 1){
			app.textboxentries[7] = "(" + app.textboxentries[7];
		}
		else if(app.textboxentries[7].length == 4){
			app.textboxentries[7] = app.textboxentries[7] + ") ";
		}
		else if(app.textboxentries[7].length == 9){
			app.textboxentries[7] = app.textboxentries[7] + " ";
		}
		else if(app.textboxentries[7].length == 12){
			app.textboxentries[7] = app.textboxentries[7] + " ";
		}
	}

	app.prevlength = app.textboxentries[7].length;
}

function redirect(){
	window.location.href = '..\\uyegirisi\\uyegirisi.html';
}

async function scrollToTop() {
	for(i = window.scrollY/10; i >= 0; i--)
	{
		window.scrollTo(0,i*10);
		await sleep(1);
	}
}

var Scrollbutton = {
  props: [],
  template: '<button v-if="$parent.showscrollbutton" v-on:click="scrollToTop" class="button" style="position: fixed;left: 95%;top: 90%;font-size: 30px;padding-bottom: 0px;">^</button>',
	data: function (){
		return {

		};
	},
  methods: {
        scrollToTop
  }
}

var Smileybutton = {
	props: {
		pref: Boolean
	},
	template: `<span class="smileyfacecontainer">
							<span class="smileyface"></span>
								<button v-on:click="showexperiencebox = !showexperiencebox" class="smileybutton"><img v-if="!showexperiencebox" v-bind:src="getstr() + 'img/smiley.png'" alt="smiley" style="width: 25px;height: 27px;"><span v-if="showexperiencebox" class="smileyx">X</span></button>
								<div v-if="showexperiencebox" class="experiencemenu">
									<div style="text-align: center;color: rgb(51,51,51);">Teknosa.com deneyiminizi nasıl değerlendirirsiniz?</div><br><br>
									<div class="experiencebuttonscontainer" style="display: grid;grid-template-columns: 20% 20% 20% 20% 20%;">
										<button class="experiencebuttons2" style="z-index: 3;"><img class="experiencebuttons" v-bind:src="getstr() + 'img/hicbegenmedim.png'"><br><a class="experiencetext">Hiç beğenmedim</a></button>
										<button class="experiencebuttons2" style="z-index: 2;"><img class="experiencebuttons" v-bind:src="getstr() + 'img/begenmedim.png'"><br><a class="experiencetext"><br>Beğenmedim</a></button>
										<button class="experiencebuttons2"><img class="experiencebuttons" v-bind:src="getstr() + 'img/bilmiyorum.png'"><br><a class="experiencetext">Bir fikrim yok</a></button>
										<button class="experiencebuttons2"><img class="experiencebuttons" v-bind:src="getstr() + 'img/begendim.png'"><br><a class="experiencetext"><br>Beğendim</a></button>
										<button class="experiencebuttons2"><img class="experiencebuttons" v-bind:src="getstr() + 'img/cokbegendim.png'"><br><a class="experiencetext">Çok beğendim</a></button>

									</div>
								</div>
							</span>`,
	data: function (){
		return {
			showexperiencebox: false
		};
	},
	methods: {
        getstr: function(){
					if(this.pref){
						return "..\\";
					}
					else{
						return "";
					}
				}
  }
}

var Slidingmenu = {
	props: {
		img0: String,
		img1: String,
		img2: String,
		img3: String,
		img4: String,
		img5: String,
		img6: String,
		img7: String,
		img8: String,
		img9: String,
		title: String,
		pref: Boolean
	},
  template: `<div class="tenpercent gununfirsatlari" style="margin-bottom: 15px;">
							<p style="font-size: 19px;padding-top: 25px;padding-bottom: 10px;padding-left: 3%;"><b>{{title}}</b></p>
							<hr class="menuhr">

							<div v-if="firsatvisnum == 0" style="display: grid;grid-template-columns: 20% 20% 20% 20% 20%;">
								<a class="brdr" href="#"><img :src="getstr() + this.img0" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img1" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img2" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img3" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img4" class="boxshadow"></a>
							</div>

							<div v-if="firsatvisnum == 1" style="display: grid;grid-template-columns: 20% 20% 20% 20% 20%;">
								<a class="brdr" href="#"><img :src="getstr() + this.img5" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img6" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img7" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img8" class="boxshadow"></a>
								<a class="brdr" href="#"><img :src="getstr() + this.img9" class="boxshadow"></a>
							</div>

							<button v-on:click="setFirsatVisPrev" class="button" style="position: relative;top: -200px;"><b><</b></button>
							<button v-on:click="setFirsatVisNext" class="button" style="position: relative;top: -200px;left: 91%;"><b>></b></button>

							<div style="margin-left: 45%;">
								<div class="pageindicatorgeneral" v-bind:class="(firsatvisnum == 0) ? 'pageindicatoractive' : 'pageindicatorpassive'"></div>
								<div style="left: 10px;bottom: 7px;" class="pageindicatorgeneral" v-bind:class="(firsatvisnum == 1) ? 'pageindicatoractive' : 'pageindicatorpassive'"></div>
							</div>
						 </div>`,
	data: function (){
		return {
			firsatvisnum: 0
		};
	},
  methods: {
		setFirsatVisNext,
		setFirsatVisPrev,
		getstr: function(){
			if(this.pref){
				return "..\\";
			}
			else{
				return "";
			}
		}
  }
}

var app = new Vue({
	el: "#indexscript",
	components: {
		'scroll-button': Scrollbutton,
		'smiley-button': Smileybutton,
		'sliding-menu': Slidingmenu
	},
	data:{
		items_in_cart: 1,
		text: " Sepetim",
		writetext: "",
		visnum: 0,
		firsatvisnum: 0,
		popularvisnum: 0,
		showfooter: true,
		footerbuttontext: "X",
		showsecondarymenu: -1,
		showmenu: false,
		showmenu2: false,
		showscrollbutton: false,
		showexperiencebox: false,
		range: [],
		monthrange: [],
		yearrange: [],
		checkboxchecked: false,
		prevlength: 0,
		textboxentries:["","","","GÜN","AY","YIL","","","",""],
		textboxempty: [false,false,false,false,false,false,false,false,false,false]
	},
	methods:{
		setCartString,
		setFirsatVisNext,
		setFirsatVisPrev,
		setPopularVisNext,
		setPopularVisPrev,
		scrollToTop,
		toggleFooter,
		populateArrays,
		checkifempty,
		modifyPhoneNumber,
		redirect
	},
	beforeMount(){
		this.setCartString(),
		this.populateArrays()
	}
});
