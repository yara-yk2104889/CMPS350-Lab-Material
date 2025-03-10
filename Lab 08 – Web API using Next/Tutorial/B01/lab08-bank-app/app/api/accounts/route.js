export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const { type } = Object.fromEntries(searchParams.entries());
    return Response.json({ message: 'You called the GET', type });
}


// const person = {
//     name: 'John Doe',
//     age: 25,
//     address: {
//         street: '123 Main Street',
//         city: 'Springfield',
//         state: 'IL',
//         zip: '62701'
//     }
// }

// const { name, age } = person;