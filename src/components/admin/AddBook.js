import React, { useState } from 'react';

function AddBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publisher: '',
    description: '',
    publishDate: '',
    price: '',
    discount: '',
    coverImage: null,
    featured: false,
    category: '',
    stock: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (isNaN(formData.price)) newErrors.price = 'Price must be a number';
    if (!formData.category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Product Data:', formData);
      // Code to handle form submission, like sending data to a backend
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.header}>Add Product</h2>

      <div style={styles.inputGroup}>
        <label>Book Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.title && <span style={styles.error}>{errors.title}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.author && <span style={styles.error}>{errors.author}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Publisher:</label>
        <input
          type="text"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Publish Date:</label>
        <input
          type="date"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.price && <span style={styles.error}>{errors.price}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Discount:</label>
        <input
          type="text"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Cover Image:</label>
        <input
          type="file"
          name="coverImage"
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.checkboxGroup}>
        <label>
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            style={styles.checkbox}
          />
          Featured Product
        </label>
      </div>

      <div style={styles.inputGroup}>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select a category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="comics">Comics</option>
          <option value="self-help">Self-help</option>
        </select>
        {errors.category && <span style={styles.error}>{errors.category}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Stock:</label>
        <input
          type="text"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>Add Product</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '80px',
  },
  checkboxGroup: {
    marginBottom: '15px',
  },
  checkbox: {
    marginRight: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    display: 'block',
    marginTop: '5px',
    color: 'red',
    fontSize: '14px',
  },
};

export default AddBook;
