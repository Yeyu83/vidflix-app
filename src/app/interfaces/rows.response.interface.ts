export interface RowsResponse<T> {
  rows: T[];
  count: number;
  error: boolean;
}
