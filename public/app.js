$(function() {
  function productToHtml(product) {
    return `<li><span>${product.id}</span> - <span>${product.name}</span> - <span>${product.price}</span></li>`;
  }

  function loadAndRenderProduct() {
    $.ajax('/products').then(function(products) {
      // 1. Iterate through the products
      for (productId in products) {
        let product = products[productId];

        // 2. We going to construct the template
        let html = productToHtml(product);

        // 3. Append to the product list
        $('ul#product-list').append(html)
      }
    });
  }

  loadAndRenderProduct();

  $('form').on('submit', (e) => {
    e.preventDefault();

    // 1. Capture data the user enetered
    let data = $(e.target).serialize();

    // 2. Submit using ajax
    $.ajax('/products', {method: 'POST', data: data}).then(() => {
      $('ul#product-list').empty();
      loadAndRenderProduct();
    });
  });
})

