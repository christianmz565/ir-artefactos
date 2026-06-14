import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { registry } from "../lib/component-registry.js";
import type { ComponentEntry } from "../lib/types.js";
import { copyToClipboard, generateUrl } from "../lib/url-generator.js";

@customElement("admin-page")
export class AdminPage extends LitElement {
	@state()
	private components: ComponentEntry[] = [];

	@state()
	private copiedId: string | null = null;

	connectedCallback(): void {
		super.connectedCallback();
		registry.initialize();
		this.components = registry.getAll();
	}

	private async _copyUrl(id: string): Promise<void> {
		const ok = await copyToClipboard(id);
		if (ok) {
			this.copiedId = id;
			setTimeout(() => (this.copiedId = null), 2000);
		}
	}

	private _openTab(id: string): void {
		const url = generateUrl(id);
		window.open(url, "_blank");
	}

	render() {
		return html`
			<div class="page">
				<h1>Tagged Components</h1>
				${
					this.components.length === 0
						? html`<p class="empty">No components registered. Add data-component-id attributes to your elements.</p>`
						: html`
							<table>
								<thead>
									<tr>
										<th>ID</th>
										<th>Label</th>
										<th>Path</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									${this.components.map(
										(c) => html`
											<tr>
												<td class="id">${c.id}</td>
												<td>${c.label || "—"}</td>
												<td class="path">${c.path.join(" > ")}</td>
												<td class="actions">
													<button @click=${() => this._copyUrl(c.id)}>
														${this.copiedId === c.id ? "Copied!" : "Copy URL"}
													</button>
													<button @click=${() => this._openTab(c.id)}>
														Open
													</button>
												</td>
											</tr>
										`,
									)}
								</tbody>
							</table>
					`
				}
			</div>
		`;
	}

	static styles = css`
		:host {
			display: block;
			font-family: system-ui, sans-serif;
			padding: 40px;
			max-width: 960px;
			margin: 0 auto;
		}

		h1 {
			font-size: 24px;
			color: #111827;
			margin: 0 0 24px;
		}

		.empty {
			color: #6b7280;
		}

		table {
			width: 100%;
			border-collapse: collapse;
			font-size: 14px;
		}

		th {
			text-align: left;
			padding: 10px 12px;
			border-bottom: 2px solid #e5e7eb;
			color: #6b7280;
			font-weight: 600;
		}

		td {
			padding: 10px 12px;
			border-bottom: 1px solid #f3f4f6;
			color: #374151;
		}

		.id {
			font-weight: 500;
			color: #111827;
		}

		.path {
			font-family: ui-monospace, monospace;
			font-size: 12px;
			color: #6b7280;
		}

		.actions {
			display: flex;
			gap: 6px;
		}

		.actions button {
			padding: 4px 10px;
			border: 1px solid #e5e7eb;
			border-radius: 6px;
			background: white;
			cursor: pointer;
			font-size: 12px;
			color: #374151;
			transition: background 0.15s;
		}

		.actions button:hover {
			background: #f3f4f6;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		"admin-page": AdminPage;
	}
}
