/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IInitialState {
  loading: boolean;
  data: any[];
  message: string;
}

export type Action =
  | { type: "FETCH_PENDING" }
  | { type: "FETCH_SUCCESS"; payload: any }
  | { type: "FETCH_ERROR"; payload?: any };
