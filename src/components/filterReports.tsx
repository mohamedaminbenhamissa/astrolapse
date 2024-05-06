import { Button } from "@mui/material";
import DatePicker from "./datePicker";
import { MultiSelect } from "./multi-select";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

interface Option {
  label: string;
  value: string;
}

const stockOptions: Option[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Out of Stock",
    value: "outOfStock",
  },
];

const FilterReports = () => {
  return (
    <div className="bg-white p-2 rounded w-100 border border-[#A58A76] flex flex-row gap-3 w-full">
      <MultiSelect label="User" options={stockOptions} value={top100Films}  />
      <MultiSelect label="Team" options={stockOptions} value={top100Films} />
      <DatePicker />
      <MultiSelect label="Work" options={stockOptions} value={top100Films} />
      <MultiSelect label="Project" options={stockOptions} value={top100Films} />

      <div className=" w-full flex justify-end">
        <Button>Export</Button>
      </div>
    </div>
  );
};

export default FilterReports;
