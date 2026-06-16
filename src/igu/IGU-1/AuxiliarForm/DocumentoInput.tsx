import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { MOCK_DOCUMENT_TYPE_OPTIONS } from "@/mocks/auxiliars";

interface DocumentoInputProps {
  tipo: string;
  numero: string;
  onTipoChange: (value: string) => void;
  onNumeroChange: (value: string) => void;
}

export function DocumentoInput({
  tipo,
  numero,
  onTipoChange,
  onNumeroChange,
}: DocumentoInputProps) {
  return (
    <div className="d-flex gap-3 align-items-end">
      <Select
        label="Tipo de Documento"
        options={MOCK_DOCUMENT_TYPE_OPTIONS}
        value={tipo}
        onChange={onTipoChange}
        id="auxiliar-tipo-documento"
      />
      <Input
        label="Número de Documento"
        placeholder="Ingrese número de documento"
        value={numero}
        onChange={onNumeroChange}
        id="auxiliar-numero-documento"
      />
    </div>
  );
}
