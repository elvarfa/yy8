	function myFunction(){
	var sedill = '';
	var vantar = '';
	var skodari = 0;
	
	if (document.getElementById('Leikur1a').checked){sedill = "<b>Seðillinn minn er: 1,"; skodari = 1;
	}
	if (document.getElementById('Leikur1b').checked){sedill = "<b>Seðillinn minn er: X,"; skodari = 1;
	}
	if (document.getElementById('Leikur1c').checked){sedill = "<b>Seðillinn minn er: 2,"; skodari = 1;
	}
	if (skodari==0){vantar = vantar + " 1 "}

	
	for (i = 2; i < 20; i++)
	{
		skodari = 0;
		if (document.getElementById('Leikur'+i+'a').checked){sedill = sedill + "1,"; skodari=1;
	}
	if (document.getElementById('Leikur'+i+'b').checked){sedill = sedill + "X,"; skodari=1;
	}
	if (document.getElementById('Leikur'+i+'c').checked){sedill = sedill + "2,"; skodari=1;
	}
	if (skodari==0){vantar = vantar + " "+i+" "}
	
	}
	skodari = 0;
	
	if (document.getElementById('Leikur20a').checked){sedill = sedill +  "1.</b>"; skodari=1;
	}
	if (document.getElementById('Leikur20b').checked){sedill = sedill +  "X.</b>"; skodari=1;
	}
	if (document.getElementById('Leikur20c').checked){sedill = sedill +  "2.</b>"; skodari=1;
	}
	if (skodari==0){vantar = vantar + " 20 "}
	
	if (vantar!=''){sedill = 'Vantar leiki NR: ' + vantar }
	
	if (sedill=='') {sedill = 'Gerðu seðil!'}
	
	document.getElementById('demo').innerHTML = sedill;
	}
	
	function random(){
		var rtala = 0;
		for(i= 1; i<21;i++){
			rtala = Math.floor(3*Math.random());
			if(rtala==0){
			document.getElementById('Leikur'+i+'a').checked = 'checked';
			}
			if(rtala==1){
			document.getElementById('Leikur'+i+'b').checked = 'checked';
			}
			if(rtala==2){
			document.getElementById('Leikur'+i+'c').checked = 'checked';
			}
		}
	}