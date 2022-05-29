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