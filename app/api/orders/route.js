let orders = [];

export async function POST(req) {
  const body = await req.json();

  const newOrder = {
    id: Date.now(),
    name: body.name,
    phone: body.phone
  };

  orders.push(newOrder);

  return Response.json({ success: true });
}

export async function GET() {
  return Response.json(orders);
}
