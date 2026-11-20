export async function getTasks(signal) {
    const res = await fetch("/tasks.json", { signal });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    return res.json();
}