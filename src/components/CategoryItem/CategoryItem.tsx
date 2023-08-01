import React, { FC } from "react";
import { CategoryType } from "../../assets/categories";
import { useSelector } from "react-redux";
import { Note, getNotesList } from "../../redux/reducers/notesReducer";

const CategoryItem: FC<CategoryType> = ({ icon, title, id }) => {
  const noteList = useSelector(getNotesList);

  return (
    <tr>
      <td className="item-photo">
        <img src={icon} alt={title} className="image" />
        {title}
      </td>
      <td>
        {
          noteList.filter((el: Note) => el.isActive && el.category === id)
            .length
        }
      </td>
      <td>
        {
          noteList.filter((el: Note) => !el.isActive && el.category === id)
            .length
        }
      </td>
    </tr>
  );
};

export default CategoryItem;
