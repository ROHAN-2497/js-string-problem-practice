function reverseString(text){
 /*    for(let i = 0; i < text.length; i++){} */
 reversed = '';
 for ( let i = text.length -1; i >= 0; i--){
        const index = i;
        const element = text[index]
       reversed = reserved + element ;
        console.log(element, reversed);
                     
    }
return reversed

}
const string = "i am a good boy";
const reversed = reverseString(string)


