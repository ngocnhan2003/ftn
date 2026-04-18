// /api/keep-alive.ts
export default async function handler(req, res) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/keep_alive`,
    {
      method: "POST",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY}`,
      },
    }
  );

  const text = await response.text();

  res.status(200).json({
    status: response.status,
    body: text,
  });
}
