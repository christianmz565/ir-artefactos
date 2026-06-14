import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { registry } from "../lib/component-registry.js";
import type { ComponentEntry } from "../lib/types.js";
import { copyToClipboard, generateUrl } from "../lib/url-generator.js";

@customElement("admin-panel")
export class AdminPanel extends LitElement {
	@state()
	private open = false;

	@state()
	private components: ComponentEntry[] = [];

	@state()
	private copiedId: string | null = null;

	connectedCallback(): void {
		super.connectedCallback();
		window.addEventListener("keydown", this._onKeydown);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.removeEventListener("keydown", this._onKeydown);
	}

	private _onKeydown = (e: KeyboardEvent): void => {
		if (e.ctrlKey && e.shiftKey && e.key === "A") {
			e.preventDefault();
			this.open = !this.open;
			if (this.open) {
				this.components = registry.getCurrentPageComponents();
			}
		}
	};

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
		if (!this.open) return html``;

		const interfaceId = registry.getInterfaceId();

		return html`
			<div class="panel">
				<div class="header">
					<span class="title">
						${interfaceId ? `${interfaceId} — ` : ""}Components
						(${this.components.length})
					</span>
					<button class="close" @click=${() => (this.open = false)}>
						&times;
					</button>
				</div>
				<div class="list">
					${
						this.components.length === 0
							? html`<div class="empty">
								No components registered in this interface.
							</div>`
							: this.components.map(
									(c) => html`
									<div class="item">
										<div class="info">
											<span class="id">${c.id}</span>
											${
												c.label
													? html`<span class="label"
														>${c.label}</span
													>`
													: ""
											}
										</div>
										<div class="actions">
											<button @click=${() => this._copyUrl(c.id)}>
												${this.copiedId === c.id ? "Copied!" : "Copy URL"}
											</button>
											<button @click=${() => this._openTab(c.id)}>
												Open
											</button>
										</div>
									</div>
								`,
								)
					}
				</div>
				<div class="footer">Ctrl+Shift+A to toggle</div>
			</div>
		`;
	}

	static styles = css`
		:host {
			all: initial;
			position: fixed;
			bottom: 16px;
			right: 16px;
			z-index: 99998;
			font-family: system-ui, sans-serif;
			font-size: 14px;
		}

		.panel {
			width: 360px;
			max-height: 480px;
			background: white;
			border: 1px solid #e5e7eb;
			border-radius: 12px;
			box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 12px 16px;
			border-bottom: 1px solid #e5e7eb;
			background: #f9fafb;
		}

		.title {
			font-weight: 600;
			color: #111827;
		}

		.close {
			background: none;
			border: none;
			font-size: 20px;
			cursor: pointer;
			color: #6b7280;
			padding: 0 4px;
			line-height: 1;
		}

		.close:hover {
			color: #111827;
		}

		.list {
			overflow-y: auto;
			flex: 1;
		}

		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 16px;
			border-bottom: 1px solid #f3f4f6;
		}

		.item:last-child {
			border-bottom: none;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 2px;
			min-width: 0;
		}

		.id {
			font-weight: 500;
			color: #111827;
			font-family: ui-monospace, monospace;
			font-size: 13px;
		}

		.label {
			font-size: 12px;
			color: #6b7280;
		}

		.actions {
			display: flex;
			gap: 6px;
			flex-shrink: 0;
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

		.empty {
			padding: 24px 16px;
			text-align: center;
			color: #9ca3af;
		}

		.footer {
			padding: 8px 16px;
			text-align: center;
			font-size: 11px;
			color: #9ca3af;
			border-top: 1px solid #e5e7eb;
			background: #f9fafb;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		"admin-panel": AdminPanel;
	}
}
