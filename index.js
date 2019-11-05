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

var Header = {
	props: {
		pref: Boolean
	},
		template:`<div>
								<div class="headerlinks">
									<a style="position: relative;top: -3px;" class="toplinks" title="Mağaza Bul" href="#"><img style="width: 20px;" v-bind:src="getstr() + 'img/magazalaricon - kucuk.png'"><span style="position: relative;top: -5px;left: 3px;">Mağaza Bul</span></a>
								 	<a style="position: relative;top: -1px;left: -10px;" class="toplinks" title="Kargom Nerede?" href="#"><img style="width: 15px;" v-bind:src="getstr() + 'img/aynigun - kucuk.png'"><span style="position: relative;top: -3px;left: 5px;">Kargom Nerede?</span></a>
								 	<a class="toplinks" title="Siparişlerim" href="#">Siparişlerim</a>
								 	<a class="toplinks" title="Yardım Merkezi" href="#">Yardım Merkezi</a>
								 	<a class="toplinks" title="Garanti & İade" href="#">Garanti & İade</a>
								 	<a class="toplinks" title="İletişim" href="#">İletişim</a>
								</div>

								<div class="logoandsearchbar">
								 	<a v-bind:href="getstr() + 'index.html'">
								 		<img v-bind:src="getstr() + 'img/teknosa-logo.svg'" alt="Logo" style="width:216px;height:58px;">
								 	</a>
								 	<input type="text" class="searchbox" placeholder="Teknosa.com'da ara">
								 	<button class="searchbuttton"><img v-bind:src="getstr() + 'img/search.png'" alt="search"></button>
								 	<a class="cartlink" v-bind:href="getstr() + 'sepet/sepet.html'"><img v-bind:src="getstr() + 'img/carticon.png'" style="width: 35px;"><span style="font-size: 13px;color: white;position: relative; left: 60%;"><b>{{writetext}}</b></span><span style="margin-top: 10px;">Sepetim</span></a>
								</div>

								<div class="belowlogolinks">
								 	<a class="lglinks" href="#">Monster</a>
									<a class="lglinks" href="#">Xiaomi Mi A3</a>
									<a class="lglinks" href="#">Samsung Galaxy A10S</a>
									<a class="lglinks" href="#">iPhone 11</a>
								</div>
							</div>`,
	data: function(){
		return {
			items_in_cart: 1,
			writetext: "1"
		};
	},
	methods:{
		setCartString,
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

var NavBar = {
	props: {
		pref: Boolean
	},
			template: `<div>
									<div class="navigationbar">
										<span class="menucontainer" v-on:mouseleave="showmenu = false">
											<a v-on:mouseover="showmenu = true" class="navlinks" style="margin-left: 45%;z-index: 1;display: block;" href="#">TÜM ÜRÜNLER</a>
											<div v-if="showmenu" v-on:mouseleave="showsecondarymenu = -1" class="menu" style="margin-left: 45%;margin-top: 40px;">
												<!--secondary menu 0-->
												<div v-if="showsecondarymenu == 0" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 45%;">
														<a class="secondarymenulinks" href="#"><b>LED Televizyonlar</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Monitör TV / LED Ekran</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Hoparlörler</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Bluetooth Hoparlör</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Soundbar</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Amfili Hoparlör</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Uydu Alıcı ve Aksesuarları</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Televizyon Aksesuarları</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 50%;">
														<a class="secondarymenulinks" href="#"><b>Ev Sinema Sistemleri</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Sinema Sistemi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">DVD ve Blu-Ray Oynatıcı</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Müzik ve Ses Sistemleri</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Projeksiyon Cihazları</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Oto Ürünleri ve Sistemleri</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Piller ve Şarj Cihazları</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Piller</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Pil Şarj Cihazları</a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">
														<a href="#"><img :src="getstr() + 'img/tv.jpg'"></a>
													</span>
												</div>


												<!--secondary menu 1-->
												<div v-if="showsecondarymenu == 1" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 90%;">
														<a class="secondarymenulinks" href="#"><b>Cep Telefonu</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Android Telefonlar</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">iPhone iOS Telefonlar</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Diğer Telefonlar</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Giyilebilir Teknoloji</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Cep Telefonu Aksesuarları</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Taşınabilir Şarj Cihazları</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kılıf ve Koruyucular</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Şarj Cihazları</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Araç Kitleri</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Kulaklıklar</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kulak İçi Kulaklık</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kulak Üstü Kulaklık</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Bluetooth Kulaklık</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Telsiz ve Masaüstü Telefonlar</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 50% 50%;">
														<span>
															<a href="#"><img :src="getstr() + 'img/phonepic (1).jpg'"></a>
															<a href="#" class="secondarymidlinks">Samsung<br>Galaxy Note 10</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/phonepic (2).jpg'"></a>
															<a href="#" class="secondarymidlinks">Apple<br>iPhone 11</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/phonepic (3).jpg'"></a>
															<a href="#" class="secondarymidlinks">Huawei<br>Mate 20</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/phonepic (4).jpg'"></a>
															<a href="#" class="secondarymidlinks">Xiaomi<br>Redmi 7</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/phonepic (5).jpg'"></a>
															<a href="#" class="secondarymidlinks">Oppo<br>Reno Z</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/phonepic (6).jpg'"></a>
															<a href="#" class="secondarymidlinks">Vestel<br>Venus Z30</a>
														</span>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">
														<a href="#"><img :src="getstr() + 'img/thirdbarpic (4).jpg'"></a>
													</span>
												</div>


												<!--secondary menu 2-->
												<div v-if="showsecondarymenu == 2" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 90%;">
														<a class="secondarymenulinks" href="#"><b>Notebook / Laptop</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Notebook</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">MacBook</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">2'si 1 Arada Notebook</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Oyun Bilgisayarı / Gaming Notebook</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Masaüstü Bilgisayar</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">iMac</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">All-in-One Bilgisayar</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Tablet</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Ofis ve Sarf Malzemeleri</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Toner ve Kartuş</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kağıt</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Ağ, Modemler</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Modemler</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Menzil Arttırıcı</a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 50%;">
														<a class="secondarymenulinks" href="#"><b>Çevre Birimleri</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Mouse</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Klavye</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kulaküstü Kulaklık</a>
														</span>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Bluetooth Kulaklık</a>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kablo ve Adaptör</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Bilgisayar Hoparlörü</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Oyuncu Aksesuarları</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncu Klavyesi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncu Mouse ve Mousepad</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncu Kulaklıkları</a><br><br>
														<a class="secondarymenulinks" href="#"><b>iMac ve MacBook Aksesuarları</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Notebook Aksesuarları</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Tablet ve iPad Aksesuarları</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Yazılım Ürünleri</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">
														<span style="display: grid;grid-template-columns: 50% 50%;">
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (3).jpg'"></a>
																<a href="#" class="secondarymidlinks">Monitör</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (4).jpg'"></a>
																<a href="#" class="secondarymidlinks">Tablet</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (2).jpg'"></a>
																<a href="#" class="secondarymidlinks">Yazıcılar</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (1).jpg'"></a>
																<a href="#" class="secondarymidlinks">Veri Depolama</a>
															</span>
														</span>
														<a href="#"><img :src="getstr() + 'img/thirdbarpic (1).jpg'"></a>
													</span>
												</div>


												<!--secondary menu 3-->
												<div v-if="showsecondarymenu == 3" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 75%;">
														<a class="secondarymenulinks" href="#"><b>Buzdolabı</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Çift Kapılı</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Gardrop Tipi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Büro Tipi Buzdolabı</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Derin Dondurucu</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Çamaşır ve Kurutma Makinesi</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Çamaşır Makinesi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kurutma Makinesi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kurutmalı Çamaşır Makinesi</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Bulaşık Makinesi</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Fırın ve Ocak</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Midi ve Mini Fırın</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Mikrodalga Fırın</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ocak</a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 60%;">
														<a class="secondarymenulinks" href="#"><b>Ankastre Ürünler</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ankastre Fırın</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ankastre Ocak</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ankastre Davlumbaz</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Isıtma ve Soğutma</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Klima</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Vantilatör</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Soba ve Isıtıcı</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Şofben</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Davlumbaz</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Su Sebili</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">
														<span style="display: grid;grid-template-columns: 50% 50%;">
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (6).jpg'"></a>
																<a href="#" class="secondarymidlinks">Bulaşık Makinesi</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (5).jpg'"></a>
																<a href="#" class="secondarymidlinks">Fırın ve Ocak</a>
															</span>
														</span>
														<a href="#"><img :src="getstr() + 'img/thirdbarpic (2).jpg'"></a>
														<a href="#"><img :src="getstr() + 'img/thirdbarpic (3).jpg'"></a>
													</span>
												</div>


												<!--secondary menu 4-->
												<div v-if="showsecondarymenu == 4" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 80%;">
														<a class="secondarymenulinks" href="#"><b>Süpürgeler</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Toz Torbasız Süpürgeler</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Toz Torbalı Süpürgeler</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Robot Süpürgeler</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Dikey Süpürgeler</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Şarjlı Süpürgeler</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Buharlı Temizleyici</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Halı Yıkama Makineleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Süpürge Aksesuarları</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Basınçlı Yıkama Makineleri</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Blender</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Mikser</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Tost Makineleri</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Fritözler</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Meyve Sıkıcılar</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 85%;">
														<a class="secondarymenulinks" href="#"><b>Ütüler</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Buharlı Ütü</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Buhar Kazanlı Ütü</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ütü Masası</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Çay Makineleri</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Kahve Makineleri ve Aksesuarları</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Türk Kahvesi Makineleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Filtre Kahve Makineleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kapsüllü Kahve Makineleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Espresso & Cappuccino Kahve Makineleri</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Pişirici ve Tencereler</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Pişiriciler</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Barbeküler</a>
														</span>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Elektrikli Izgaralar</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Tencere ve Tavalar</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Su Isıtıcısı ve Kettle</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Hava Nemlendirici ve Temizleyici</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">
														<span style="display: grid;grid-template-columns: 50% 50%;">
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (7).jpg'"></a>
																<a href="#" class="secondarymidlinks">Elektrikli Süpürge</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (11).jpg'"></a>
																<a href="#" class="secondarymidlinks">Ütü</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (8).jpg'"></a>
																<a href="#" class="secondarymidlinks">Filtre Kahve Makinesi</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (12).jpg'"></a>
																<a href="#" class="secondarymidlinks">Blender Set</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (9).jpg'"></a>
																<a href="#" class="secondarymidlinks">Meyve Sıkacağı</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (10).jpg'"></a>
																<a href="#" class="secondarymidlinks">Tost Makinesi</a>
															</span>
														</span>
													</span>
												</div>


												<!--secondary menu 5-->
												<div v-if="showsecondarymenu == 5" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 95%;">
														<a class="secondarymenulinks" href="#"><b>Playstation 4 (PS4)</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Konsol</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyun</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Aksesuar</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Xbox One</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Konsol</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyun</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Aksesuar</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Nintendo</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Konsol</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyun</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Aksesuar</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Oyuncu Aksesuarları</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncu Klavyesi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncu Mouse ve Mousepad</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncu Kulaklıkları</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Hobi ve Eğlence</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Eğitici Oyuncaklar ve Bilim Setleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Akıllı Oyuncaklar</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Uzaktan Kumandalı Oyuncaklar</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Müzik Enstrümanları</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Film ve Müzik</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ödeme Kartları</a>
													</span>

													<span style="display: grid; grid-template-columns: 50% 50%;height: 45%;">
														<span>
															<a href="#"><img :src="getstr() + 'img/consolepic (1).jpg'"></a>
															<a href="#" class="secondarymidlinks">Playstation 4</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/consolepic (2).jpg'"></a>
															<a href="#" class="secondarymidlinks">Xbox</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/consolepic (3).jpg'"></a>
															<a href="#" class="secondarymidlinks">Konsol Oyun</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/consolepic (4).jpg'"></a>
															<a href="#" class="secondarymidlinks">Drone</a>
														</span>
													</span>

													<span>
														<a href="#"><img :src="getstr() + 'img/thirdbarpic (5).jpg'"></a>
														<a href="#"><img :src="getstr() + 'img/thirdbarpic (6).jpg'"></a>
													</span>
												</div>


												<!--secondary menu 6-->
												<div v-if="showsecondarymenu == 6" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 45%;">
														<a class="secondarymenulinks" href="#"><b>Oyuncak</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Peluş Oyuncak</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Çocuk Oyuncakları</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Figür Set</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Bebek</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Oyuncak Araba</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Tsum Tsum</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Tekstil</b></a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Havlu</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Battaniye</a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 50%;">
														<a class="secondarymenulinks" href="#"><b>Okul Ürünleri</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Beslenme Çantası</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Defter Set</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kalem Set</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Matara</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Pipetli Bardak</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Sırt Çantası</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Beslenme Grubu</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Tabak</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kase</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Çatal Kaşık Seti</a>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">
														<span style="display: grid;grid-template-columns: 50% 50%;">
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (14).jpg'"></a>
																<a href="#" class="secondarymidlinks">Okul Ürünleri</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (16).jpg'"></a>
																<a href="#" class="secondarymidlinks">Tekstil</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (13).jpg'"></a>
																<a href="#" class="secondarymidlinks">Beslenme Grubu</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (15).jpg'"></a>
																<a href="#" class="secondarymidlinks">Pelüş Oyncak</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (18).jpg'"></a>
																<a href="#" class="secondarymidlinks">Oyuncak Araba</a>
															</span>
															<span>
																<a href="#"><img :src="getstr() + 'img/mmthirdbar (17).jpg'"></a>
																<a href="#" class="secondarymidlinks">Bebek</a>
															</span>
														</span>
													</span>
												</div>


												<!--secondary menu 7-->
												<div v-if="showsecondarymenu == 7" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 40%;">
														<a class="secondarymenulinks" href="#"><b>Akıllı Ampul</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Akıllı Prizler</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Akıllı Sensörler</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Akıllı Ev Seti</b></a><br><br>
														<a class="secondarymenulinks" href="#"><b>Akıllı Kumanda ve Asistanlar</b></a>
													</span>

													<span style="display: grid; grid-template-columns: 50% 50%;height: 45%;">
														<span>
															<a href="#"><img :src="getstr() + 'img/smarthomepic (1).jpg'"></a>
															<a href="#" class="secondarymidlinks">Akıllı<br>Ampul</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/smarthomepic (2).jpg'"></a>
															<a href="#" class="secondarymidlinks">Akıllı<br>Priz</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/smarthomepic (3).jpg'"></a>
															<a href="#" class="secondarymidlinks">Akıllı<br>Ev Seti</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/smarthomepic (4).jpg'"></a>
															<a href="#" class="secondarymidlinks">Akıllı<br>Sensörler</a>
														</span>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">

													</span>
												</div>


												<!--secondary menu 8-->
												<div v-if="showsecondarymenu == 8" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 70%;">
														<a class="secondarymenulinks" href="#"><b>Erkek Tıraş Ürünleri</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Tıraş Makinesi</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Saç, Sakal ve Vücut Tüyü Kesme Makineleri</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Saç Bakım</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Fön Makineleri</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Saç Kurutma Makineleri</a>
														</span>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Saç Maşaları</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Saç Şekillendiriciler</a>
														</span>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Saç Düzleştiriciler</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Epilasyon Ürünleri</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Epilatörler</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">IPL Cihazları</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Sağlık Ürünleri</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Baskül ve Terazi</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Ağız ve Diş Bakımı</a>
														</span>
													</span>

													<span style="display: grid; grid-template-columns: 50% 50%;height: 45%;">
														<span>
															<a href="#"><img :src="getstr() + 'img/personalcarepic (1).jpg'"></a>
															<a href="#" class="secondarymidlinks">Erkek Tıraş<br>Ürünleri</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/personalcarepic (2).jpg'"></a>
															<a href="#" class="secondarymidlinks">Epilasyon<br>Ürünleri</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/personalcarepic (3).jpg'"></a>
															<a href="#" class="secondarymidlinks">Saç Bakım<br>Ürünleri</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/personalcarepic (4).jpg'"></a>
															<a href="#" class="secondarymidlinks">Sağlık<br>Ürünleri</a>
														</span>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">

													</span>
												</div>


												<!--secondary menu 9-->
												<div v-if="showsecondarymenu == 9" class="secondarymenu">
													<span style="display: grid; grid-template-columns: 100%;height: 60%;">
														<a class="secondarymenulinks" href="#"><b>Fotoğraf Makinesi</b></a><br>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">SLR Fotoğraf Makineleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Dijital Fotoğraf Makineleri</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Kompakt Fotoğraf Makineleri</a><br><br>
														<a class="secondarymenulinks" href="#"><b>Kamera</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Aksiyon Kamera</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Dijital Video Kamera</a>
														</span><br><br>
														<a class="secondarymenulinks" href="#"><b>Fotoğraf Makinesi Aksesuarları</b></a><br>
														<span>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Tripod</a>
															<a class="secondarymenulinks" style="font-size: 13px;" href="#">Çanta</a>
														</span>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Hafıza Kartı ve Kart Okuyucu</a>
														<a class="secondarymenulinks" style="font-size: 13px;" href="#">Aksiyon Kamera Aksesuarları</a>
													</span>

													<span style="display: grid; grid-template-columns: 50% 50%;height: 45%;">
														<span>
															<a href="#"><img :src="getstr() + 'img/camerapic (1).jpg'"></a>
															<a href="#" class="secondarymidlinks">SLR Fotoğref<br>Makinesi</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/camerapic (2).jpg'"></a>
															<a href="#" class="secondarymidlinks">Kompakt Fotoğraf<br>Makinesi</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/camerapic (3).jpg'"></a>
															<a href="#" class="secondarymidlinks">Dijital Video<br>Kamera</a>
														</span>
														<span>
															<a href="#"><img :src="getstr() + 'img/camerapic (4).jpg'"></a>
															<a href="#" class="secondarymidlinks">Aksiyon<br>Kamera</a>
														</span>
													</span>

													<span style="display: grid; grid-template-columns: 100%;height: 100%;">

													</span>
												</div>
												<!--all secondary menus end-->

												<div v-on:mouseover="showsecondarymenu = 0" class="menuitem"><img :src="getstr() + 'img/tvicon.png'" class="menuimgsize"><a href="#">TV, Ses ve Görüntü Sistemleri</a><span v-if="showsecondarymenu == 0" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 1" class="menuitem"><img :src="getstr() + 'img/smartphoneicon.png'" class="menuimgsize"><a :href="getstr() + 'telefon/telefon.html'">Telefon</a><span v-if="showsecondarymenu == 1" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 2" class="menuitem"><img :src="getstr() + 'img/computericon.png'" class="menuimgsize"><a href="#">Bilgisayar</a><span v-if="showsecondarymenu == 2" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 3" class="menuitem"><img :src="getstr() + 'img/fridgeicon.png'" class="menuimgsize"><a href="#">Beyaz Eşya ve Ankastre</a><span v-if="showsecondarymenu == 3" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 4" class="menuitem"><img :src="getstr() + 'img/vacuumicon.png'" class="menuimgsize"><a href="#">Elektrikli Ev Aletleri ve Yaşam</a><span v-if="showsecondarymenu == 4" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 5" class="menuitem"><img :src="getstr() + 'img/gameicon.png'" class="menuimgsize"><a href="#">Oyun Konsolları, Hobi ve Eğlence</a><span v-if="showsecondarymenu == 5" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 6" class="menuitem"><img :src="getstr() + 'img/disneyicon.png'" class="menuimgsize"><a href="#">Disney Collection</a><span v-if="showsecondarymenu == 6" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 7" class="menuitem"><img :src="getstr() + 'img/houseicon.png'" class="menuimgsize"><a href="#">Akıllı Ev ve Güvenlik Sistemleri</a><span v-if="showsecondarymenu == 7" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 8" class="menuitem"><img :src="getstr() + 'img/dryericon.png'" class="menuimgsize"><a href="#">Kişisel Bakım ve Sağlık</a><span v-if="showsecondarymenu == 8" class="triangleleft"></span></div>
												<hr class="menuhr">
												<div v-on:mouseover="showsecondarymenu = 9" class="menuitem" style="margin-bottom: 50px;"><img :src="getstr() + 'img/cameraicon.png'" class="menuimgsize"><a href="#">Fotoğraf Makinesi ve Kamera</a><span v-if="showsecondarymenu == 9" class="triangleleft"></span></div>
											</div>
										</span>

										<span v-on:mouseleave="showmenu2 = false">
											<a v-on:mouseover="showmenu2 = true" class="navlinks" style="z-index: 5;display: block;" href="#">MARKALAR</a>
											<div v-if="showmenu2" class="markalarmenu">
												<div style="font-family: sans-serif; font-size: 15px; font-weight: bold; margin-bottom: 30px;">Öne Çıkan Markalar</div>
												<div style="display: grid;grid-template-columns: 16.8% 16.8% 16.8% 16.8% 16.8% 16.8%;">
													<span>
														<button style="border-style: solid;border-width: 1px;width: 177px;height: 101px;background-color: white;"><img :src="getstr() + 'img/brandlogos (5).png'"></button><br>
														<a href="#" class="sl" style="font-size: 14px;position: relative;left: 35%;">Apple</a>
													</span>
													<span>
														<button style="border-style: solid;border-width: 1px;width: 177px;height: 101px;background-color: white;"><img :src="getstr() + 'img/brandlogos (2).png'"></button><br>
														<a href="#" class="sl" style="font-size: 14px;position: relative;left: 30%;">Samsung</a>
													</span>
													<span>
														<button style="border-style: solid;border-width: 1px;width: 177px;height: 101px;background-color: white;"><img :src="getstr() + 'img/brandlogos (3).png'"></button><br>
														<a href="#" class="sl" style="font-size: 14px;position: relative;left: 35%;">Huawei</a>
													</span>
													<span>
														<button style="border-style: solid;border-width: 1px;width: 177px;height: 101px;background-color: white;"><img :src="getstr() + 'img/brandlogos (6).png'"></button><br>
														<a href="#" class="sl" style="font-size: 14px;position: relative;left: 35%;">Monster</a>
													</span>
													<span>
														<button style="border-style: solid;border-width: 1px;width: 177px;height: 101px;background-color: white;"><img :src="getstr() + 'img/brandlogos (1).png'"></button><br>
														<a href="#" class="sl" style="font-size: 14px;position: relative;left: 35%;">Preo</a>
													</span>
													<span>
														<button style="border-style: solid;border-width: 1px;width: 177px;height: 101px;background-color: white;"><img :src="getstr() + 'img/brandlogos (4).png'"></button><br>
														<a href="#" class="sl" style="font-size: 14px;position: relative;left: 35%;">Philips</a>
													</span>
												</div><br><br>

												<hr class="menuhr"><br><br>
												<a href="#" style="margin-left: 45%;"><img :src="getstr() + 'img/oppo.svg'" style="width: 90px;"></a><br><br><br>
												<hr class="menuhr">

											</div>
										</span>

										<a class="navlinks" href="#">KAMPANYALAR</a>
										<p> </p>
										<a class="navlinks2" :href="getstr() + 'uyegirisi/uyegirisi.html'">Üye Ol</a>

										<a class="loginlink" :href="getstr() + 'uyegirisi/uyegirisi.html'"><img :src="getstr() + 'img/loginicon.png'" style="width: 25px;"><span style="margin-top: 6px;">Üye Girişi</span></a>
									</div>

									<div v-if="showmenu || showmenu2" class="darkoverlay"></div>
								</div>`,
	data: function(){
		return {
			showsecondarymenu: -1,
			showmenu: false,
			showmenu2: false
		};
	},
	methods:{
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

var Footer = {
	props: {
		pref: Boolean
	},
	template:`<div>
							<div style="background-color: rgb(243,243,243)">
								<button v-on:click="toggleFooter" class="smileybutton" style="color: white;font-size: 15px;"><b>{{footerbuttontext}}</b></button>
							</div>

							<div v-if="showfooter">
								<div style="position: relative;">
									<hr style="border-top: 4px solid rgb(34,58,141);width: 100%;position:absolute;">
									<img :src="getstr() + 'img/sabanci-logo.png'" style="width: 39px;height: 20px;position:absolute;margin-left: 48.6%">
								</div>

								<br>

								<div class="tenpercent" style="margin-top: 13px;margin-bottom: 35px;display: grid;grid-template-columns: 77.5% 8.8% 8.8% 8.8%;">
									<p style="font-size: 14px;color: rgb(119,119,119);">Copyright © 2000-2019 <b>Teknosa.com</b>,Her hakkı saklıdır.</p>
									<img :src="getstr() + 'img/verisign-logo.png'">
									<img :src="getstr() + 'img/credit-card-mastercard.png'" style="margin-top: 8px;">
									<img :src="getstr() + 'img/troy-logo.png'" style="margin-top: 8px;">
								</div>
							</div>
						</div>`,
	data: function(){
		return {
			showfooter: true,
			footerbuttontext: "X"
		};
	},
	methods:{
		toggleFooter,
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

var BottomPage = {
	props: {
		pref: Boolean
	},
		template:`<div>
							<div style="margin-top: 30px;" class="tenpercent">
								<div style="font-family: sans-serif; font-size: 15px;font-weight: bold;margin-bottom: 30px;">Ödeme Seçenekleri</div>
								<div class="creditcards">
									<img class="ccsize" :src="getstr() + 'img/credit-card-bonus.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-bankkart.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-world.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-paraf.png'">
									<img style="width: 99px;height: 15px;" :src="getstr() + 'img/credit-card-cardfinans.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-advantage.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-axess.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-maximum.png'">
									<img class="ccsize" :src="getstr() + 'img/credit-card-mastercard.png'">

									<p class="bigtext">12</p>
									<p class="bigtext">7+2</p>
									<p class="bigtext">4+2</p>
									<p class="bigtext">3+3</p>
									<p class="bigtext">3+2</p>
									<p class="bigtext">3+2</p>
									<p class="bigtext">4</p>
									<p class="bigtext">4</p>
									<p class="bigtext"> </p>

									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext">TAKSİT</p>
									<p class="smalltext"> </p>
								</div>
							</div>
							<hr class="menuhr">

							<div class="tenpercent" style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%;margin-top: 35px;margin-bottom: 35px;">
								<span style="display: grid;grid-template-columns: 15% 85%;">
									<span class="largebuttons"><img class="largebuttonsimg" :src="getstr() + 'img/phoneicon.png'"></span>
									<a class="helplinks" href="#">Müşteri Hizmetleri<br>0850 222 55 99</a>
								</span>

								<span style="display: grid;grid-template-columns: 15% 85%;">
									<span class="largebuttons"><img class="largebuttonsimg" :src="getstr() + 'img/magazalaricon.png'"></span>
									<a class="helplinks" href="#">Mağazalarımız</a>
								</span>

								<span style="display: grid;grid-template-columns: 15% 85%;">
									<span class="largebuttons"><img class="largebuttonsimg" :src="getstr() + 'img/helpicon.png'"></span>
									<a class="helplinks" href="#">Yardım Merkezi</a>
								</span>

								<span style="display: grid;grid-template-columns: 15% 85%;">
									<span class="largebuttons"><img class="largebuttonsimg" :src="getstr() + 'img/iadeicon.png'"></span>
									<a class="helplinks" href="#">Garanti & İade</a>
								</span>

								<span style="display: grid;grid-template-columns: 1% 95%;">
									<span class="largebuttons"><img class="largebuttonsimg" :src="getstr() + 'img/iletisimicon.png'"></span>
									<a class="helplinks" href="#">İletişim</a>
								</span>
							</div>
							<hr class="menuhr">

							<div class="tenpercent">
								<p class="bottomtext">Türkiye’de teknoloji denildiğinde akla ilk gelen isim olmayı başaran Teknosa, kurulduğu 25 Temmuz 2000 tarihinden itibaren onlarca kategoride sunduğu yüz binlerce ürün ile üstün hizmet
										anlayışını müşterilerine sağlamaya devam ediyor. <a class="bottomtextlink" href="#">Cep telefonundan</a> <a class="bottomtextlink" href="#">televizyona</a>, fotoğraf makinesinden <a class="bottomtextlink" href="#">kulaklığa</a>, elektronik ev aletlerinden <a class="bottomtextlink" href="#">notebook</a>’a birçok ürünü bünyesinde bulunduran
										Teknosa, üstün hizmet kalitesi ve müşteri memnuniyeti anlayışı ile hareket ederek yıllardır zirvedeki yerini koruyor.</p>

								<p class="bottomtext"><a class="bottomtextlink" href="#">Xiaomi</a>, <a class="bottomtextlink" href="#">Huawei</a>, <a class="bottomtextlink" href="#">Casper</a>, <a class="bottomtextlink" href="#">Samsung</a>, <a class="bottomtextlink" href="#">Apple</a>, <a class="bottomtextlink" href="#">Asus</a>, <a class="bottomtextlink" href="#">Lenovo</a> gibi markaları Türkiye’de en güvenli şekilde
										kullanıcılarına ulaştıran Teknosa, aynı zamanda <a class="bottomtextlink" href="#">PS4</a>, <a class="bottomtextlink" href="#">iPhone</a> gibi ürünleri de en güncel
										modelleriyle bünyesinde bulunduruyor. Yüksek performansı, uygun fiyatlara satın alabilmek isteyen kullanıcıların ilk tercihi olan Teknosa, geniş ürün yelpazesiyle kullanıcı memnuniyetini ön planda
										tutuyor. Paranızın karşılığını fazlasıyla veren fiyat/performans ürünleri arayışında doğru adresiniz Teknosa.</p>

								<p class="bottomtext">En yeni teknolojileri en ulaşılabilir fiyatlarla müşterilerine sunan Teknosa akıllı telefon pazarında kendine sağlam bir yer edinmiş olsa da Teknosa’nın ürün yelpazesi yalnızca bu ürünler ile sınırlı değil.
										Bir ev için gerekli olabilecek her türlü elektronik cihazı üreten <a class="bottomtextlink" href="#">Rowenta</a>, <a class="bottomtextlink" href="#">Philips</a>, <a class="bottomtextlink" href="#">Arzum</a> gibi markaları Teknosa’da bulmak mümkün. Bu markaların tasarladığı klima, tablet, elektrikli ısıtıcı gibi ürünler
										de Teknosa’nın yüz binlerce ürününden yalnızca birkaçı. En güncel Teknosa telefon fiyatlarını, klima fiyatlarını, tablet fiyatlarını ve çok daha fazlasını Teknosa.com üzerinden kolayca takip edebilir,
										ilgilendiğiniz ürünlerin teknik özelliklerini ürün sayfasından inceleyebilir ve ürünleri kolayca birbirleriyle karşılaştırabilirsiniz.</p>

								<p class="bottomtext">Teknoloji severlere keyifli bir alışveriş deneyimi yaşatmak isteyen Teknosa, indirim ve kampanyaları ile kullanıcılarını memnun ediyor. Teknosa, <a class="bottomtextlink" href="#">yılbaşı</a>, <a class="bottomtextlink" href="#">sevgililer günü</a>, <a class="bottomtextlink" href="#">anneler günü</a> ve <a class="bottomtextlink" href="#">babalar
										günü</a> gibi özel gün ve dönemlerde birbirinden avantajlı kampanyalarla kullanıcılarının karşısına çıkıyor. Siz de en iyi fiyatları yakalamak için kampanya dönemlerini ve Teknosa’ya özel Turuncu
										İndirimi takip edebilirsiniz. Küçük ev aletlerinden kişisel bakım ürünlerine, beyaz eşyadan akıllı telefonlara kadar binlerce ürüne avantajlı fiyatlar ve uygun ödeme koşulları ile sahip olabilirsiniz.</p>

								<p class="bottomtext">Dünyaca ünlü markalar ve daha birçoğu Teknosa kalitesi ve güvencesi ile sizlerle buluşuyor. Teknosa.com üzerinden zengin ürün çeşitleri arasında arzu ettiğiniz modellerin teknik özelliklerini ürün
										sayfalarından inceleyebilir, ürünleri daha önce satın almış kişiler tarafından yazılan yorumları okuyabilir ve satın alma işleminizden önce daha geniş bir bakış açısına sahip olabilirsiniz. Siz de
										tüm elektronik ihtiyaçlarınıza yaratıcı çözümler sağlayan Teknosa ile cazip kampanyaları ve taksit fırsatlarını kaçırmayın.</p>
							</div>

							<div style="background-color: rgb(250,250,250);">
								<div class="tenpercent bottomlinks">
									<div class="blmargin">
										<p style="font-size: 14px;"><b>Popüler Ürünler</b></p>
										<a class="bl" href="#">Huawei P Smart 2019</a><br>
										<a class="bl" href="#">Xiaomi Redmi Note 7</a><br>
										<a class="bl" href="#">Samsung A70</a><br>
										<a class="bl" href="#">Huawei Mate 20 Lite</a><br>
										<a class="bl" href="#">Samsung A10</a><br>
										<a class="bl" href="#">Samsung A50</a><br>
										<a class="bl" href="#">Huawei P30 Pro Mavi</a><br>
										<a class="bl" href="#">iPhone 6 Plus</a><br>
										<a class="bl" href="#">iPhone 8 Gümüş</a><br>
										<a class="bl" href="#">Samsung A50 Beyaz</a><br>
										<a class="bl" href="#">Samsung A20</a><br>
										<a class="bl" href="#">Huawei P30 Lite</a><br>
										<a class="bl" href="#">Samsung A30</a><br>
										<a class="bl" href="#">iPhone 6S Silver</a><br>
										<a class="bl" href="#">Huawei P30 Pro</a><br>
										<a class="bl" href="#">iPhone XR</a><br>
										<a class="bl" href="#">Samsung Note 10</a><br>
										<a class="bl" href="#">Huawei P30 Lite</a><br>
										<a class="bl" href="#">Galaxy A10s</a><br>
										<a class="bl" href="#">Huawei Y6</a><br>
									</div>
									<div class="blmargin">
										<p style="font-size: 14px;"><b>Kategoriler</b></p>
										<a class="bl" href="#">Akıllı Telefon</a><br>
										<a class="bl" href="#">LED TV</a><br>
										<a class="bl" href="#">Notebook</a><br>
										<a class="bl" href="#">Oyun Konsolu</a><br>
										<a class="bl" href="#">Gaming Notebook</a><br>
										<a class="bl" href="#">Elektrikli Ev Aletleri</a><br>
										<a class="bl" href="#">Buzdolabı</a><br>
										<a class="bl" href="#">Tablet PC</a><br>
										<a class="bl" href="#">Çamaşır Makinesi</a><br>
										<a class="bl" href="#">Veri Depolama</a><br>
										<a class="bl" href="#">Ev Sinema Sistemi</a><br>
										<a class="bl" href="#">Fotoğraf Makinesi</a><br>
									</div>
									<div class="blmargin">
										<p style="font-size: 14px;"><b>Özel Sayfalar</b></p>
										<a class="bl" href="#">İklimsa</a><br>
										<a class="bl" href="#">Anneler Günü</a><br>
										<a class="bl" href="#">Babalar Günü</a><br>
										<a class="bl" href="#">Monster Notebok</a><br>
										<a class="bl" href="#">Oyun Bilgisayar ve Aksesuarları</a><br>
										<a class="bl" href="#">Teknosacell</a><br>
										<a class="bl" href="#">iPhone</a><br>
										<a class="bl" href="#">Preo</a><br>
										<a class="bl" href="#">Xiaomi Cep Telefonları</a><br>
										<a class="bl" href="#">Samsung Cep Telefonları</a><br>
										<a class="bl" href="#">Huawei Cep Telefonları</a><br>
										<a class="bl" href="#">Akllı Saatler</a><br>
										<a class="bl" href="#">Kulaklık</a><br>
										<a class="bl" href="#">PlayStation 4</a><br>
										<a class="bl" href="#">Dr. Teknolog Teknik Servis Hizmet Paketi</a><br>
									</div>
									<div class="blmargin">
										<p style="font-size: 14px;"><b>Kurumsal</b></p>
										<a class="bl" href="#">Investor Relations</a><br>
										<a class="bl" href="#">İnsan Kaynakları</a><br>
										<a class="bl" href="#">İletişim</a><br>
										<a class="bl" href="#">Gizlilik Sözleşmesi</a><br>
										<a class="bl" href="#">Yatırımcı İlişkileri</a><br>
										<a class="bl" href="#">Kurumsal Satış</a><br>
										<a class="bl" href="#">Mağazalarımız</a><br>
										<a class="bl" href="#">Bilgi Toplumu Hizmetleri</a><br>
										<a class="bl" href="#">Kişisel Verilerin Korunması</a><br>
									</div>
									<div class="blmargin">
										<p style="font-size: 14px;"><b>Mobil Uygulamalar</b></p>
										<a href="#"><img :src="getstr() + 'img/android.svg'" style="width: 150px;height: 39px;"></a>
										<a href="#"><img :src="getstr() + 'img/ios.svg'" style="width: 150px;height: 39px;"></a>
										<p style="font-size: 14px;"><b>Bizi Takip Edin</b></p>

										<span style="display: grid;grid-template-columns: 18% 82%;">
											<a href="#"><img :src="getstr() + 'img/facebook.png'" style="width: 33px;height: 33px;"></a>
											<a href="#" class="socialmedia"> Facebook</a>
										</span>
										<span style="display: grid;grid-template-columns: 18% 82%;">
											<a href="#"><img :src="getstr() + 'img/twitter.png'" style="width: 33px;height: 33px;"></a>
											<a href="#" class="socialmedia"> Twitter</a>
										</span>
										<span style="display: grid;grid-template-columns: 18% 82%;">
											<a href="#"><img :src="getstr() + 'img/linkedin.png'" style="width: 33px;height: 33px;"></a>
											<a href="#" class="socialmedia"> Linkedin</a>
										</span>
										<span style="display: grid;grid-template-columns: 18% 82%;">
											<a href="#"><img :src="getstr() + 'img/youtube.png'" style="width: 33px;height: 33px;"></a>
											<a href="#" class="socialmedia"> Youtube</a>
										</span>
										<span style="display: grid;grid-template-columns: 18% 82%;">
											<a href="#"><img :src="getstr() + 'img/instagram.png'" style="width: 33px;height: 33px;"></a>
											<a href="#" class="socialmedia"> Instagram</a>
										</span>
										<span style="display: grid;grid-template-columns: 18% 82%;">
											<a href="#"><img :src="getstr() + 'img/googleplus.png'" style="width: 33px;height: 33px;"></a>
											<a href="#" class="socialmedia"> Google Plus</a>
										</span>
									</div>
								</div>

							</div>
							</div>`,
	data: function(){
		return {

		};
	},
	methods:{
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

async function enlargeOnHover(){
	while(this.pic_height < this.imgheight + this.imgheight/10){
		if(this.enlargestop){
			return;
		}
		this.pic_height = this.pic_height + 1;
		await sleep(20);
	}

	this.pic_height = this.imgheight + this.imgheight/10;
}

async function shrinkOnHover(){
	while(this.pic_height > this.imgheight){
		if(this.shrinkstop){
			return;
		}
		this.pic_height = this.pic_height - 1;
		await sleep(20);
	}

	this.pic_height = this.imgheight;
}

var PhonesBoxes = {
	props: {
		pref: Boolean,
		img: String,
		type: Number, // types -> 0,1,2,3
		imgheight: Number,
		leftoffset: Number,
		mainlink: String,
		sublink0: String,
		sublink1: String,
		sublink2: String,
		mainlinkaddress: String
	},
	template:`<div style="float: left;">
							<div v-if="type == 0" v-on:mouseover="enlargestop = false;shrinkstop = true;enlargeOnHover()" v-on:mouseleave="shrinkstop = false;enlargestop = true;shrinkOnHover()" class="phonepagediv" style="width: 600px;height: 300px;">
								<div style="width: 330px;height: 300px;">
									<a :href="mainlinkaddress"><img :src="getstr() + img" :style="'height: ' + pic_height + 'px;margin-top: ' + -(pic_height-imgheight)/2 + 'px;margin-left: ' + (-(pic_height-imgheight)/2 + 15) + 'px;'"></a>
								</div>
								<a v-if="mainlink != null" :href="mainlinkaddress" class="ll" style="top: -200px;left: 340px;"><b>{{mainlink}}</b></a><br>
								<a v-if="sublink0 != null" href="#" class="ll2"><b>{{sublink0}}</b></a><br>
								<a v-if="sublink1 != null" href="#" class="ll2"><b>{{sublink1}}</b></a><br>
								<a v-if="sublink2 != null" href="#" class="ll2"><b>{{sublink2}}</b></a><br>
							</div>

							<div v-if="type == 1" v-on:mouseover="enlargestop = false;shrinkstop = true;enlargeOnHover()" v-on:mouseleave="shrinkstop = false;enlargestop = true;shrinkOnHover()" class="phonepagediv" style="width: 399.5px;height: 275px;padding-top: 20px;">
								<div style="width: 220px;height: 200px;margin-left: 90px;">
									<a :href="mainlinkaddress"><img :src="getstr() + img" :style="'height: ' + pic_height + 'px;margin-top: ' + -(pic_height-imgheight)/2 + 'px;margin-left: ' + (-(pic_height-imgheight)/2 + 15) + 'px;'"></a>
								</div>
								<a v-if="mainlink != null" :href="mainlinkaddress" class="ll" style="top: 10px;left: 160px;"><b>{{mainlink}}</b></a><br>
								<a v-if="sublink0 != null" href="#" class="ll2"><b>{{sublink0}}</b></a><br>
								<a v-if="sublink1 != null" href="#" class="ll2"><b>{{sublink1}}</b></a><br>
								<a v-if="sublink2 != null" href="#" class="ll2"><b>{{sublink2}}</b></a><br>
							</div>

							<div v-if="type == 2" v-on:mouseover="enlargestop = false;shrinkstop = true;enlargeOnHover()" v-on:mouseleave="shrinkstop = false;enlargestop = true;shrinkOnHover()" class="phonepagediv" style="width: 399.5px;height: 117px;padding-top: 30px;">
								<div style="width: 110px;height: 100px;">
									<a :href="mainlinkaddress"><img :src="getstr() + img" :style="'height: ' + pic_height + 'px;margin-top: ' + -(pic_height-imgheight)/2 + 'px;margin-left: ' + (-(pic_height-imgheight)/2 + 15) + 'px;'"></a>
								</div>
								<a v-if="mainlink != null" :href="mainlinkaddress" class="ll" style="top: -90px;left: 150px;display: grid;grid-template-columns: 50px;"><b>{{mainlink}}</b></a><br>
								<a v-if="sublink0 != null" href="#" class="ll2"><b>{{sublink0}}</b></a><br>
								<a v-if="sublink1 != null" href="#" class="ll2"><b>{{sublink1}}</b></a><br>
								<a v-if="sublink2 != null" href="#" class="ll2"><b>{{sublink2}}</b></a><br>
							</div>

							<div v-if="type == 3" v-on:mouseover="enlargestop = false;shrinkstop = true;enlargeOnHover()" v-on:mouseleave="shrinkstop = false;enlargestop = true;shrinkOnHover()" class="phonepagediv" style="width: 299.5px;height: 105px;padding-top: 50px;">
								<div :style="'width: 55px;height: 50px;margin-left: ' + leftoffset + 'px;'">
									<a :href="mainlinkaddress"><img :src="getstr() + img" :style="'height: ' + pic_height + 'px;margin-top: ' + -(pic_height-imgheight)/2 + 'px;margin-left: ' + (-(pic_height-imgheight)/2 + 15) + 'px;'"></a>
								</div>
								<a v-if="mainlink != null" :href="mainlinkaddress" class="ll" style="top: -160px;left: 340px;"><b>{{mainlink}}</b></a><br>
								<a v-if="sublink0 != null" href="#" class="ll2"><b>{{sublink0}}</b></a><br>
								<a v-if="sublink1 != null" href="#" class="ll2"><b>{{sublink1}}</b></a><br>
								<a v-if="sublink2 != null" href="#" class="ll2"><b>{{sublink2}}</b></a><br>
							</div>
						</div>`,
	data: function(){
		return {
			pic_height: this.imgheight,
			enlargestop: false,
			shrinkstop: false
		};
	},
	methods:{
		enlargeOnHover,
		shrinkOnHover,
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

var Checkbox = {
	props: {

	},
	template:`<div style="margin-bottom: 10px;">
							<button v-on:click="checkboxchecked = !checkboxchecked" class="agreecheckboxb" v-bind:class="checkboxchecked ? 'checkedcheckboxb' : 'uncheckedcheckboxb'"><b>✓</b></button>
							<span style="font-size: 13px;">&nbsp<slot></slot></span>
						</div>`,
	data: function(){
		return {
			checkboxchecked: false
		};
	},
	methods:{

	}
}

var ClickDropMenu = {
	props: {
		title: String,
		options: Array
	},
	components: {
		'check-box': Checkbox
	},
	template:`<div class="clickdropmenus" :style="togglestyle ? 'height: 230px;' : 'height: 35px;'">
							<div v-on:click="togglestyle = !togglestyle" style="text-align: left;"><b style="font-size: 14px;">{{title}}</b><b style="font-size: 14px;float: right">V</b></div>
							<div v-if="togglestyle" style="margin-top: 30px;overflow-y: scroll;text-align: left;height: 150px;">
								<check-box v-for="option in options">{{option}}</check-box>
							</div>
						</div>`,
	data: function(){
		return {
			togglestyle: false
		};
	},
	methods:{

	}
}

/*var Item = {
	props: {
		sale: Boolean,
		oldprice: Number,
		reducedprice: Number,
		image: String
	},
	template:`<div v-on:mouseover="hover = true" v-on:mouseleave="hover = false" class="itembox">
							<img :src="image">
							<a href="#" class="orangelinks"><slot></slot></a><br>
							<br>
							<button :style="!sale ? 'visibility: hidden;' : 'visibility: visible;'" class="fakebutton" style="margin-right: 10px;"><b>% {{salepercent}}</b></button>
							<div>
								<span v-if="sale" style="font-size: 15px;text-decoration: line-through;">{{oldpricestr}} TL</span><br>
								<span :style="'font-size: 18px;color: rgb(' + (sale ? '255,123,0' : '0,0,0') + ');'"><b>{{reducedstr}} TL</b></span>
							</div>

							<button :style="!hover ? 'visibility: hidden;float: right;' : 'visibility: visible;float: right;'" class="cartbutton"><img src="../img/tinycart.png" style="width:27px;height:24px;"></button>
						</div>`,
	data: function(){
		return {
			salepercent: Math.round(100 - ((this.reducedprice / this.oldprice) * 100)),
			hover: false,
			oldpricestr: this.stringify(this.oldprice),
			reducedstr: this.stringify(this.reducedprice)
		};
	},
	methods:{
		stringify: function(x){
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
	}
}*/

var Item = {
	props: {
		sale: Boolean,
		oldprice: Number,
		reducedprice: Number,
		image: String
	},
	template:`<div v-on:mouseover="hover = true" v-on:mouseleave="hover = false" class="itembox">
							<img :src="image">
							<a href="#" class="orangelinks"><slot></slot></a><br>
							<br>
							<button :style="!sale ? 'visibility: hidden;' : 'visibility: visible;'" class="fakebutton" style="margin-right: 10px;"><b>% {{salepercent}}</b></button>
							<div>
								<span v-if="sale" style="font-size: 15px;text-decoration: line-through;">{{oldpricestr}} TL</span><br>
								<span :style="'font-size: 18px;color: rgb(' + (sale ? '255,123,0' : '0,0,0') + ');'"><b>{{reducedstr}} TL</b></span>
							</div>

							<button :style="!hover ? 'visibility: hidden;float: right;' : 'visibility: visible;float: right;'" class="cartbutton"><img src="../img/tinycart.png" style="width:27px;height:24px;"></button>
						</div>`,
	data: function(){
		return {
			salepercent: Math.round(100 - ((this.reducedprice / this.oldprice) * 100)),
			hover: false,
			oldpricestr: this.stringify(this.oldprice),
			reducedstr: this.stringify(this.reducedprice)
		};
	},
	methods:{
		stringify: function(x){
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
	}
}

var HorizontalItem = {
	props: {
		sale: Boolean,
		oldprice: Number,
		reducedprice: Number,
		image: String
	},
	template:`<div style="display: grid;grid-template-columns: 25% 50% 33%;border-style: solid;border-color: rgb(223,223,223);border-width: 0px 0px 1px 0px;">
							<img :src="image">
							<a href="#" class="orangelinks" style="margin-top:80px;"><slot></slot></a>


							<div style="margin-top: 60px;">
								<button :style="!sale ? 'visibility: hidden;' : 'visibility: visible;'" class="fakebutton" style="margin-right: 10px;"><b>% {{salepercent}}</b></button>
								<div>
									<span v-if="sale" style="font-size: 15px;text-decoration: line-through;">{{oldpricestr}} TL</span><br>
									<span :style="'font-size: 18px;color: rgb(' + (sale ? '255,123,0' : '0,0,0') + ');'"><b>{{reducedstr}} TL</b></span>
								</div>
								<button class="cartbutton" style="width: 190px;height: 35px;"><b>Sepete Ekle</b></button>
							</div>
						</div>`,
	data: function(){
		return {
			salepercent: Math.round(100 - ((this.reducedprice / this.oldprice) * 100)),
			hover: false,
			oldpricestr: this.stringify(this.oldprice),
			reducedstr: this.stringify(this.reducedprice)
		};
	},
	methods:{
		stringify: function(x){
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
	}
}

function devambutton(){
	this.readmore = !this.readmore;

	if(!this.readmore){
		this.devamtext = "Devamını Göster";
	}
	else{
		this.devamtext = "Devamını Gizle";
	}
}

var app = new Vue({
	el: "#indexscript",
	components: {
		'scroll-button': Scrollbutton,
		'smiley-button': Smileybutton,
		'sliding-menu': Slidingmenu,
		'custom-header': Header,
		'navbar': NavBar,
		'custom-footer': Footer,
		'bottompage': BottomPage,
		'phonesbox': PhonesBoxes,
		'clickdrop-menu': ClickDropMenu,
		'check-box': Checkbox,
		'item': Item,
		'hitem': HorizontalItem
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
		pic_height: 300,
		enlargestop: false,
		shrinkstop: false,
		textboxentries:["","","","GÜN","AY","YIL","","","",""],
		textboxempty: [false,false,false,false,false,false,false,false,false,false],
		togglestyle: false,
		mode: false, // false = grid mode, true = list mode
		page: 1,
		readmore: false,
		devamtext: "Devamını Göster"
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
		redirect,
		enlargeOnHover,
		shrinkOnHover,
		devambutton
	},
	beforeMount(){
		this.setCartString(),
		this.populateArrays()
	}
});
