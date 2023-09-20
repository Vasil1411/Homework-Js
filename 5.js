function reverseString (name) {
    let reverseName = '';
   for (let i = name.length -1; i >=0; i--) {
    reverseName+=name[i]
    
   }
   console.log(reverseName);
}
reverseString ('1234')