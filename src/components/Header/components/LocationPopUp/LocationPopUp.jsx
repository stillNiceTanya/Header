import Select, { components } from "react-select";
import Button from "../NavigationBar/Button/Button";
import "./LocationPopUp.css";

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

export default function LocationPopUp({
  options,
  selectedCities,
  onChange,
  onSave,
}) {
  const MultiValueContainer = ({ selectProps, data }) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex((selected) => selected.label === label);
    const isFirstSelected = index === 0;
    const labelPrefix = isFirstSelected ? ` (${allSelected.length})` : ", ";
    const val = `${labelPrefix}${label}`;
    return val;
  };

  return (
    <div className="popup-wrapper">
      <Select
        isClearable={false}
        hideSelectedOptions={false}
        options={options}
        closeMenuOnSelect={false}
        isMulti
        defaultValue={selectedCities}
        onChange={onChange}
        components={{
          MultiValueContainer,
          Control: ControlComponent,
          IndicatorsContainer: () => null,
        }}
        menuIsOpen
        downChevron={false}
        autoFocus
        placeholder="Регион или город"
        maxMenuHeight="300px"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "15px",
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

      <Button
        onClick={onSave}
        className="pop-up-button"
      >
        Сохранить
      </Button>
    </div>
  );
}
