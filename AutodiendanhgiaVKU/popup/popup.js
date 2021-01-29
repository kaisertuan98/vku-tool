count_like();
function count_like(){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{fblike: "a"},function(response){
            	var a = response.number;
            		if(a == "10"){
            			function sleep (time) {
						  return new Promise((resolve) => setTimeout(resolve, time));
						} sleep(2000).then(() => {
						    count_like();
						});
						
            			
            	}
            });
        });
}          