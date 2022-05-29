import Ticket from "./Ticket";
import React from "react";

const TicketList = ({ items }) => {
  return items.map(item => (
    <Ticket
      key={item.id}
      id={item.id}
      user={item.user}
      date={item.date}
      state={item.state}
    ></Ticket>
  ));
};

export default TicketList;
