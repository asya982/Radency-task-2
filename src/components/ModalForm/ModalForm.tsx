import React, { FC } from "react";
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
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-96 p-6 rounded shadow-lg border">
        <h3 className="text-xl font-bold mb-4">
          {isCreate ? "Create" : "Edit"} Note
        </h3>

        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={validationSchema}
            validateOnMount={true}
          >
            {({ isValid, errors, touched }) => (
              <Form className="flex flex-col gap-10">
                <div className="form-group">
                  <label>Note's name:</label>
                  <Field name="name" className="input" />
                </div>
                <div className="form-group">
                  <label>Choose category:</label>
                  <Field name="category" as="select" className="input">
                    {categories.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="form-group">
                  <label>Content:</label>
                  <Field
                    name="content"
                    className="input resize-none"
                    as="textarea"
                    rows={3}
                  />
                </div>
                <div className="self-end flex gap-20">
                  <button
                    className="border-gray-400 text-gray-400 border-2 rounded-lg py-1 px-2 hover:text-yellow-50 hover:bg-gray-400"
                    onClick={onHide}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-primary rounded-lg border-2 border-primary self-end py-1 px-2 text-slate-50 hover:text-primary hover:bg-slate-50"
                    type="submit"
                    disabled={!isValid}
                  >
                    {isCreate ? "Create" : "Save changes"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
