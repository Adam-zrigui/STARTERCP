const  Fuc = str => {
    let count = 0;
    let vol = 0;
    for (let i = 0; i <= str.length; i++) {
       if (str.charAt(i) == " ") {
            count++;
        } else if (str[i] == 'i'|| str[i] == 'a'|| str[i] == 'o'|| str[i] == 'u'|| str[i] == 'e') {
vol = vol + 1
 
        }
    
    }
    return count +  1;
}
    console.log(Fuc("dies from cringe"));