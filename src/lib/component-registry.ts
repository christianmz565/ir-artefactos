import type { ComponentEntry } from "./types.js";

class ComponentRegistry {
	private components = new Map<string, ComponentEntry>();
	private initialized = false;
	private currentInterfaceId = "";

	setInterface(interfaceId: string): void {
		this.currentInterfaceId = interfaceId;
	}

	getInterfaceId(): string {
		return this.currentInterfaceId;
	}

	initialize(): void {
		if (this.initialized) return;
		this.initialized = true;

		const elements = this.queryAllDeep("[data-component-id]", document.body);
		for (const el of elements) {
			const id = el.getAttribute("data-component-id");
			if (!id) continue;
			const label = el.getAttribute("data-component-label") || undefined;
			const parentId = el.getAttribute("data-component-parent") || undefined;
			const path = parentId ? [...this.resolveParentPath(parentId), id] : [id];

			this.register({
				id,
				element: el as HTMLElement,
				path,
				label,
				parentId,
				interfaceId: this.currentInterfaceId,
			});
		}
	}

	private queryAllDeep(selector: string, root: ParentNode): Element[] {
		const results: Element[] = [...root.querySelectorAll(selector)];
		const all = root.querySelectorAll("*");
		for (const el of all) {
			const lightResults = el.querySelectorAll(selector);
			results.push(...lightResults);
			if (el.shadowRoot) {
				results.push(...this.queryAllDeep(selector, el.shadowRoot));
			}
		}
		return results;
	}

	register(entry: ComponentEntry): void {
		if (this.components.has(entry.id)) {
			console.warn(`Component "${entry.id}" is already registered.`);
			return;
		}
		this.components.set(entry.id, entry);
	}

	get(id: string): ComponentEntry | undefined {
		return this.components.get(id);
	}

	getByPath(path: string[]): HTMLElement | null {
		if (this.components.size === 0) {
			this.initialized = false;
			this.initialize();
		}

		let current: ParentNode = document.body;

		for (const segment of path) {
			const el = this.querySelectorDeep(
				`[data-component-id="${segment}"]`,
				current,
			);
			if (!el) return null;
			current = el;
		}

		return current as HTMLElement;
	}

	private querySelectorDeep(
		selector: string,
		root: ParentNode,
	): Element | null {
		let el = root.querySelector(selector);
		if (el) return el;

		const hosts =
			root === document.body
				? root.querySelectorAll("*")
				: (root as Element).querySelectorAll("*");
		for (const host of hosts) {
			el = host.querySelector(selector);
			if (el) return el;
			if (host.shadowRoot) {
				el = this.querySelectorDeep(selector, host.shadowRoot);
				if (el) return el;
			}
		}
		return null;
	}

	getAll(): ComponentEntry[] {
		return Array.from(this.components.values());
	}

	getByInterface(interfaceId: string): ComponentEntry[] {
		return this.getAll().filter((c) => c.interfaceId === interfaceId);
	}

	getCurrentPageComponents(): ComponentEntry[] {
		if (this.components.size === 0) {
			this.initialized = false;
			this.initialize();
		}
		if (!this.currentInterfaceId) return this.getAll();
		return this.getByInterface(this.currentInterfaceId);
	}

	unregister(id: string): void {
		this.components.delete(id);
	}

	clear(): void {
		this.components.clear();
		this.initialized = false;
		this.currentInterfaceId = "";
	}

	private resolveParentPath(parentId: string): string[] {
		const parent = this.components.get(parentId);
		return parent ? [...parent.path] : [parentId];
	}
}

export const registry = new ComponentRegistry();
