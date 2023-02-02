function loadDropMenu(){
//On load, reads API and loads drop down menus
	var formid=["C1","C2","C3","C4"];
 	//$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent("https://api.livecoin.net/info/coinInfo") + '&callback=?', function(data,status){

		provlist=['Ontario','Quebec'];
		datalist=['CHBDC 2002','WIM'];
		ftypelist=['M','V'];
		lldist=['normal','lognormal','Gumbel'];
		
		fillmenu('C1',provlist);
		fillmenu('C2',datalist);
		fillmenu('C3',ftypelist);
		fillmenu('C4',lldist);
		
		testpy()

	//});
}
//
//
function testpy(){
$.ajax({
        type: 'POST',
        url: "/python/test.py",
        //data: {param: 'holabola'}, //passing some input here
        //dataType: "text",
        success: function(response){
           console.log(response);
        }
});
}


function fillmenu(id,list){
	var select = document.getElementById(id);
	
	for (var i=0; i < list.length; i++) {
		var opt = document.createElement('option');
		opt.value = list[i];
		opt.innerHTML = list[i];
		select.appendChild(opt);
	};
}
	
function loadPairRates(){
// On load, reads API for trade pair rates
/*
 	$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent("https://api.livecoin.net/exchange/maxbid_minask") + '&callback=?', function(data){
	pairNo=data.contents.currencyPairs.length;
		for (var i=0; i < pairNo; i++) {
			pairrates[i]=data.contents.currencyPairs[i];
		}
	});*/
}
//

function factorial(n){
//
//FUNCTION: Calculate N!
//RE 2017-11-11
	var f=1;
	if (n==0){n=1;}
	for (i=n; i>0; i--){f=f*i;}
	return f;
}
//


function echoSE(startEndIndex){
//FUNCTION: Echo Start-End Pairs SIMPLE
//RE 2017-11-11
	var count=0
	for (i=0; i<startEndIndex.length; i++) {		
		textOut ="startEndIndex " + startEndIndex[count].seindex + " : " + coins[startEndIndex[count].start] + " -> " + coins[SEIndex[count].end]; 
		//alert(bob);
		var para = document.createElement("p");
		var node = document.createTextNode(textOut);
		para.appendChild(node);
		var element = document.getElementById("div1");
		element.appendChild(para);		
		count++;
	}
}
//
function echoSETable(startEndIndex,coins) {
//FUNCTION: Echo Start-End Pairs Table
//RE 2017-11-11
//Based on code by Craig Taub, https://stackoverflow.com/questions/14643617/create-table-using-javascript
	// write out header
	var element = document.getElementById("div1");
	document.getElementById("p1").innerHTML="Generate startEndIndex"
	var tbl = document.createElement('table');
    tbl.style.width = '30%';
    //tbl.setAttribute('border', '0');
    var tbdy = document.createElement('tbody');
	//Header
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	var U = document.createElement('U');
	U.appendChild(document.createTextNode('index'));
	td.appendChild(U);
	tr.appendChild(td);
	var td = document.createElement('td');
	var U = document.createElement('U');
	U.appendChild(document.createTextNode('start'));
	td.appendChild(U);
	tr.appendChild(td);
	var td = document.createElement('td');
	var U = document.createElement('U');
	U.appendChild(document.createTextNode('end'));
	td.appendChild(U);
	tr.appendChild(td);
	tbdy.appendChild(tr);
	//Table body
	var count=0;
	var text;
	// loop over Start End Pairs
    for (var i = 0; i < startEndIndex.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 3; j++) {
				if (j==0) {text = startEndIndex[count].index}
				if (j==1) {text = coins[startEndIndex[count].start]}
				if (j==2) {text = coins[startEndIndex[count].end]}
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(text));
                tr.appendChild(td);
            }
		count++;
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    element.appendChild(tbl);
}
//
//
////Debugging function to echo factorial
function operate(){
	var n = document.getElementById('b1').value;
	var bob = factorial(n);
//document.getElementById('a3').innerHTML = bob;
}

function getRandomInt(max) {
// random integer generator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * Math.floor(max));
}
// Getter and Setter
function getMaxconvert(){
	return maxconvert;
	}
//
function setMaxconvert(value){
	maxconvert=value;
	console.log("set max value = ",value)
	}
//
