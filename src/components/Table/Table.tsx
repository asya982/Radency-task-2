import React, { FC, JSX } from "react";

type TableProps = {
  headers: (string | JSX.Element[])[];
  children: JSX.Element | JSX.Element[];
};

const CustomTable: FC<TableProps> = ({ headers, children }) => {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          {headers.map((el, i) => (
            <th  key={i} className='text-primary border-b border-primary pb-4 last-of-type:flex justify-center gap-2 last-of-type:py-4'>
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default CustomTable;
