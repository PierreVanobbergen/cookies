declare module '@react-native-cookies/cookies' {
  export interface Cookie {
    name: string;
    value: string;
    path?: string;
    domain?: string;
    version?: string;
    expires?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }

  export interface Cookies {
    [key: string]: Cookie;
  }

  export interface CookieManagerStatic {
    set(url: string, cookie: Cookie, useWebKit?: boolean): Promise<boolean>;
    setFromResponse(url: string, cookie: string): Promise<boolean>;

    get(url: string, useWebKit?: boolean): Promise<Cookies>;
    getFromResponse(url: string): Promise<Cookies>;

    clearAll(useWebKit?: boolean): Promise<boolean>;
    clearByName(
      url: string,
      name: string,
      useWebKit?: boolean,
    ): Promise<boolean>;
    
    flush(): Promise<void>;

    //iOS only
    getAll(useWebKit?: boolean): Promise<Cookies>;
  }

  const CookieManager: CookieManagerStatic;

  export default CookieManager;
}
