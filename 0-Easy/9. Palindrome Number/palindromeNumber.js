/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x >= 0 && x < 10) { return true; } // Todos os números de zero (inclusive) a 9 são palíndromo

    if(x < 0) { return false; } /*
     Qualquer número negativo não será um palíndromo. 

     Exemplo: 

     x = -121  
     reverso = 121- 
    */

    let original = x; 
    let reverso = 0;
    let d; 

    while(x > 0) {
        d = x % 10; // Isola o último dígito
        reverso = (reverso * 10) + d;
        x = Math.floor(x / 10);
    }

    if(original == reverso) { return true; }
    
    return false;
};