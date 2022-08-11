let showPercentage;
        let i=0;
        let fillDiv=document.getElementById('pgbar');
        function show(){
            showPercentage=document.getElementById('percentage').value;
            showper(showPercentage,i);
        }
        function showper(showPercentage,i){
            setTimeout(()=>{
                if(i<showPercentage){
                    i++;
                    pgbar.style.width=i+"%";

                    if(i<20){
                        pgbar.style.backgroundColor='#EB4747';
                    }
                    else if(i>=20 && i<75){
                        pgbar.style.backgroundColor='#F7D716';
                    }
                    else{
                        pgbar.style.backgroundColor='#5BB318';
                    }
                    showper(showPercentage,i);
                }
            },10);
        }