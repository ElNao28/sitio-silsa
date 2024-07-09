export interface GetProfile {
  message: string;
  status:  number;
  data:    Data;
}

export interface Data {
  nombre:    string;
  apellido:  string;
  apellidoM: string;
  telefono:  string;
  email:     string;
  genero:    string;
  foto:      string;
}
