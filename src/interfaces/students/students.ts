import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

interface Student {
	id: number;
	name: string;
	email: string;
	course: string;
}

@customElement("students-interface")
export class StudentsInterface extends LitElement {
	@state()
	private students: Student[] = [
		{ id: 1, name: "Alice Johnson", email: "alice@example.com", course: "CS" },
		{ id: 2, name: "Bob Smith", email: "bob@example.com", course: "Math" },
		{
			id: 3,
			name: "Carol White",
			email: "carol@example.com",
			course: "Physics",
		},
		{
			id: 4,
			name: "David Brown",
			email: "david@example.com",
			course: "CS",
		},
	];

	@state()
	private showForm = false;

	@state()
	private editingId: number | null = null;

	@state()
	private formData = { name: "", email: "", course: "CS" };

	@state()
	private filterCourse = "";

	private _nextId = 5;

	render() {
		const filtered = this.filterCourse
			? this.students.filter((s) => s.course === this.filterCourse)
			: this.students;

		return html`
			<div
				data-component-id="IGU-1"
				data-component-label="Students Management Interface"
				class="igu"
			>
				<header class="header">
					<h1>Students Management</h1>
					<div class="header-actions">
						<wired-input
							data-component-id="INP-3"
							data-component-label="Search Students"
							placeholder="Search by name..."
							@input=${this._onSearch}
						></wired-input>
						<wired-combo
							data-component-id="SEL-1"
							data-component-label="Course Filter"
							@selected=${this._onFilterChange}
						>
							<wired-item value="">All Courses</wired-item>
							<wired-item value="CS">Computer Science</wired-item>
							<wired-item value="Math">Mathematics</wired-item>
							<wired-item value="Physics">Physics</wired-item>
						</wired-combo>
						<wired-button
							data-component-id="BTN-1"
							data-component-label="Add New Student"
							@click=${this._openAddForm}
						>
							+ Add Student
						</wired-button>
					</div>
				</header>

				${this.showForm ? this._renderForm() : this._renderTable(filtered)}
			</div>
		`;
	}

	private _renderTable(students: Student[]) {
		return html`
			<wired-card
				data-component-id="TBL-1"
				data-component-label="Students Table"
				class="table-card"
			>
				<table>
					<thead>
						<tr>
							<th
								data-component-id="COL-1"
								data-component-label="ID Column"
							>
								ID
							</th>
							<th
								data-component-id="COL-2"
								data-component-label="Name Column"
							>
								Name
							</th>
							<th
								data-component-id="COL-3"
								data-component-label="Email Column"
							>
								Email
							</th>
							<th
								data-component-id="COL-4"
								data-component-label="Course Column"
							>
								Course
							</th>
							<th
								data-component-id="COL-5"
								data-component-label="Actions Column"
							>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						${students.map(
							(s) => html`
								<tr>
									<td>${s.id}</td>
									<td>${s.name}</td>
									<td>${s.email}</td>
									<td>${s.course}</td>
									<td class="actions">
										<wired-button
											data-component-id="BTN-2"
											data-component-label="Edit Student"
											@click=${() => this._openEditForm(s)}
										>
											Edit
										</wired-button>
										<wired-button
											data-component-id="BTN-3"
											data-component-label="Delete Student"
											@click=${() => this._deleteStudent(s.id)}
										>
											Delete
										</wired-button>
									</td>
								</tr>
							`,
						)}
					</tbody>
				</table>
			</wired-card>
		`;
	}

	private _renderForm() {
		const isEdit = this.editingId !== null;
		return html`
			<wired-card
				data-component-id="FRM-1"
				data-component-label="Student Form"
				class="form-card"
			>
				<h2>${isEdit ? "Edit Student" : "Add New Student"}</h2>
				<div class="form-group">
					<label>Name</label>
					<wired-input
						data-component-id="INP-1"
						data-component-label="Student Name"
						placeholder="Enter full name"
						.value=${this.formData.name}
						@input=${(e: Event) =>
							(this.formData = {
								...this.formData,
								name: (e.target as HTMLInputElement).value,
							})}
					></wired-input>
				</div>
				<div class="form-group">
					<label>Email</label>
					<wired-input
						data-component-id="INP-2"
						data-component-label="Student Email"
						placeholder="Enter email address"
						.value=${this.formData.email}
						@input=${(e: Event) =>
							(this.formData = {
								...this.formData,
								email: (e.target as HTMLInputElement).value,
							})}
					></wired-input>
				</div>
				<div class="form-group">
					<label>Course</label>
					<wired-combo
						data-component-id="SEL-2"
						data-component-label="Course Selection"
						@selected=${(e: CustomEvent) =>
							(this.formData = {
								...this.formData,
								course: e.detail.selected,
							})}
					>
						<wired-item value="CS">Computer Science</wired-item>
						<wired-item value="Math">Mathematics</wired-item>
						<wired-item value="Physics">Physics</wired-item>
					</wired-combo>
				</div>
				<div class="form-actions">
					<wired-button
						data-component-id="BTN-4"
						data-component-label="Save Student"
						@click=${this._saveStudent}
					>
						${isEdit ? "Update" : "Save"}
					</wired-button>
					<wired-button
						data-component-id="BTN-5"
						data-component-label="Cancel"
						@click=${this._closeForm}
					>
						Cancel
					</wired-button>
				</div>
			</wired-card>
		`;
	}

	private _openAddForm(): void {
		this.editingId = null;
		this.formData = { name: "", email: "", course: "CS" };
		this.showForm = true;
	}

	private _openEditForm(student: Student): void {
		this.editingId = student.id;
		this.formData = {
			name: student.name,
			email: student.email,
			course: student.course,
		};
		this.showForm = true;
	}

	private _closeForm(): void {
		this.showForm = false;
		this.editingId = null;
	}

	private _saveStudent(): void {
		if (!this.formData.name || !this.formData.email) return;

		if (this.editingId !== null) {
			this.students = this.students.map((s) =>
				s.id === this.editingId ? { ...s, ...this.formData } : s,
			);
		} else {
			this.students = [
				...this.students,
				{ id: this._nextId++, ...this.formData },
			];
		}
		this._closeForm();
	}

	private _deleteStudent(id: number): void {
		this.students = this.students.filter((s) => s.id !== id);
	}

	private _onSearch(e: Event): void {
		const query = (e.target as HTMLInputElement).value.toLowerCase();
		this.students = this.students.filter(
			(s) =>
				s.name.toLowerCase().includes(query) ||
				s.email.toLowerCase().includes(query),
		);
	}

	private _onFilterChange(e: CustomEvent): void {
		this.filterCourse = e.detail.selected || "";
	}

	static styles = css`
		.igu {
			font-family: system-ui, sans-serif;
			padding: 32px;
			max-width: 1100px;
			margin: 0 auto;
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 24px;
			flex-wrap: wrap;
			gap: 16px;
		}

		h1 {
			font-size: 24px;
			color: #111827;
			margin: 0;
		}

		.header-actions {
			display: flex;
			gap: 12px;
			align-items: center;
		}

		.table-card {
			display: block;
			padding: 0;
			overflow: hidden;
		}

		table {
			width: 100%;
			border-collapse: collapse;
			font-size: 14px;
		}

		th {
			text-align: left;
			padding: 12px 16px;
			border-bottom: 2px solid #e5e7eb;
			color: #6b7280;
			font-weight: 600;
			font-size: 12px;
			text-transform: uppercase;
			letter-spacing: 0.05em;
		}

		td {
			padding: 12px 16px;
			border-bottom: 1px solid #f3f4f6;
			color: #374151;
		}

		tr:hover {
			background: #f9fafb;
		}

		.actions {
			display: flex;
			gap: 6px;
		}

		.form-card {
			display: block;
			padding: 24px;
			max-width: 480px;
		}

		.form-card h2 {
			font-size: 18px;
			color: #111827;
			margin: 0 0 20px;
		}

		.form-group {
			margin-bottom: 16px;
		}

		.form-group label {
			display: block;
			margin-bottom: 4px;
			font-size: 14px;
			color: #6b7280;
		}

		.form-actions {
			display: flex;
			gap: 8px;
			margin-top: 20px;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		"students-interface": StudentsInterface;
	}
}
