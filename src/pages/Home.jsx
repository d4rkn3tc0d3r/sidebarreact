import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [olts, setOlts] = useState([]); // Sin declaración de tipo
  const [loading, setLoading] = useState(true); // Sin declaración de tipo

  useEffect(() => {
    const fetchOLTs = async () => {
      try {
        const response = await axios.get('http://localhost:5032/api/system/get_olts');

        if (response.data.status) {
          setOlts(response.data.response); // Configura `olts` con los datos de la respuesta
        } else {
          console.error('Error in response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching OLTs:', error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchOLTs();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <h1>Lista de OLTs</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Versión de Hardware</th>
            <th>IP</th>
            <th>Puerto Telnet</th>
            <th>Puerto SNMP</th>
          </tr>
        </thead>
        <tbody>
          {olts.map((olt) => (
            <tr key={olt.id}>
              <td>{olt.id}</td>
              <td>{olt.name}</td>
              <td>{olt.olt_hardware_version}</td>
              <td>{olt.ip}</td>
              <td>{olt.telnet_port}</td>
              <td>{olt.snmp_port}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};



const Container =styled.div`
  height:100vh;
`