import type { LitElement } from "lit";
import { registry } from "./component-registry.js";

// biome-ignore lint/suspicious/noExplicitAny: Lit mixin pattern requires any[]
type Constructor<T = object> = new (...args: any[]) => T;

export function tagComponent<T extends Constructor<LitElement>>(Base: T) {
	return class TaggedComponent extends Base {
		connectedCallback(): void {
			super.connectedCallback();

			const id = this.getAttribute("data-component-id");
			if (!id) return;

			const label = this.getAttribute("data-component-label") || undefined;
			const parentId = this.getAttribute("data-component-parent") || undefined;

			registry.register({
				id,
				element: this,
				path: parentId ? [parentId, id] : [id],
				label,
				parentId,
			});
		}

		disconnectedCallback(): void {
			super.disconnectedCallback();

			const id = this.getAttribute("data-component-id");
			if (id) registry.unregister(id);
		}
	};
}
