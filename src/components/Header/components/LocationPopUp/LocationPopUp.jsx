import Select, { components } from "react-select";
import React, { useState } from "react";
import Button from "../NavigationBar/Button/Button";
import "./LocationPopUp.css";

//TODO
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж

const controlStyles = {
  border: "1px solid rgb(226, 223, 223)",
  padding: "25px 10px 10px 10px",
  background: "white",
  color: "white",
  borderRadius: "10px 10px 0 0",
};

export default function LocationPopUp({ options }) {
  const [isDataChoosen, setDataChoosen] = useState([]);

  const multiValueContainer = ({ selectProps, data }) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex((selected) => selected.label === label);
    const isFirstSelected = index === 0;
    const labelSuffix = isFirstSelected ? ` (${allSelected.length})` : ", ";
    const val = `${labelSuffix}${label}`;
    return val;
  };

  const ControlComponent = (props) => (
    <div style={controlStyles}>
      <components.Control {...props} />
    </div>
  );

  const handleChange = (e) => {
    // if (e) setDataChoosen(true);
    // let array = e.map((el) => el.label);
    setDataChoosen(e);
  };
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
        onChange={handleChange}
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

      {isDataChoosen.length !== 0 ? (
        <Button className="pop-up-button active ">Сохранить</Button>
      ) : (
        <Button className="pop-up-button passive">Сохранить</Button>
      )}
    </div>
  );
}
