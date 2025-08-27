
const hearts = document.getElementsByClassName('fa-heart');

for(const heart of hearts){
      
      
    heart.addEventListener('click',function(){
       
        let redHeart = Number(document.getElementById('red-heart').innerText)
        

        document.getElementById('red-heart').innerText = redHeart + 1;
        
    })
    
}


let coinValue = Number(document.getElementById('coin').innerText);
    

const buttons = document.getElementsByClassName('call');

for (const btn of buttons) {
  btn.addEventListener('click', function() {
    
    const parent = btn.parentElement.parentElement;
    
 
    const titles = parent.getElementsByClassName('title');
    let titleValue ;
    for(const title of titles){
      
       titleValue = title.innerText;
      
    }
    const numbers = parent.getElementsByClassName('number');
     let numberValue;
    for(number of numbers){
        
        numberValue = number.innerText
      
    }
    
    

    if(coinValue < 20 ){
            
            alert("❌ আপনার পর্যাপ্ত Coin নেই । কল করতে কমপক্ষে ২০টি Coin লাগবে");
            
   
            
    }
    else{
      coinValue -= 20;
      
      alert("📞 Calling " + titleValue +" "+ numberValue +"...");
    
    }

    document.getElementById('coin').innerText = coinValue ;


    
  });
}

                  // Copy number


    // const copyBtn = document.getElementById("copyBtn");
    // const textToCopy = document.getElementById("textToCopy").innerText;

    // // On button click
    // copyBtn.addEventListener("click", () => {
    //   navigator.clipboard.writeText(textToCopy); // copy text
    //   alert("Text copied: " + textToCopy);       // show alert
    // });


