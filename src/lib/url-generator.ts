function getPublicUrl(): string {
	const envUrl = import.meta.env.VITE_PUBLIC_URL;
	if (envUrl) return envUrl.replace(/\/+$/, "");
	return window.location.origin;
}

export function generateUrl(componentId: string): string {
	const base = getPublicUrl();
	const url = new URL(base);
	url.pathname = window.location.pathname;
	url.searchParams.set("component", componentId);
	return url.toString();
}

export function parseComponentPath(url: string | URL): string[] {
	const u = typeof url === "string" ? new URL(url) : url;
	const param = u.searchParams.get("component");
	if (!param) return [];
	return param.split("/").filter(Boolean);
}

export async function copyToClipboard(componentId: string): Promise<boolean> {
	const url = generateUrl(componentId);
	try {
		await navigator.clipboard.writeText(url);
		return true;
	} catch {
		console.error("Failed to copy URL to clipboard");
		return false;
	}
}
