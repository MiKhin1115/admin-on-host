import "dotenv/config";

export const handler = async () => {
  try {
    const apiBase = process.env.APPTUBE_API_BASE;
    const accessToken = process.env.APPTUBE_ACCESS_TOKEN;

    if (!apiBase) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "APPTUBE_API_BASE is missing" }),
      };
    }

    if (!accessToken) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "APPTUBE_ACCESS_TOKEN is missing" }),
      };
    }

    const res = await fetch(`${apiBase}/todos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-token": accessToken,
      },
    });

    const json = await res.json();

    const todos = Array.isArray(json?.result?.todos) ? json.result.todos : [];

    const today = new Date().toISOString().slice(0, 10);

    const stats = {
      pendingMerchantRequests: todos.length,
      totalOrdersToday: todos.filter((item: any) =>
        String(item.createdDate || "").startsWith(today)
      ).length,
      activeUsers: new Set(
        todos
          .map((item: any) => item["owner.name"] || item["createdBy.name"] || item.owner || item.createdBy)
          .filter(Boolean)
      ).size,
    };

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stats),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown server error",
      }),
    };
  }
};