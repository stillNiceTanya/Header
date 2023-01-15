import Select, { components } from "react-select";
// import Tooltip from "@atlaskit/tooltip";
import "./LocationPopUp.css";

//TODO

// создаем в попапе кнопку сохранить под списком
// при сохранении(только когда что-то выбрано, если не выбрано, то кнопка сохранить нерабочая), список сохраненных городов появляется в списке компонента lacatino-select
// при сохранении положить список выбранных город в локал сторадж
// кастомизировать попап красивым :)

const controlStyles = {
  border: "1px solid rgb(226, 223, 223)",
  padding: "25px 10px 10px 10px",
  background: "white",
  color: "white",
  borderRadius: "10px 10px 0 0",
};

const ControlComponent = (props) => (
  <div style={controlStyles}>
    <components.Control {...props} />
  </div>
);

export default function LocationPopUp({ options }) {
  return (
    <div className="popup-wrapper">
      <Select
        isClearable={false}
        options={options}
        closeMenuOnSelect={false}
        isMulti
        components={{ Control: ControlComponent }}
        menuIsOpen={true}
        autoFocus
        placeholder="Регион или город"
        maxMenuHeight="300px"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "15px",
            borderColor: state.isFocused ? "grey" : "grey",
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
    </div>
  );
}
