/* eslint-disable no-console */
export interface ILogger {
  fileName?: string;
  type?: 'ERROR' | 'LOG';
  description?: string;
  log?: any;
}

const Logger = {
  log({ fileName, log, type, description }: ILogger) {
    console.log(
      `
        \n
  fileName: ${fileName ?? '-'},
  type: ${type ?? '-'},
  description: ${description ?? '-'},
  log: ${log ?? '-'}
        \n
      `,
    );
  },
};

export default Logger;
