import Select, { components } from "react-select";
import React, { useState } from "react";
import Button from "../NavigationBar/Button/Button";
import "./LocationPopUp.css";

//TODO
// как components несколько объектов засунуть
// создаем в попапе кнопку сохранить под списком. СЕЙЧАС она в самом внизу списка и до нее надо скроллить. Нужно отсчитать какое-то количество li и в пределах видимости высоты 250 пикселей внизу кнопка
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж
// скрыть стрелочку выпадающего списка Select и вертикальный слеш

// Я сталкнулась с такой проблемой сделать кнопку внизу списка
// 1) если сделать как мы на звонке решили, кнопку в MenuList внизу списка, то она падает в самом внизу списка, где-то после 200+ строчек, и до нее надо мотать. Наверняка можно как-то ставить ее после, например, 7 строчки и отсчитывать длину в списке каждый раз, но я не знаю как это сделать.

// 2) если зафиксировать верхний блок Select (который выглядит как поиск), то можно кнопку сделать абсолютом под списком. Но разобраться с красотой самого импута

const controlStyles = {
  border: "1px solid rgb(226, 223, 223)",
  padding: "25px 10px 10px 10px",
  background: "white",
  color: "white",
  borderRadius: "10px 10px 0 0",
};

const menuFooterStyle = {
  padding: "8px 12px",
  background: "pink",
};

const MenuList = (props) => {
  return (
    <components.MenuList {...props}>
      {props.children}
      <div style={menuFooterStyle}>
        <Button />
      </div>
    </components.MenuList>
  );
};

export default function LocationPopUp({ options }) {
  const [choosenAreas, setChoosenAreas] = useState([]);

  const onChange = (event) => {
    console.log(...event);
    setChoosenAreas(...event);
    console.log(choosenAreas);
  };

  const ControlComponent = (props) => (
    <div style={controlStyles}>
      <components.Control {...props} />
    </div>
  );

  return (
    <div className="popup-wrapper">
      <Select
        onChange={onChange}
        isClearable={false}
        options={options}
        closeMenuOnSelect={false}
        isMulti
        // components={{ MenuList }}
        components={{
          Control: ControlComponent,
          IndicatorsContainer: () => null,
        }}
        IndicatorsContainer={{ isDisabled: true }}
        menuIsOpen={true}
        downChevron={false}
        autoFocus
        placeholder="Регион или город"
        maxMenuHeight="300px"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "15px",
            borderColor: state.isFocused ? "grey" : "grey",
            overflow: "scroll",
            height: "40px",
          }),
          multiValue: (base) => ({
            ...base,
            border: `1px solid lightgrey`,
            borderRadius: "9px",
            backgroundColor: "rgb(226, 223, 223)",
            padding: "2px",
          }),
        }}
      />
      <button className="test">blabla</button>
    </div>
  );
}
