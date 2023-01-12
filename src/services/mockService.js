const database = [
  {
    id: 1,
    title: "Mayu sumaj",
    category: "Paz",
    stock: 5,
    imgurl:
      "https://nextmultimedio.com/wp-content/uploads/2021/01/maju-sumaj.jpg",
    detail: "CP",
    price: 2500,
  },
  {
    id: 2,
    title: "el fantasio",
    category: "Paz",
    stock: 6,
    imgurl: "https://villacarlospaz.tur.ar/wp-content/uploads/2020/11/100264.jpg",
    detail: "CP",
    price: 2300,
  },
  {
    id: 3,
    title: "La Cumbrecita",
    category: "Belgrano",
    stock: 3,
    imgurl: "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_903603.jpg",
    detail: "VGB",
    price: 3200,
  },
  {
    id: 4,
    title: "Villa General Belgrano",
    category: "Belgrano",
    stock: 10,
    imgurl:
      "https://www.vivavgb.com.ar/images/inicio3.jpg",
    detail: "VGB",
    price: 3000,
  },
  {
    id: 5,
    title: "La toma",
    category: "Clavero",
    stock: 2,
    imgurl:
      "https://www.traslasierra.com/media/076e23ce-096a-4957-b06c-53da2345c79d/wcz4FQ/SitiosDeInteres/Mina%20Clavero/balneario%20la%20toma/la-toma-pileta.jpg",
    detail: "MC",
    price: 2800,
  },
  {
    id: 6,
    title: "Nido del aguila",
    category: "Clavero",
    stock: 7,
    imgurl:
      "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_141180.jpg",
    detail: "MC",
    price: 2600,
  },
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(database);
    }, 2000);
  });
};

const getCity = (idURL) => {
  return new Promise((resolve, reject) => {
    const reqItem = database.find((item) => {
      return item.id === parseInt(idURL);
    });

    setTimeout(() => {
      if (reqItem) resolve(reqItem);
      else reject("No se encontró el producto");
    }, 2000);
  });
};

const getCityByCategory = (categoryURL) => {
  return new Promise((resolve, reject) => {
    let reqItems = database.filter((item) => item.category === categoryURL);

    setTimeout(() => {
      resolve(reqItems);
    }, 2000);
  });
};

export default obtenerProductos;

export { getCity, getCityByCategory };
