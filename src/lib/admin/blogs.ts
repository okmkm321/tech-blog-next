export async function getAllBlogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/blogs/`);
    const blogs = await res.json();

    return blogs.blogs;
}
