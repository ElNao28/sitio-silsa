export interface Horarios {
  id:       number;
  dia:      number;
  mes:      number;
  anio:     number;
  status:   string;
  horarios: Horario[];
}

export interface Horario {
  id:     number;
  hora:   string;
  horario: string;
  status: string;
}
