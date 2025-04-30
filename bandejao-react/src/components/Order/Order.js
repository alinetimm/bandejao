import React from 'react';

const Order = () => {
  return (
    <section id="order">
      <h2>Faça seu pedido aqui mesmo</h2>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="tel" placeholder="Telefone para contato" required />
        <textarea placeholder="Seu pedido" required></textarea>
        <button type="submit">Enviar Pedido</button>
      </form>
    </section>
  );
};

export default Order;