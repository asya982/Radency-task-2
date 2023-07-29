import React, { FC } from "react";
import styles from "./ModalForm.module.css";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Modal,
} from "react-bootstrap";
import {
  Note,
  addNote,
  editNote,
  getNotesList,
} from "../../redux/reducers/notesReducer";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { validationSchema } from "./validation";
import { categories } from "../../assets/categories";
import { useDispatch } from "react-redux";
import { findDates, publishDate } from "../../service/helpers";

interface FormValues {
  id: number;
  category: number;
  name: string;
  content: string;
}

type ModalFormProps = {
  isCreate: boolean;
  initialData?: Note;
  show: boolean;
  onHide: () => void;
};

const ModalForm: FC<ModalFormProps> = ({
  isCreate,
  initialData,
  show,
  onHide,
}) => {
  const noteList = useSelector(getNotesList);
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    id: initialData?.id !== undefined ? initialData?.id : noteList.length,
    category: initialData?.category || 0,
    name: initialData?.name || "",
    content: initialData?.content || "",
  };

  const submitForm = (values: FormValues) => {
    const preparedNote = {
      ...values,
      dates: findDates(values.content),
      isActive: true,
      created: publishDate(),
    };

    if (isCreate) {
      dispatch(addNote(preparedNote));
    } else {
      dispatch(editNote({ ...values, dates: preparedNote.dates }));
    }

    onHide();
  };

  return (
    <Modal {...{ show, onHide }}>
      <Modal.Header closeButton>
        <Modal.Title>{isCreate ? "Create" : "Edit"} Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          validationSchema={validationSchema}
          validateOnMount={true}
        >
          {({ isValid, errors, touched }) => (
            <Form className={styles.form}>
              <FormGroup>
                <FormLabel>Note's name:</FormLabel>
                <Field name="name" as={FormControl} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Choose category:</FormLabel>
                <Field as={FormSelect} name="category">
                  {categories.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </Field>
              </FormGroup>
              <FormGroup>
                <FormLabel>Content:</FormLabel>
                <Field
                  name="content"
                  className="form-control"
                  as="textarea"
                  rows={3}
                />
              </FormGroup>
              <div className={styles.controlButtons}>
                <Button variant="outline-secondary" onClick={onHide}>
                  Cancel
                </Button>
                <Button
                  className="fancyButton"
                  type="submit"
                  disabled={!isValid}
                >
                  {isCreate ? "Create" : "Save changes"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
