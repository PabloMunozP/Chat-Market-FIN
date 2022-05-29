// const arrayTickets = [
//   {
//     id: 1,
//     user_resp:"isa"
//     date_cambio: "03/05/2022, 10:50",
//     user_ask: "pablo"
//   }
// ];
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const ofertaServices = async id => {
  const arrayOfertas = await fetch(
    "http://127.0.0.1:8000/chat/getOfertas/"
  ).then(response => response.json());
  await delay(2000);
  if (!!id) {
    return arrayOfertas.find(item => item.id === id) || {};
  }
  return arrayOfertas;
};

export default ofertaServices;
