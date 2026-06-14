import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Header } from "./components/Header";
import { StudentTable } from "./components/StudentTable";
import type { Student } from "./components/StudentTable";
import { StudentForm } from "./components/StudentForm";
import type { StudentFormData } from "./components/StudentForm";

const INITIAL_STUDENTS: Student[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "CS" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Math" },
  { id: 3, name: "Carol White", email: "carol@example.com", course: "Physics" },
  { id: 4, name: "David Brown", email: "david@example.com", course: "CS" },
];

function App() {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCourse, setFilterCourse] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [nextId, setNextId] = useState(5);

  const filtered = students.filter((s) => {
    const matchesSearch =
      !searchQuery ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = !filterCourse || s.course === filterCourse;
    return matchesSearch && matchesCourse;
  });

  const handleAddStudent = () => {
    setEditingId(null);
    setShowForm(true);
  };

  const handleEditStudent = (student: Student) => {
    setEditingId(student.id);
    setShowForm(true);
  };

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleSaveStudent = (data: StudentFormData) => {
    if (editingId !== null) {
      setStudents(
        students.map((s) => (s.id === editingId ? { ...s, ...data } : s))
      );
    } else {
      setStudents([...students, { id: nextId, ...data }]);
      setNextId(nextId + 1);
    }
    setShowForm(false);
    setEditingId(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingId(null);
  };

  const editingStudent = editingId
    ? students.find((s) => s.id === editingId)
    : undefined;

  return (
    <Container className="py-4">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterCourse={filterCourse}
        onFilterChange={setFilterCourse}
        onAddStudent={handleAddStudent}
      />
      {showForm ? (
        <StudentForm
          isEdit={editingId !== null}
          initialData={
            editingStudent
              ? {
                  name: editingStudent.name,
                  email: editingStudent.email,
                  course: editingStudent.course,
                }
              : undefined
          }
          onSave={handleSaveStudent}
          onCancel={handleCancelForm}
        />
      ) : (
        <StudentTable
          students={filtered}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      )}
    </Container>
  );
}

export default App;
