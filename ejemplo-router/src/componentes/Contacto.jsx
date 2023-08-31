import { React, useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

export const Contacto = () => {

  //getData();
  const [formData, setFormData] = useState({
    nombre: ''
  });

  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  async function getDatos(event) {

    try {

      const response = await fetch('http://localhost:3000/api/especialidades', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const responseBody = await response.json();
      console.log(responseBody);
      setData(responseBody);

    } catch {


      console.log("Error en cargar datos");

    }


  };


  useEffect(() => {
    // Realizar una petición GET al servicio web y obtener los datos


    fetch('http://localhost:3000/api/especialidades', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {

        return response.json();
        

      })
      .then (data =>{

        setData(data);

      })
      .catch((error) => {

        console.log("Error");
        console.log(error);
      });




  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await fetch('http://localhost:3000/api/especialidades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseBody = await response.json();
        console.log('Datos enviados exitosamente');
        console.log(responseBody);
        

      } else {
        const responseBody = await response.json();
        console.log('Datos enviados con error');
        console.error(responseBody);
      }

    } catch (error) {
      console.error('Error al enviar los datos', error);
    }
  };


  //getDatos();

  return (
    <>
      <h1>Especialidades</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Enviar Datos
        </Button>
      </Form>

      <h1>Datos</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <td>Nombre</td>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </>
  )
}
