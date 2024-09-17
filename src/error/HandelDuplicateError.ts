import { TErrorResource } from '../interface/Error.interface';

export const handelDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const errorSource: TErrorResource = [
    {
      path: '',
      message: `${extractedMessage} already exists`,
    },
  ];
  return {
    errorSource,
  };
};
