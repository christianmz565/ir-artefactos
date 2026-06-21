export type DocumentType = "DNI" | "CE" | "PAS";

export type AuxiliarStatus = "Active" | "Inactive";

export interface Auxiliar {
  id: number;
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  email: string;
  phone: string;
  status: AuxiliarStatus;
  modules: string[];
}
