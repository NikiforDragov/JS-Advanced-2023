function create(words) {
   const parent = document.querySelector('#content');

   for (const word of words) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none'

      div.appendChild(paragraph);

      div.addEventListener('click', (event) => {
         event.target.querySelector('p').style.display = 'block'
      })
      parent.appendChild(div);
   }
}