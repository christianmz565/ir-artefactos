import type { Asistencia } from "@/types/asistencia";

export const MOCK_ASISTENCIAS: Asistencia[] = [
  {
    id: 1,
    estudianteId: 1,
    estudianteNombre: "Juan Pérez García",
    fecha: "2026-06-15",
    hora: "07:45:00",
    tipo: "Entrada",
    estado: "Presente",
    dispositivo: "Lector-001",
    responsableNombre: "María Quispe Mamani",
  },
  {
    id: 2,
    estudianteId: 2,
    estudianteNombre: "Ana López Fernández",
    fecha: "2026-06-15",
    hora: "08:12:00",
    tipo: "Entrada",
    estado: "Tardanza",
    dispositivo: "Lector-001",
    responsableNombre: "María Quispe Mamani",
    justificacion: "トラフィック",
  },
  {
    id: 3,
    estudianteId: 3,
    estudianteNombre: "Carlos Rodríguez Silva",
    fecha: "2026-06-15",
    hora: "07:50:00",
    tipo: "Salida",
    estado: "Presente",
    dispositivo: "Lector-002",
    responsableNombre: "Carlos Huamán Ramos",
  },
  {
    id: 4,
    estudianteId: 4,
    estudianteNombre: "María Torres Mendoza",
    fecha: "2026-06-15",
    hora: "08:30:00",
    tipo: "Entrada",
    estado: "Falta",
    dispositivo: "Lector-001",
    responsableNombre: "María Quispe Mamani",
    justificacion: "Justificado por enfermedad",
  },
];

export const MOCK_GRADO_OPTIONS = [
  { value: "", label: "Todos los Grados" },
  { value: "1ro Primaria", label: "1ro Primaria" },
  { value: "2do Primaria", label: "2do Primaria" },
  { value: "3ro Primaria", label: "3ro Primaria" },
  { value: "4to Primaria", label: "4to Primaria" },
  { value: "5to Primaria", label: "5to Primaria" },
  { value: "1ro Secundaria", label: "1ro Secundaria" },
  { value: "2do Secundaria", label: "2do Secundaria" },
  { value: "3ro Secundaria", label: "3ro Secundaria" },
  { value: "4to Secundaria", label: "4to Secundaria" },
  { value: "5to Secundaria", label: "5to Secundaria" },
];

export const MOCK_SECCION_OPTIONS = [
  { value: "", label: "Todas las Secciones" },
  { value: "A", label: "Sección A" },
  { value: "B", label: "Sección B" },
  { value: "C", label: "Sección C" },
];
