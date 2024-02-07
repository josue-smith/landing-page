function mostrarPrecio(periodo) {
    if (periodo === 'anual') {
      document.getElementById('precioEmprendedor').textContent = 'S/ 550.00';
      document.getElementById('precioBusines').textContent = 'S/ 990.00';
      document.getElementById('precioProfesional').textContent = 'S/ 1320.00';
  
    } else if (periodo === 'mensual') {
      document.getElementById('precioEmprendedor').textContent = 'S/ 49.90';
      document.getElementById('precioBusines').textContent = 'S/ 89.90';
      document.getElementById('precioProfesional').textContent = 'S/ 119.90';
    }
  }