export async function fetchBlogs() {
  const res = await fetch('http://localhost:5000/blogs');

  if (!res.ok) {
    const error = new Error('An error occurred fetching blogs');
    error.status = res.status;

    throw error;
  }

  const blogs = await res.json();

  return blogs;
}
