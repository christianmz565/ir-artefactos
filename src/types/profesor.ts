export type DocumentType = "DNI" | "CE" | "PAS";

export type TeacherStatus = "Active" | "Inactive";

export type TeacherSpecialty =
  | "Matemáticas"
  | "Comunicación"
  | "Ciencias Naturales"
  | "Ciencias Sociales"
  | "Inglés"
  | "Educación Física"
  | "Arte y Cultura"
  | "Educación Religiosa"
  | "Computación";

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  email: string;
  phone: string;
  specialties: TeacherSpecialty[];
  status: TeacherStatus;
  assignedModules: string[];
}
