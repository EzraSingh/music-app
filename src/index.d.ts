declare module 'react-d3-library'; 

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.jpeg' {
  const value: string;
  export = value;
}

declare module '*.mp3' {
  const value: string;
  export = value;
}

declare module '*.gql' {
  const value: string;
  export = value;
}

declare module '*.graphql' {
  const value: string;
  export = value;
}

declare namespace Webservice {
  interface ErrorResponse {
    /** http response status error code */
    code: number | string;
    /** breif human-readable specific to this error */
    title: string;
    /** a longer more detailed explanation of the issue */
    message?: string;
  }
  interface DataResponse {
    ok: boolean;
    summary?: string;
    count?: number;
    data?: any | any[];
    errors?: Webservice.ErrorResponse[];
    paging?: {
      /** index of the first item fetched */
      index?: number;

      /** total number of resources availble */
      total?: number;

      /** a url for the previous page, if any */
      previous?: string;

      /** a url for the next page, if any */
      next?: string;

      /** a url for requesting the current resource */
      self?: string;
    };
  }
}
