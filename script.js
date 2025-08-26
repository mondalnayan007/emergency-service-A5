
const hearts = document.getElementsByClassName('fa-heart');

for(const heart of hearts){
      
      
    heart.addEventListener('click',function(){
       
        let redHeart = Number(document.getElementById('red-heart').innerText)
        

        document.getElementById('red-heart').innerText = redHeart + 1;
        
    })
    
}

                  // Copy number


    const copyBtn = document.getElementById("copyBtn");
    const textToCopy = document.getElementById("textToCopy").innerText;

    // On button click
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(textToCopy); // copy text
      alert("Text copied: " + textToCopy);       // show alert
    });