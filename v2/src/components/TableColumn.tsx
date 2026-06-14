import Table from "react-bootstrap/Table";

interface TableColumnProps {
  header: string;
  items: string[];
}

export function TableColumn({ header, items }: TableColumnProps) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>{header}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
