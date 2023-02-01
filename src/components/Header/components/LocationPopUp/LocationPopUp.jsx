import Select, { components } from "react-select";
import React, { useState } from "react";
import Button from "../NavigationBar/Button/Button";
import "./LocationPopUp.css";

//TODO
// как components несколько объектов засунуть
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж

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

// const menuFooterStyle = {
//   padding: "8px 12px",
//   background: "pink",
// };

// const MenuList = (props) => {
//   return (
//     <components.MenuList {...props}>
//       {props.children}
//       <div style={menuFooterStyle}>
//         <Button />
//       </div>
//     </components.MenuList>
//   );
// };

// const groupStyles = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
// };
// const groupBadgeStyles = {
//   backgroundColor: "#EBECF0",
//   borderRadius: "2em",
//   color: "#172B4D",
//   display: "inline-block",
//   fontSize: 12,
//   fontWeight: "normal",
//   lineHeight: "1",
//   minWidth: 1,
//   padding: "0.16666666666667em 0.5em",
//   textAlign: "center",
// };
// const formatGroupLabel = (data) => (
//   <div style={groupStyles}>
//     <span>{data.label}</span>
//     <span style={groupBadgeStyles}>{data.options.length}</span>
//   </div>
// );
// const customStyles = {
//   valueContainer: (provided, state) => ({
//     ...provided,
//     textOverflow: "ellipsis",
//     maxWidth: "90%",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     display: "initial",
//   }),
// };
const multiValueContainer = ({ selectProps, data }) => {
  const label = data.label;
  const allSelected = selectProps.value;
  const index = allSelected.findIndex((selected) => selected.label === label);
  const isFirstSelected = index === 0;
  const labelSuffix = isFirstSelected ? ` (${allSelected.length})` : ", ";
  const val = `${labelSuffix}${label}`;
  return val;
};

export default function LocationPopUp({ options }) {
  // const [choosenAreas, setChoosenAreas] = useState([]);

  // const onChange = (event) => {
  //   console.log(...event);
  //   setChoosenAreas(...event);
  //   console.log(choosenAreas);
  // };

  const ControlComponent = (props) => (
    <div style={controlStyles}>
      <components.Control {...props} />
    </div>
  );

  return (
    <div className="popup-wrapper">
      <Select
        // formatGroupLabel={formatGroupLabel}
        // onChange={onChange}
        isClearable={false}
        hideSelectedOptions={false}
        options={options}
        closeMenuOnSelect={false}
        isMulti
        // components={{ MenuList }}
        components={{
          MultiValueContainer: multiValueContainer,
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
            backgroundColor: "rgb(226, 223, 223)",
            minHeight: "53px",
          }),
          multiValue: (base) => ({
            ...base,
            border: `1px solid lightgrey`,
            borderRadius: "9px",
            backgroundColor: "rgb(226, 223, 223)",
            padding: "2px",
          }),

          valueContainer: (base) => ({
            ...base,
            textOverflow: "ellipsis",
            maxWidth: "90%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }),

          menu: (base) => ({
            ...base,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            borderRadius: 0,
          }),
        }}
      />
      <Button className="pop-up-button">Сохранить</Button>
    </div>
  );
}
