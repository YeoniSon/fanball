import TicketDescriptionEdit from "../ticketEdit/TicketDescriptionEdit";

const Detail = ({ description = "", onChange }) => {
  return (
    <TicketDescriptionEdit
      ticketDescription={description}
      onChange={onChange}
    />
  );
};

export default Detail;
