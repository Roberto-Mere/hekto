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

export async function fetchProductSlide(page) {
  const start = (page * 4) % 10;
  const end = start + 4;

  if (end > 10) {
    const res = await Promise.all([
      fetch(`http://localhost:5000/products/?_start=${start}&_end=${10}`),
      fetch(`http://localhost:5000/products/?_start=${0}&_end=${end - 10}`),
    ]);

    if (!res[0].ok || !res[1].ok) {
      const error = new Error('An error occurred fetching products');
      error.status = res.status;

      throw error;
    }

    const products = [...(await res[0].json()), ...(await res[1].json())];

    return products;
  } else {
    const res = await fetch(
      `http://localhost:5000/products/?_start=${start}&_end=${end}`,
    );

    if (!res.ok) {
      const error = new Error('An error occurred fetching products');
      error.status = res.status;

      throw error;
    }

    const products = await res.json();

    return products;
  }
}
