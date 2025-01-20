export class Log {
  static isProduction =
    import.meta.env.MODE === "development" || import.meta.env.MODE === "test";

  default(...data: any) {
    if (Log.isProduction) {
      console.log(...data);
    }
  }

  info(...data: any) {
    if (Log.isProduction) {
      console.info(...data);
    }
  }

  warn(...data: any) {
    if (Log.isProduction) {
      console.warn(...data);
    }
  }

  error(...data: any) {
    if (Log.isProduction) {
      console.error(...data);
    }
  }
}

export const log = new Log();
