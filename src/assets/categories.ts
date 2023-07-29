import task from "./img/task.png";
import randomThought from "./img/randomThought.png";
import idea from "./img/idea.png";

export type CategoryType = {
  id: number;
  title: string;
  icon: string;
};

type CategoriesType = Array<CategoryType>;

export const categories: CategoriesType = [
  { id: 0, title: "Task", icon: task },
  { id: 1, title: "Random Thought", icon: randomThought },
  { id: 2, title: "Idea", icon: idea },
];
