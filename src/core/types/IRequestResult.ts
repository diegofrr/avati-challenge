export type IRequestResult<TData> = {
  data: TData | null;
  status: number;
  error?: string;
};
