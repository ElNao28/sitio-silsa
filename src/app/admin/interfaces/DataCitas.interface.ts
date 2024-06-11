export interface DataCitas {
  horarios: Horario[];
}

export interface Horario {
  id:       number;
  hora:     string;
  fecha:    string;
  status:   string;
  dataCita: DataCita;
}

export interface DataCita {
  id:             number;
  name:           string;
  lastname:       string;
  motherlastname: string;
  email:          string;
  cellphone:      string;
  asunto:         string;
  status:         string;
}
