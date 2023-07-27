type CategoryType = {
  id: number;
  title: string;
  icon: string;
};

type CategoriesType = Array<CategoryType>;

export const categories: CategoriesType = [
  { id: 0, title: "Task", icon: "./img/task.png" },
  { id: 1, title: "Random Thought", icon: "./img/randomThought.png" },
  { id: 2, title: "Idea", icon: "./img/idea.png" },
];

