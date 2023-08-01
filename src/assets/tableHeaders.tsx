import archiveIcon from "./img/icons/archiveIcon.svg";
import deleteIcon from "./img/icons/deleteIcon.svg";

export const mainTableHead = [
  "Name",
  "Created",
  "Category",
  "Content",
  "Dates",
  [
    <img src={archiveIcon} alt="archive" key={5}/>,
    <img src={deleteIcon} alt="delete" key={6}/>,
  ],
];
export const categoriesHead = ["Note category", "Active", "Archived"];
