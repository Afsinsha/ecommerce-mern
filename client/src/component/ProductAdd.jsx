import "./ProductAdd.css";

function ProductAdd() {
  return (
    <div className="add-product">
      <div className="form-container">
        <h1>Add Product</h1>

        <form>
          <input
            type="text"
            placeholder="Product Name"
          />

          <input
            type="number"
            placeholder="Price"
          />

          <input
            type="text"
            placeholder="Category"
          />

          <input
            type="text"
            placeholder="Image URL"
          />

          <textarea
            placeholder="Product Description"
            rows="4"
          ></textarea>

          <button type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;