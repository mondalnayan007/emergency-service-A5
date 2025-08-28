
const titles = document.getElementsByClassName('title');
const numbers = document.getElementsByClassName('number');

const hearts = document.getElementsByClassName('fa-heart');

for(const heart of hearts){
      
      
    heart.addEventListener('click',function(){
       
        let redHeart = Number(document.getElementById('red-heart').innerText)
        

        document.getElementById('red-heart').innerText = redHeart + 1;
        
    })
    
}


let coinValue = Number(document.getElementById('coin').innerText);
    

const btn = document.getElementsByClassName('call');

for (let i=0; i<btn.length ; i++) {
  
  btn[i].addEventListener('click', function() {

    
    
    
 
    
    const title = titles[i].innerText;
    
    const number = numbers[i].innerText;
    
    

    if(coinValue < 20 ){
            
            alert("❌ আপনার পর্যাপ্ত Coin নেই । কল করতে কমপক্ষে ২০টি Coin লাগবে !!!!");
            return;
            
    
    }
    else{
      coinValue -= 20;
      
      alert("📞 Calling " + title +" "+ number +"...");
    
    }


    const time = new Date().toLocaleTimeString()

     
   
    const history = document.getElementById('history')
    

      
      const div = document.createElement("div")
     
      div.innerHTML = `

                <div class="history flex items-center justify-between bg-[#fafafa] p-4 mt-4">
                    <div class="left ">
                         <h1 id="d-title"  class="text-lg ">${title}</h1>
                         <p id="d-number" class="text-lg text-[#5c5c5c]">${number}</p>
                    </div>
                  
                         <h1 id="time">${time}</h1>
                    
                 </div>
      `;
      history.appendChild(div);

    document.getElementById('coin').innerText = coinValue ;

    
  });
}

     document.getElementById('clear').addEventListener('click',function(){
      document.getElementById('history').innerText = "";
      
     })

    //               // Copy number



    const copyBtns = document.getElementsByClassName('copyBtn');

for(let i=0; i<=copyBtns.length; i++){
      
      
    copyBtns[i].addEventListener('click',function(){
       
        let copyNumbers = Number(document.getElementById('copy-numbers').innerText)
        

        document.getElementById('copy-numbers').innerText = copyNumbers + 1;


            
           const textToCopy = numbers[i].innerText;
           console.log(textToCopy)

   
          navigator.clipboard.writeText(textToCopy); 
            alert("Text copied: " + textToCopy);       
    
        
    })
    
}






