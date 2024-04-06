export default defineEventHandler(async (event) => {
    const { id } = useQuery(event);
    let uri = '/products';

    if (id) {
      uri += `/${id}`
    }

    return $fetch(uri, { baseURL: 'https://fakestoreapi.com' });
})