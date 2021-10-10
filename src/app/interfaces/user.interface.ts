/* eslint-disable @typescript-eslint/naming-convention */

export interface User {
  id: number;
  nickname: string;
  password: string;
  email: string;
  id_role: number;
  token: string;
  socket_id: string;
  followed: User[];
  followers: User[];
}
