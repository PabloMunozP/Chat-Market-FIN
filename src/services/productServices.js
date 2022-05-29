// const arrayTickets = [
//   {
//     id: 1,
//     user: "iachurra",
//     date: "03/05/2022, 10:50",
//     state: "En espera"
//   },
//   {
//     id: 2,
//     user: "mmunoz",
//     date: "04/05/2022, 11:50",
//     state: "En espera"
//   },
//   {
//     id: 3,
//     user: "mmunoz",
//     date: "04/05/2022, 12:50",
//     state: "En espera"
//   },
//   {
//     id: 4,
//     user: "pmunoz",
//     date: "10/05/2022, 12:50",
//     state: "En espera"
//   },
//   {
//     id: 5,
//     user: "iachurra",
//     date: "05/05/2022, 13:50",
//     state: "En espera"
//   }
// ];
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const productServices = async id => {
  const arrayTickets = await fetch(
    "http://127.0.0.1:8000/chat/getTickets/"
  ).then(response => response.json());

  await delay(2000);
  if (!!id) {
    return arrayTickets.find(item => item.id === id) || {};
  }
  return arrayTickets;
};

export default productServices;
