import React from 'react';
import { Button, Card} from 'react-bootstrap';

const Producto = ({producto, productos, changuito, agregarProducto}) => {
    //extraigo los valores 

    const{id, articulo, precio}= producto;

    //funcion para seleccionar para comprar un producto
    const seleccionarProducto=(id)=> {
        const producto= productos.filter(
            producto=> producto.id=== id
        )[0];
        agregarProducto([...changuito, producto]);
        //console.log(changuito);

    };
    
    return (  

        <>
                        
                    <Card className="mr-3" style={{ width: '18rem',  margin: '1em'  }} >
                        
                            <Card.Body>
                                <Card.Title>{articulo}</Card.Title>
                                <Card.Text>
                                    $ {precio}
                                </Card.Text>
                                                              
                                <Button variant="primary" onClick={() => seleccionarProducto(id)}>
                                    {changuito.some((item) => item.id === id) ? "Eliminar del carrito" : "Agregar a carrito"}
                                </Button>
                                
                        </Card.Body>
                    </Card>
               

            
            <br/>
        </>
    );
}
 
export default Producto;
