  const text = `[{"id": 1, "method": "GET", "url": "/users", "status": 200},
  {"id": 2, "method": "POST", "url": "/users", "status": 201},
  {"id": 3, "method": "FETCH", "url": "/orders", "status": 200},
  {"id": 4, "method": "PUT", "url": "/users/1", "status": 200},
  {"id": 5, "method": "DELETE", "url": "/users/1", "status": 204},
  {"id": 6, "method": "GET", "url": "missing-slash", "status": 200},
  {"id": 7, "method": "GET", "url": "/products", "status": 200},
  {"id": 8, "method": "POST", "url": "/login", "status": 401},
  {"id": 9, "method": "PATCH", "url": "/settings", "status": "ok"},
  {"id": 10, "method": "GET", "url": "/health", "status": 200}]`

  const VALID_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

function validateRequest(req: any): void {
  if (typeof req.id !== 'number') {
    throw new Error("Property 'id' must be a number");
  }

  if (!VALID_METHODS.includes(req.method)) {
    throw new Error(`Invalid method '${req.method}'`);
  }

  if (typeof req.url !== 'string') {
    throw new Error(`Invalid url '${req.url}'`);
  }

  if (typeof req.status !== 'number') {
    throw new Error(`Invalid status '${req.status}'`);
  }
}
try {
const requests = JSON.parse(text);

for (const request of requests){
    try{
    validateRequest(request)
    console.log(`Request ${request.id} is valid`)
    } catch (error : any) {
        console.log(`Request ${request.id} is invalid because of error: ${error.message}`)
    }
}
} catch (err:any){
    console.log(err.message)
}