export interface GetCitas {
  id:       number;
  dia:      number;
  mes:      number;
  anio:     number;
  horarios: Horario[];
}

export interface Horario {
  id:     number;
  hora:   string;
  status: string;
}
