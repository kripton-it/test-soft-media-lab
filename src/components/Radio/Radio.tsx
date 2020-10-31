import React from 'react';

const ReduxFormSelect: React.FC = (field: any) => {
  console.log(field)
  const { id, input, label, ...rest } = field
  const checked = input.value === rest.value;
  return (
    <div>
      <input
        type='radio'
        id={id}
        { ...input }
        { ...rest }
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
      {/* <Label>{field.label}</Label>
      <select {...field.input} disabled={field.disabled} className="form-control">
        <option value="" disabled={true}>
          {field.placeHolder}
        </option>
        {map(field.datas, (data: any, i: number) => {
          return (
            <option key={i} value={data.value}>
              {data.label}
            </option>
          );
        })}
      </select>
      {field.meta.touched && <p className="text-danger">{field.meta.error}</p>} */}
    </div>
  )
};

export default ReduxFormSelect;