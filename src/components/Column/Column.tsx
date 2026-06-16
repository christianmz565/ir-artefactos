import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

interface ColumnProps {
  header: string;
  items: string[];
}

export function Column({ header, items }: ColumnProps) {
  return (
    <Card>
      <Table className="mb-0" hover>
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
    </Card>
  );
}
