export interface TreeNotices {
  message: string;
  status:  number;
  data:    TreeNotice[];
}

export interface TreeNotice {
  id:        number;
  titulo:    string;
  contenido: string;
  autor:     string;
  fecha:     Date;
  img:       string;
  status:    string;
}
