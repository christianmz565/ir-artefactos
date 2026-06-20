import type { Teacher } from "@/types/profesor";

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: 1,
    firstName: "Roberto",
    lastName: "Mendoza Taco",
    documentType: "DNI",
    documentNumber: "11223344",
    email: "roberto.mendoza@edu.pe",
    phone: "987111222",
    specialties: ["Matemáticas", "Computación"],
    status: "Active",
    assignedModules: ["Secundaria - 4A", "Secundaria - 4B"],
  },
  {
    id: 2,
    firstName: "Patricia",
    lastName: "Huamán Ramos",
    documentType: "DNI",
    documentNumber: "22334455",
    email: "patricia.huaman@edu.pe",
    phone: "987222333",
    specialties: ["Comunicación", "Inglés"],
    status: "Active",
    assignedModules: ["Primaria - 5A", "Secundaria - 1A"],
  },
  {
    id: 3,
    firstName: "Luis",
    lastName: "Quispe Mamani",
    documentType: "CE",
    documentNumber: "CE-002345678",
    email: "luis.quispe@edu.pe",
    phone: "987333444",
    specialties: ["Educación Física"],
    status: "Inactive",
    assignedModules: ["Primaria - 3A"],
  },
];

export const MOCK_DOCUMENT_TYPE_OPTIONS = [
  { value: "DNI", label: "DNI" },
  { value: "CE", label: "Carnet de Extranjería" },
  { value: "PAS", label: "Pasaporte" },
];

export const MOCK_SPECIALTY_OPTIONS = [
  { value: "Matemáticas", label: "Matemáticas" },
  { value: "Comunicación", label: "Comunicación" },
  { value: "Ciencias Naturales", label: "Ciencias Naturales" },
  { value: "Ciencias Sociales", label: "Ciencias Sociales" },
  { value: "Inglés", label: "Inglés" },
  { value: "Educación Física", label: "Educación Física" },
  { value: "Arte y Cultura", label: "Arte y Cultura" },
  { value: "Educación Religiosa", label: "Educación Religiosa" },
  { value: "Computación", label: "Computación" },
];
