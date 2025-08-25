import TicketPriceEdit from "../ticketEdit/TicketPriceEdit";

const Price = ({
  perSeatOriginalPrice = 0,
  seatCount = 0,
  salePricePerSeat = "",
  onChange,
  enabled = true,
}) => {
  const handleSale = (v) => onChange?.(v);
  const perSeat = Number(perSeatOriginalPrice || 0);
  const salePer = Number(salePricePerSeat || 0);
  const saleTotal = salePer > 0 ? salePer * seatCount : 0;
  const isSeatValid = seatCount > 0;

  return (
    <TicketPriceEdit
      perSeatOriginalPrice={perSeat}
      salePricePerSeat={String(salePer || "")}
      onSalePriceChange={handleSale}
      saleTotal={saleTotal}
      isSeatValid={isSeatValid && enabled}
    />
  );
};

export default Price;
