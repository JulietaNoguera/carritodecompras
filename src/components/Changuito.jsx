import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Changuito = ({ changuito, eliminarProductoDelChanguito }) => {
    return (  
        <>
            <div >
                {changuito.map((producto) => (
                    <Card key={producto.id}>
                        <Card.Body>
                            <Card.Title>{producto.articulo}</Card.Title>
                            <Card.Text>${producto.precio}</Card.Text>
                            <Button variant="danger" onClick={() => eliminarProductoDelChanguito(producto.id)}>
                            Eliminar del carrito
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>

    );
}
 
export default Changuito;