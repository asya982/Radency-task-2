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
      <td className="item-photo">
        <img
          src={noteCategory?.icon}
          alt={noteCategory?.title}
          className="my-5 ml-10 image"
        />
        {name}
      </td>
      <td>{created}</td>
      <td>{noteCategory?.title}</td>
      <td className="cutEdges">{content}</td>
      <td className="cutEdges pl-3">{dates.join(", ")}</td>
      <td className="flex items-center gap-3 justify-center">
        <button onClick={() => setOpenModal(true)}>
          <img src={editIcon} alt="editIcon" />
        </button>
        <button onClick={() => archiveItem(!isActive)}>
          <img src={isActive ? archiveIcon : unarchiveIcon} alt="statusIcon" />
        </button>
        <button onClick={deleteItem}>
          <img src={deleteIcon} alt="deleteIcon" />
        </button>
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
