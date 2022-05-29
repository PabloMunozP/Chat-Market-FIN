const arrayOfertas = [
  {
    id: 1,
    user: "iachurra",
    date: "13/05/2022, 14:50"
  },
  {
    id: 2,
    user: "mmunoz",
    date: "08/05/2022, 12:50"
  },
  {
    id: 3,
    user: "mmunoz",
    date: "04/05/2022, 10:50"
  },
  {
    id: 4,
    user: "pmunoz",
    date: "10/05/2022, 16:50"
  },
  {
    id: 5,
    user: "pmunoz",
    date: "15/05/2022, 13:50"
  }
];
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const ofertaServices = async id => {
  await delay(2000);
  if (!!id) {
    return arrayOfertas.find(item => item.id === id) || {};
  }
};

export default ofertaServices;
