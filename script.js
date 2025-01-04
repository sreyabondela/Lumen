// Sample product data
const products = [
    { id: 1, name: 'Smartphone', stockLevel: 50 },
    { id: 2, name: 'Router', stockLevel: 20 },
    { id: 3, name: 'Telecom Cable', stockLevel: 5 },
    { id: 4, name: 'Headset', stockLevel: 30 }
  ];
  
  // Function to load products dynamically
  function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the current list
  
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `<strong>${product.name}</strong> - Stock Level: ${product.stockLevel}`;
      productList.appendChild(productItem);
    });
  
    // Show alert for low stock levels
    showStockAlerts();
  }
  
  // Function to show stock level alerts
  function showStockAlerts() {
    const stockAlerts = document.getElementById('stock-alerts');
    stockAlerts.innerHTML = ''; // Clear existing alerts
  
    const lowStockProducts = products.filter(product => product.stockLevel <= 10);
    
    if (lowStockProducts.length > 0) {
      lowStockProducts.forEach(product => {
        const alertMessage = document.createElement('p');
        alertMessage.innerText = `${product.name} has low stock (${product.stockLevel} remaining).`;
        stockAlerts.appendChild(alertMessage);
      });
    } else {
      stockAlerts.innerHTML = 'All products have sufficient stock.';
    }
  }
  