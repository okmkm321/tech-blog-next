export async function getAllTags() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tags/`)
    const resData = await res.json()

    return resData.tags
}
