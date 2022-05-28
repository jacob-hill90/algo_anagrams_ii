anagram = function(string1, string2) {
    
    let arr1 = [], arr2 = []

    for(let i of string1.toLowerCase()){
        if( i !== ' '){
            arr1.push(i)
        }
    }

    for(let j of string2.toLowerCase()){
        if( j !== ' '){
            arr2.push(j)
        }
    }
    
    str1 = arr1.sort().join('')
    str2 = arr2.sort().join('')
    
    return str1 === str2
}

exports.anagramsFor = function(word, listOfWords) {
    
    let answer = []
 
    for(let i of listOfWords){
        if(anagram(word, i)){
            answer.push(i)
        }
    }

    return answer

}
