export interface GetListAdmins {
  message: string;
  status:  number;
  data:    Admin[];
}

export interface Admin {
  id:        number;
  email:     string;
  password:  string;
  nombre:    string;
  apellido:  string;
  apellidoM: string;
  telefono:  string;
  genero:    string;
  foto:      string;
  rol:       string;
  status:    string;
}
