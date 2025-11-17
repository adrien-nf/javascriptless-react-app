export type Pagination<T extends object> = {
  pageAmount: number;
  data: T[];
};
