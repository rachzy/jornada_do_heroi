import api from "./api.json";

export async function GET() {
  return Response.json(api);
}