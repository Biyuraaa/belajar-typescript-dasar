export enum JK {
  "LAKI-LAKI",
  "PEREMPUAN",
}

export interface Mahasiswa {
  nim: string;
  nama: string;
  ipk: number;
  readonly jk: JK;
}
