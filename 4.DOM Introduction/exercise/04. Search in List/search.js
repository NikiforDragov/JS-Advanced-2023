function search() {
   const itemList = Array.from(document.querySelectorAll('#towns li'))
   const resultField = document.querySelector('#result');
   const searchInput = document.querySelector('#searchText').value;

   let counter = 0;

   itemList.forEach(element => {
      if (element.innerHTML.includes(searchInput)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style = 'none'
      }
   })

   resultField.textContent = `${counter} matches found`
}
