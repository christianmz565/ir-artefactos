import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { registry } from "./component-registry.js";
import { parseComponentPath } from "./url-generator.js";

@customElement("component-viewer")
export class ComponentViewer extends LitElement {
	@property({ attribute: "component-id" })
	componentId = "";

	connectedCallback(): void {
		super.connectedCallback();

		if (!this.componentId) {
			const path = parseComponentPath(window.location.href);
			if (path.length > 0) {
				this.componentId = path.join("/");
			}
		}

		if (this.componentId) {
			requestAnimationFrame(() => this.showIsolated());
		}
	}

	private showIsolated(): void {
		const path = this.componentId.split("/").filter(Boolean);

		const target = registry.getByPath(path);
		if (!target) {
			console.warn(`Component "${this.componentId}" not found in registry.`);
			return;
		}

		let clone = target.cloneNode(true) as HTMLElement;

		if (target.tagName.toLowerCase() === "th") {
			const table = target.closest("table");
			if (table) {
				clone = table.cloneNode(true) as HTMLElement;
				const th = target as HTMLTableCellElement;
				const colIndex = th.cellIndex;
				
				const rows = clone.querySelectorAll("tr");
				rows.forEach((row) => {
					const cells = Array.from(row.children);
					cells.forEach((cell, index) => {
						if (index !== colIndex) {
							cell.remove();
						}
					});
				});
			}
		}

		const overlay = document.createElement("div");
		overlay.className = "component-viewer-overlay";
		overlay.attachShadow({ mode: "open" });
		const shadowRoot = overlay.shadowRoot;
		if (!shadowRoot) return;

		const rootNode = target.getRootNode();
		if (rootNode instanceof ShadowRoot) {
			shadowRoot.adoptedStyleSheets = [...rootNode.adoptedStyleSheets];
			const styleTags = rootNode.querySelectorAll("style");
			styleTags.forEach((style) => {
				shadowRoot.appendChild(style.cloneNode(true));
			});
		} else if (rootNode === document) {
			shadowRoot.adoptedStyleSheets = [...document.adoptedStyleSheets];
			const styleTags = document.querySelectorAll("style");
			styleTags.forEach((style) => {
				shadowRoot.appendChild(style.cloneNode(true));
			});
		}

		shadowRoot.innerHTML += `
			<style>
				:host {
					position: fixed;
					inset: 0;
					z-index: 99999;
					background: white;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				::slotted(.clone-wrapper) {
					padding: 48px;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.close-btn {
					position: absolute;
					top: 16px;
					right: 16px;
					width: 32px;
					height: 32px;
					border: none;
					background: #f3f4f6;
					border-radius: 50%;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 18px;
					color: #374151;
					z-index: 1;
					transition: background 0.15s;
				}
				.close-btn:hover {
					background: #e5e7eb;
				}
			</style>
			<slot></slot>
			<button class="close-btn" aria-label="Close viewer">&times;</button>
		`;

		const wrapper = document.createElement("div");
		wrapper.className = "clone-wrapper";
		wrapper.appendChild(clone);

		const slot = shadowRoot.querySelector("slot");
		if (slot) slot.replaceWith(wrapper);

		const closeBtn = shadowRoot.querySelector(".close-btn");
		if (closeBtn) {
			closeBtn.addEventListener("click", () => overlay.remove());
		}

		document.body.appendChild(overlay);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"component-viewer": ComponentViewer;
	}
}
