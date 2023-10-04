import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Producto from './components/Producto';
import Changuito from './components/Changuito';
import { Container,Row,Col } from 'react-bootstrap';

function App() {
  //creamos nuestra lista de productos
  const[productos]= useState([
    {id:0, articulo:"Jean de dama", precio:4600},
    {id:1, articulo:"Wide negro estampado", precio:7000},
    {id:2, articulo:"Jean elastizado chupín", precio:6500},
    {id:3, articulo:"Pantalon oxford azul", precio:6800},
    {id:4, articulo:"Azul indigo", precio:5200},
    {id:5, articulo:"Jean con roturas", precio:6800},

  ])

  //creamos nuestro changuito
  const [changuito,agregarProducto] =useState([]);

  const eliminarProductoDelChanguito = (productoId) => {
    // Copiar el carrito actual
    const carritoActualizado = [...changuito];
    // Filtrar y eliminar el producto con el productoId
    const nuevoCarrito = carritoActualizado.filter((producto) => producto.id !== productoId);
    // Actualizar el estado del carrito con el nuevo arreglo
    agregarProducto(nuevoCarrito);
  };

  return (
    <>
      <Header titulo="Tienda de musica CIU - Carrito de compras"></Header>
      <Container>
      <h1>Listado de productos </h1>
      {
          <Row>
          {productos.map((producto) => (
            <Col key={producto.id} md={4}>
              <Producto
                producto={producto}
                key={producto.id}
                productos={productos}
                changuito={changuito}
                agregarProducto={agregarProducto}

              />
            </Col>
          ))}
        </Row>
      }</Container>
      <Container>
        <h1>Changuito de compras</h1>
        <Changuito changuito={changuito} eliminarProductoDelChanguito={eliminarProductoDelChanguito} />
        </Container><br/>
        <br/>
        <br/>
      <Footer/>
    </>
  );
}

export default App;
