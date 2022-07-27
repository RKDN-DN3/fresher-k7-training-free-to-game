import { Game } from 'types/index';
const searchInput = (arr: Game[], searchText: string) => {
  let dataRender: Game[] = [];
  arr.filter((item: Game) => {
    if (item?.title?.toLowerCase()?.includes(searchText.toLowerCase())) {
      dataRender.push(item);
    }
    return true;
  });
  return dataRender;
};

export default searchInput;
