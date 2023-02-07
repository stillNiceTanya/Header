const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
const prepareData = (data) => {
  return data.reduce((all, el) => {
    all.push({ value: el.id, label: el.name });
    if (el.cities) {
      all.push(
        ...el.cities.map((item) => ({ value: item.id, label: item.name }))
      );
    }
    return all;
  }, []);
};

const fetchAreas = async () => {
  const data = await fetch("https://studika.ru/api/areas", requestOptions);
  const jsonData = await data.json();

  return prepareData(jsonData);
};

export default fetchAreas;
