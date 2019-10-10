function setCartString(){
	this.writetext = this.items_in_cart.toString() + this.text;
}

function setVisible0(){this.visnum = 0;}
function setVisible1(){this.visnum = 1;}
function setVisible2(){this.visnum = 2;}
function setVisible3(){this.visnum = 3;}
function setVisible4(){this.visnum = 4;}
function setVisible5(){this.visnum = 5;}
function setVisible6(){this.visnum = 6;}
function setVisible7(){this.visnum = 7;}
function setVisible8(){this.visnum = 8;}
function setVisible9(){this.visnum = 9;}
function setVisible10(){this.visnum = 10;}
function setVisible11(){this.visnum = 11;}
function setVisible12(){this.visnum = 12;}

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

var app = new Vue({
	el: "#indexscript",
	data:{
		items_in_cart: 0,
		text: " Sepetim",
		writetext: "",
		visnum: 0,
		firsatvisnum: 0,
		popularvisnum: 0
	},
	methods:{
		setCartString,
		setVisible0,
		setVisible1,
		setVisible2,
		setVisible3,
		setVisible4,
		setVisible5,
		setVisible6,
		setVisible7,
		setVisible8,
		setVisible9,
		setVisible10,
		setVisible11,
		setVisible12,
		setFirsatVisNext,
		setFirsatVisPrev,
		setPopularVisNext,
		setPopularVisPrev
	},
	beforeMount(){
		this.setCartString()
	}
});
