export async function GET(request: Request) {
    
    const data = {
        message: "Hello World"
    };
    return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
}
