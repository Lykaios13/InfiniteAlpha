function wordCount(){
    var textInput = document.getElementById('innertext').value;
    var spcCount = 0;
    var wrdCount = 0;
    var avgWord = 0;
    var sentenceCount = 0;
    
    for(var i = 0; i <= textInput.length; i++){
        if(textInput[i] === ' ') {spcCount++;
                                 wrdCount++;}
        else if(textInput[i] === '.' || textInput[i] === '?' || textInput[i] === '!') {wrdCount++; 
            sentenceCount++;}
        
    }
    avgWord = wrdCount / sentenceCount;
document.getElementById('display_countw').innerHTML = wrdCount;
document.getElementById('display_counts').innerHTML = spcCount;
document.getElementById('display_countsc').innerHTML = sentenceCount;
document.getElementById('display_countaw').innerHTML = avgWord;}