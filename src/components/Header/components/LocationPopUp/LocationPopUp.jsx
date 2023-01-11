import Select from "react-select";

import "./LocationPopUp.css";

//TODO
// вешаю онклик на виндоу, если таргет попап - то ретерн, если таргет не поп ап, то попап скрыть
// и второй способ найти react-click-outside и переиспользовать

// создаем в попапе кнопку сохранить под списком
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж
// кастомизировать попап красивым :)

export default function LocationPopUp({ options, onClick }) {
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  return (
    <div className="popup-wrapper">
      <Select
        // onClick={handleTogglePopup}
        options={options}
        closeMenuOnSelect={false}
        isMulti
      ></Select>
    </div>
  );
}
