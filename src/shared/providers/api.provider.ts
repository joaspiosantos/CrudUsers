interface IApiProvider {
  data: unknown;
  self: string;
  summary?: string;
  error?: string;
}

export const ApiProvider = function ({ data, self, summary, error }: IApiProvider) {
  return {
    data: data,
    summary: summary,
    self: self,
    error: error,
    timestamp: new Date().toISOString()
  } as IApiProvider;
};
