import React, { FC, useState } from "react";
import Table from "../../components/Table/Table";
import { useSelector } from "react-redux";
import { getActiveNotes } from "../../redux/reducers/notesReducer";
import NoteItem from "../../components/NotleItem/NoteItem";
import { mainTableHead } from "../../assets/tableHeaders";
import ModalForm from "../../components/ModalForm/ModalForm";

const ActivePage: FC = () => {
  const notesList = useSelector(getActiveNotes);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mb-10 flex flex-col gap-6">
      <Table headers={mainTableHead}>
        {notesList.map((note, index) => (
          <NoteItem key={index} {...note} />
        ))}
      </Table>
      <button
        className="bg-primary rounded-lg border-2 border-primary self-end p-3 text-slate-50 hover:text-primary hover:bg-slate-50"
        onClick={() => setOpenModal(true)}
      >
        Create Note
      </button>
      <ModalForm
        show={openModal}
        onHide={() => setOpenModal(false)}
        isCreate={true}
      />
    </div>
  );
};

export default ActivePage;
