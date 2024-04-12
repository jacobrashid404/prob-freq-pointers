/** Takes in word and letters as lowercase strings with no spaces or punctuation, 
 * returns true if word can be made from letters, and false if it can't. 
 */
function canConstructWord(word, letters) {
    const wordFreqs = getFreqs(word);
    const letterFreqs = getFreqs(letters);
    
    for(let letter in wordFreqs){ 
        if(!letterFreqs[letter]) return false;
        if(!(letterFreqs[letter] >= wordFreqs[letter])) return false;
    }
    
    return true;
}

/** Takes in a string 'word', returns an object with letter frequencies */
function getFreqs(word){
    const freqs = {};
    for(const letter of word){
        const currCount = freqs[letter] || 0;
        freqs[letter] = currCount + 1;
    }
    
    return freqs;
}

export { canConstructWord };
