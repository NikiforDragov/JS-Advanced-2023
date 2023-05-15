function solve() {
   const textArea = document.querySelector('textarea')

   const buttons = Array.from(document.querySelectorAll('.add-product')).forEach((button) => {
      button.addEventListener('click', add);
   })

   let productsList = [];
   let totalPrice = 0;

   function add(event) {
      const productName = event.target.parentElement.parentElement.querySelector('.product-title').textContent
      const productPrice = Number(event.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

      if (!productsList.includes(productName)) {
         productsList.push(productName);
      }
      totalPrice += productPrice;

      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   document.querySelector('.checkout').addEventListener('click', disable)

   function disable(event) {
      textArea.textContent += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`
      
      Array.from(document.querySelectorAll('button')).forEach(button => button.disabled = true)
   }

   
}