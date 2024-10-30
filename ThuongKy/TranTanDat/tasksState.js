import { atom, selector } from 'recoil';

export const tasksState = atom({
  key: 'tasksState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const filteredTasksState = selector({
  key: 'filteredTasksState',
  get: ({ get }) => {
    const tasks = get(tasksState);
    const search = get(searchState);
    return tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()));
  },
});

export const searchState = atom({
  key: 'searchState',
  default: '',
});