window.onload = function(){
	var
	 ROW = 15,
	 width = Math.floor(600-ROW)/ROW+ 'px',
	 sence = document.getElementById('sence'),
	 child;
	var el,el2;
    for(var i = 0;i<ROW;i++){
    el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top =(600/ROW)/2+(600/ROW)*i +'px';
    el.style.width = '600px';
    el.style.height = '1px';
    el.style.background = '#171414';
    sence.appendChild(el);
     el2 = document.createElement('div');
    el2.style.position = 'absolute';
    el2.style.left =(600/ROW)/2+(600/ROW)*i +'px';
    el2.style.width = '1px';
    el2.style.height = '600px';
    el2.style.background = '#171414';
    sence.appendChild(el2);
    }
	for(var i = 0;i<ROW;i++){
		for(var j = 0;j<ROW;j++){
		child=document.createElement('div');
		child.setAttribute('class','block');
	    child.setAttribute('id',i+'_'+j);
	    child.style.width = width;
	    child.style.height = width;
	    sence.appendChild(child);
	}
	} 
	var blocks = document.getElementsByClassName('block');
	var kaiguan = true;
    var dict1 = {};
    var dict2 = {};
    var panduan = function(id,dic){
    	var x = Number(id.split('_')[0]);
    	var y = Number(id.split('_')[1]);

    	var hang = 1;
    	var tx,ty;
    	tx = x; ty = y;
    	while(dic[tx + '_' + (ty+1)]){hang++;ty++;}
    	tx = x;ty = y;
    	while(dic[tx + '_' + (ty-1)]){hang++;ty--;}
    	if(hang == 5) return true;

        var lie = 1;
        tx = x; ty = y;
    	while(dic[(tx-1) + '_' + ty]){lie++;tx--;}
    	tx = x;ty = y;
    	while(dic[(tx+1) + '_' + ty]){lie++;tx++;}
       if(lie ==5) return true;

        var zx = 1;
        tx = x; ty = y;
    	while(dic[(tx-1) + '_' + (ty+1)]){zx++;tx--;ty++}
    	tx = x;ty = y;
    	while(dic[(tx+1) + '_' + (ty-1)]){zx++;ty--;tx++}
    	if(zx ==5) return true;

    	var yx = 1;
    	tx = x; ty = y;
    	while(dic[(tx-1) + '_' + (ty-1)]){yx++;ty--;tx--}
    	tx = x;ty = y;
    	while(dic[(tx+1) + '_' + (ty+1)]){yx++;ty++;tx++}
    	if(yx ==5) return true;
    	
    };

	for(var i = 0;i<blocks.length;i++){
	    blocks[i].onclick = function(){
          if( this.hasAttribute('hasColor'))return;
            var id = this.getAttribute('id');
	    		if(kaiguan){
	    		this.style.background = 'url(img/b.png)';kaiguan = false;
	    		this.style.boxShadow = '0 3px 13px black';
	    		 dict1[id]=true;
	    		   if(panduan(id,dict1)){
					   //alert('白色赢了');
					   $(".bs").css("display","block");
					   $(".gb").click(function(){
						   $(".bs").css("display","none");
					   })
				   }

	    	}else{
	    		this.style.background = 'url(img/h.png)';kaiguan = true;
	    		this.style.boxShadow = '0 3px 13px black';
                 dict2[id]=true;
                 if(panduan(id,dict2)){
					 //alert('黑色赢了');
					 $(".bs1").css("display","block");
					 $(".gb").click(function(){
						 $(".bs1").css("display","none");
					 })
				 }
	    	}
		    this.setAttribute('hasColor','true');   
	    };
	}

    //------------------------------------------------------
    // var aa = document.getElementsByClassName('aa');
    // var cc = document.getElementsByClassName('cc');

    // //放上就出现 不放就消失
    // for(var i = 0;i<aa.length;i++){
    //     aa[i].index=i;
    //     aa[i].onmouseover=function(){
    //     cc[this.index].style.opacity='1';
    // };
    //     aa[i].onmouseout=function(){
    //     cc[this.index].style.opacity='0';
    // };
    // }
    


//-------------   
  //1.
    // for(var i = 0;i<aa.length;i++){
    //     aa[i].index =i;
    //     aa[i].kaiguan = true;
    //     aa[i].onclick=function(){
    //         if(this.kaiguan){
    //         this.style.background='yellow';
    //         cc[this.index].style.background='red'; 
    //         this.kaiguan = false;
    //         }else{
    //         this.style.background='red';
    //         cc[this.index].style.background='yellow'; 
    //         this.kaiguan = true;
    //         }
                
    //         };
    // }
//2.
    // for(var i = 0;i<aa.length;i++){
    //     aa[i].onclick=(function(x){
    //        return function(){
    //          this.style.background='yellow';
    //         cc[x].style.background='red';   
    //         };
    //     })(i);
    // }
//3.
    // for(var i = 0;i<aa.length;i++){
    //     aa[i].index =i;
    //     aa[i].kaiguan = true;
    //     aa[i].onclick=function(){
    //         if(this.kaiguan){
    //         this.style.background='yellow';
    //         cc[this.index].style.opacity='0'; 
    //         this.kaiguan = false;
    //         }else{
    //         this.style.background='red';
    //         cc[this.index].style.opacity='1'; 
    //         this.kaiguan = true;
    //         }
                
    //         };
    // }


       

    













   












};