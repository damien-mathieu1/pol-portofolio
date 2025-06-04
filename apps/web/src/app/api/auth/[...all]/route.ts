// Removed auth API route to disable authentication
export const POST = async () => {
  return new Response(null, { status: 404 });
};
export const GET = async () => {
  return new Response(null, { status: 404 });
};
