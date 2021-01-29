function count_like(){
  var inputs = document.getElementsByClassName('btn btn-primary').length();
  return number_like;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.fblike == "a") {
      var inputs = document.getElementsByClassName('btn btn-primary').length;
      var linkdiem = window.location.href;
      var diem = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/diem');
      var diemchay = linkdiem.indexOf('http://daotao.vku.udn.vn/sv/khao-sat/cau-hoi-khao-sat/');
      if (diem == 0){
        var inputs = document.getElementsByClassName('btn btn-primary');
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].click(); 
        }
        sendResponse({number: "10"});
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
        sendResponse({number: "10"});
      }
      sendResponse({number: "10"});
    }
});