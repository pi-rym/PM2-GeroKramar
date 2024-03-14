//? consignas:
//Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras.
// La clase debe tener los siguientes métodos:
// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

const CarritoCompra = require('../index');

//comprobar que el carrito inicialice vacio
describe('Clase CarritoCompra', () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });
    describe("constructor de la clase carrito de compra", () => {
        // Esta prueba específica puede ser redundante, ya que estás probando JavaScript en sí, no tu clase.
        // Por lo general, se espera que si puedes instanciarlo, es un 'function' (constructor de clase).
        it('CarritoCompra debería ser un constructor de clase', () => {
            expect(typeof CarritoCompra).toBe('function');
        });

        it('carritoCompra debería ser una instancia de la clase CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });
    });
});