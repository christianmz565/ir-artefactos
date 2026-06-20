export type DocumentType = "DNI" | "CE" | "PAS";
export type GuardianStatus = "Active" | "Inactive";

export interface Guardian {
  id: number;
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  relationship: string;
  address: string;
  email: string;
  phone: string;
  status: GuardianStatus;
  associatedStudents: number[];
}
