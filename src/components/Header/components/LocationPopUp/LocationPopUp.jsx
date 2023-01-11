import Select from "react-select";

import "./LocationPopUp.css";

//TODO

// создаем в попапе кнопку сохранить под списком
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж
// кастомизировать попап красивым :)

export default function LocationPopUp({ options }) {
  return (
    <div className="popup-wrapper">
      <Select
        options={options}
        closeMenuOnSelect={false}
        isMulti
      ></Select>
    </div>
  );
}
