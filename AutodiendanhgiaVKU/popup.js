// var button = document.createElement("button");
// button.innerHTML = "Auto đánh giá học phần";

// var body = document.getElementsByClassName("x_title")[0];
// body.appendChild(button);

// button.addEventListener ("click", function() {
//   	var linkdiem = window.location.href;
// 	var diem = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/diem');
// 	var diemchay = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/khao-sat/cau-hoi-khao-sat/');
// 	if (diem == 0){
// 		var inputs = document.getElementsByClassName('btn btn-primary');
// 		for (var i = 0; i < inputs.length; i++) {
// 			inputs[i].click(); 
// 		}
// 	}
// 	if (diemchay == 0) {
// 		var inputs = document.getElementsByClassName('iCheck-helper'); 
// 		for (var i = 0; i < inputs.length; i++) {
// 		 inputs[i].click(); } 
// 		var inputs = document.getElementsByClassName('col-md-12 col-sm-12 col-xs-12'); 
// 		for (var i = 0; i < inputs.length; i++) { 
// 		inputs[i].value = 'Không có ý kiến gì'; } 
// 		var inputs = document.getElementsByClassName('btn btn-success btn-lg'); 
// 		for (var i = 0; i < inputs.length; i++) { inputs[i].click(); 
// 		}
// 	}
// });

  	var linkdiem = window.location.href;
	var diem = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/diem');
	var diemchay = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/khao-sat/cau-hoi-khao-sat/');
	if (diem == 0){
		var inputs = document.getElementsByClassName('btn btn-primary');
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].click(); 
		}
	}
	if (diemchay == 0) {
		var inputs = document.getElementsByClassName('iCheck-helper'); 
		for (var i = 0; i < inputs.length; i++) {
		 inputs[i].click(); } 
		var inputs = document.getElementsByClassName('col-md-12 col-sm-12 col-xs-12'); 
		for (var i = 0; i < inputs.length; i++) { 
		inputs[i].value = 'Không có ý kiến gì'; } 
		var inputs = document.getElementsByClassName('btn btn-success btn-lg'); 
		for (var i = 0; i < inputs.length; i++) { inputs[i].click(); 
		}
	}


// function danhgiatatca()
//             {
// var linkdiem = window.location.href;
// var diem = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/diem');
// var diemchay = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/khao-sat/cau-hoi-khao-sat/');
// if (diem == 0){
// 	var inputs = document.getElementsByClassName('btn btn-primary');
// 	for (var i = 0; i < inputs.length; i++) {
// 		inputs[i].click(); 
// 	}
// }
// if (diemchay == 0) {
// 	var tenmonhoc = 
// 	alert("Code by Phan Tri Dũng 18it3");
// 	var inputs = document.getElementsByClassName('iCheck-helper'); 
// 	for (var i = 0; i < inputs.length; i++) {
// 	 inputs[i].click(); } 
// 	var inputs = document.getElementsByClassName('col-md-12 col-sm-12 col-xs-12'); 
// 	for (var i = 0; i < inputs.length; i++) { 
// 	inputs[i].value = 'Không có ý kiến gì'; } 
	
// 	var inputs = document.getElementsByClassName('btn btn-success btn-lg'); 
// 	for (var i = 0; i < inputs.length; i++) { inputs[i].click(); 
// 	}
// }
// }
document.getElementById('button').addEventListener('click',function(){
   console.log('btnComment worked')
});