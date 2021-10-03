export interface Filter {
  title?: string;
  desde?: string;
  hasta?: string;
  genres?: { [key: string]: string }[];
  page?: string;
}
