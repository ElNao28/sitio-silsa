export interface Horarios {
  id:       number;
  fecha:string;
  status:   string;
  horarios: Horario[];
}

export interface Horario {
  id:     number;
  hora:   string;
  horario: string;
  status: string;
}
