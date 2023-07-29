import React, { FC, JSX } from "react";
import styles from "./Table.module.css";
import Table from "react-bootstrap/Table";

type TableProps = {
  headers: (string | JSX.Element[])[];
  children: JSX.Element | JSX.Element[];
};

const CustomTable: FC<TableProps> = ({ headers, children }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          {headers.map((el, i) => (
            <th scope="col" key={i} className={styles.headers}>
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default CustomTable;
