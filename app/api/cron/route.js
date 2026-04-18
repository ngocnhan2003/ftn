// /api/keep-alive.ts
export default async function handler(req, res) {
  const response = await fetch(
    "https://lxdritisntmsmbuclkwt.supabase.co/rest/v1/rpc/keep_alive",
    {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      },
    }
  );

  const text = await response.text();

  res.status(200).json({
    status: response.status,
    body: text,
  });
}
