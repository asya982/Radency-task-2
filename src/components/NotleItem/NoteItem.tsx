import React, { FC, useState } from "react";
import {
  Note,
  changeStatus,
  removeNote,
} from "../../redux/reducers/notesReducer";
import { categories } from "../../assets/categories";
import archiveIcon from "../../assets/img/icons/archiveIcon.svg";
import deleteIcon from "../../assets/img/icons/deleteIcon.svg";
import editIcon from "../../assets/img/icons/editIcon.svg";
import unarchiveIcon from "../../assets/img/icons/unarchiveIcon.svg";
import styles from "./NoteItem.module.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ModalForm from "../ModalForm/ModalForm";

const NoteItem: FC<Note> = ({
  category,
  content,
  created,
  dates,
  id,
  isActive,
  name,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const noteCategory = categories.find((element) => element.id == category);

  const deleteItem = () => {
    dispatch(removeNote(id));
  };

  const archiveItem = (status: boolean) => {
    dispatch(changeStatus(id, status));
  };

  return (
    <tr>
      <td className={styles.nameItem}>
        <img src={noteCategory?.icon} alt={noteCategory?.title} />
        {name}
      </td>
      <td>{created}</td>
      <td>{noteCategory?.title}</td>
      <td className={styles.cutEdges}>{content}</td>
      <td style={{minWidth:"250px"}} className={styles.cutEdges}>{dates.join(", ")}</td>
      <td>
        <Button variant="ligth" onClick={() => setOpenModal(true)}>
          <img src={editIcon} alt="editIcon" />
        </Button>
        <Button variant="ligth" onClick={() => archiveItem(!isActive)}>
          <img src={isActive ? archiveIcon : unarchiveIcon} alt="statusIcon" />
        </Button>
        <Button variant="ligth" onClick={deleteItem}>
          <img src={deleteIcon} alt="deleteIcon" />
        </Button>
      </td>
      <ModalForm
        show={openModal}
        onHide={() => setOpenModal(false)}
        isCreate={false}
        initialData={{ category, content, created, dates, id, isActive, name }}
      />
    </tr>
  );
};

export default NoteItem;
