import "wired-elements/lib/wired-input.js";
import "wired-elements/lib/wired-button.js";
import "wired-elements/lib/wired-combo.js";
import "wired-elements/lib/wired-item.js";
import "wired-elements/lib/wired-card.js";

import "./index.js";
import "../components/admin-panel.js";

import { registry } from "./component-registry.js";

export function initInterface(interfaceId: string): void {
	registry.setInterface(interfaceId);
	registry.initialize();
}
