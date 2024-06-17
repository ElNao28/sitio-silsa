export interface Noticias {
  message: string;
  status:  number;
  data:    Datum[];
}
export interface Noticia {
  message: string;
  status:  number;
  data:    Datum;
}
export interface Datum {
  id:        number;
  titulo:    string;
  contenido: string;
  autor:     string;
  fecha:     string;
  img:       string;
  status:    string;
}
