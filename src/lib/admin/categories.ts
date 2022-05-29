export async function getAllCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/categories/`)
    const resData = await res.json()

    return resData.categories
}
