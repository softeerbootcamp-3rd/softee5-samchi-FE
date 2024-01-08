import axios from "axios";

export type ApiResponse<T = object> = Promise<DefaultResponse<T>>;

export type DefaultResponse<T = object> = {
  code: number;
  message: string;
  timestamp: Date;
  data: T;
};

const baseURL = "https://api.drivechat.store/api";

export const fetcher = axios.create({
  baseURL,
});