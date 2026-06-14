import type { ComponentEntry } from "./types.js";

class ComponentRegistry {
	private components = new Map<string, ComponentEntry>();
	private initialized = false;

	initialize(): void {
		if (this.initialized) return;
		this.initialized = true;

		const elements = document.body.querySelectorAll("[data-component-id]");
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
			});
		}
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
		let current: ParentNode = document.body;

		for (const segment of path) {
			const el = current.querySelector(
				`[data-component-id="${segment}"]`,
			) as HTMLElement | null;
			if (!el) return null;
			current = el;
		}

		return current as HTMLElement;
	}

	getAll(): ComponentEntry[] {
		return Array.from(this.components.values());
	}

	unregister(id: string): void {
		this.components.delete(id);
	}

	clear(): void {
		this.components.clear();
		this.initialized = false;
	}

	private resolveParentPath(parentId: string): string[] {
		const parent = this.components.get(parentId);
		return parent ? [...parent.path] : [parentId];
	}
}

export const registry = new ComponentRegistry();
