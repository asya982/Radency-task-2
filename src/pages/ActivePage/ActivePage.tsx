import React, { FC, useState } from "react";
import Table from "../../components/Table/Table";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getActiveNotes } from "../../redux/reducers/notesReducer";
import NoteItem from "../../components/NotleItem/NoteItem";
import { mainTableHead } from "../../assets/tableHeaders";
import ModalForm from "../../components/ModalForm/ModalForm";

const ActivePage: FC = () => {
  const notesList = useSelector(getActiveNotes);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mainTable">
      <Table headers={mainTableHead}>
        {notesList.map((note, index) => (
          <NoteItem key={index} {...note} />
        ))}
      </Table>
      <Button className="fancyButton" onClick={() => setOpenModal(true)}>
        Create Note
      </Button>
      <ModalForm
        show={openModal}
        onHide={() => setOpenModal(false)}
        isCreate={true}
      />
    </div>
  );
};

export default ActivePage;
