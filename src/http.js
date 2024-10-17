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
  const totalProducts = 10;
  const start = (page * 4) % totalProducts;
  const end = start + 4;

  if (end > totalProducts) {
    const res = await Promise.all([
      fetch(
        `http://localhost:5000/products/?_start=${start}&_end=${totalProducts}`,
      ),
      fetch(
        `http://localhost:5000/products/?_start=${0}&_end=${end - totalProducts}`,
      ),
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

export async function fetchCategoriesSlide(page) {
  const totalCategories = 7;
  const start = (page * 4) % totalCategories;
  const end = start + 4;

  if (end > totalCategories) {
    const res = await Promise.all([
      fetch(
        `http://localhost:5000/categories/?_start=${start}&_end=${totalCategories}`,
      ),
      fetch(
        `http://localhost:5000/categories/?_start=${0}&_end=${end - totalCategories}`,
      ),
    ]);

    if (!res[0].ok || !res[1].ok) {
      const error = new Error('An error occurred fetching categories');
      error.status = res.status;

      throw error;
    }

    const categories = [...(await res[0].json()), ...(await res[1].json())];

    return categories;
  } else {
    const res = await fetch(
      `http://localhost:5000/categories/?_start=${start}&_end=${end}`,
    );

    if (!res.ok) {
      const error = new Error('An error occurred fetching categories');
      error.status = res.status;

      throw error;
    }

    const categories = await res.json();

    return categories;
  }
}
