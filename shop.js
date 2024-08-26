document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total price based on the current quantities
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const price = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
        const quantity = parseInt(card.querySelector('.quantity').textContent, 10);
        total += price * quantity;
      });
      document.querySelector('.total').textContent = `${total} $`;
    };
  
    // Function to handle quantity changes (increment/decrement)
    const handleQuantityChange = (event) => {
      const icon = event.target;
      const quantitySpan = icon.parentElement.querySelector('.quantity');
      let quantity = parseInt(quantitySpan.textContent, 10);
      
      if (icon.classList.contains('fa-plus-circle')) {
        quantity++;
      } else if (icon.classList.contains('fa-minus-circle') && quantity > 0) {
        quantity--;
      }
      
      quantitySpan.textContent = quantity;
      updateTotalPrice();
    };
  
    // Function to handle product removal
    const handleProductRemoval = (event) => {
      const icon = event.target;
      if (icon.classList.contains('fa-trash-alt')) {
        icon.closest('.card').remove();
        updateTotalPrice();
      }
    };
  
    // Add event listeners to increment/decrement buttons
    document.querySelectorAll('.fa-plus-circle').forEach(icon => {
      icon.addEventListener('click', handleQuantityChange);
    });
    
    document.querySelectorAll('.fa-minus-circle').forEach(icon => {
      icon.addEventListener('click', handleQuantityChange);
    });
  
    // Add event listeners to delete buttons
    document.querySelectorAll('.fa-trash-alt').forEach(icon => {
      icon.addEventListener('click', handleProductRemoval);
    });
  
    // Initial call to set total price
    updateTotalPrice();
  });document.getElementById('like1').addEventListener('click',function(){
    this.classList.toggle('liked');
  })
  document.getElementById('like2').addEventListener('click',function(){
    this.classList.toggle('liked');
  })
  document.getElementById('like3').addEventListener('click',function(){
    this.classList.toggle('liked');
  })
