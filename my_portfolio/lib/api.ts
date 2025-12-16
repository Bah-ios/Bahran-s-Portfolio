export async function fetchProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await res.json();
  } catch (err) {
    console.error("Error loading projects:", err);
    return [];
  }
}
