import {ErrorMessage} from './ErrorMessage';
import {ErrorDetail} from './ErrorDetail';

export interface IErrorHandle {
  getLineError(errorStack: string): Array<string>;
  handle(): ErrorMessage;
  getMessage(errorDetailStr: string): string;
  getErrorDetail(errorDetailStr: string): ErrorDetail;
}
