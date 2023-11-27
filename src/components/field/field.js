import { FieldLayout } from "./field-layout";

export const Field = ({ onCellClick, field }) => {
  return <FieldLayout field={field} onCellClick={onCellClick} />;
};
