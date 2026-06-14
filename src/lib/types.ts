export interface ComponentEntry {
	id: string;
	element: HTMLElement;
	path: string[];
	label?: string;
	parentId?: string;
	interfaceId: string;
}

export interface ViewerConfig {
	padding: number;
	backgroundColor: string;
	closeButtonColor: string;
	closeButtonSize: number;
}
