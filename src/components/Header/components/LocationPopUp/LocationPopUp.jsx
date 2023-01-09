import React from "react";
import Select from "react-select";

import "./constants";
import "./LocationPopUp.css";

//TODO
// при первом открытии делать пост запрос https://studika.ru/api/areas и класть в переменную
// пока список грузится, показывать лоадер ...
// тот список городов, что я получила, привожу в массив объектов формата { value: "chocolate", label: "Chocolate" }
// создаем в попапе кнопку сохранить под списком
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж
// кастомизировать попап красивым :)

export default function LocationPopUp() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="popup-wrapper">
      <Select
        options={options}
        closeMenuOnSelect={false}
        isMulti
      />
    </div>
  );
}
