export type HeaderProps = {
  toggleTheme: () => void;
  toggleLang: () => void;
};

export type page = {
  id: string;
  img?: string;
  title: string;
  to: string;
};

export type footerColumnLinks = {
  id: string;
  img: string;
  title:string;
  text?: string;
};
