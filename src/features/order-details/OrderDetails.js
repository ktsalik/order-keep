import './OrderDetails.scss';
import { useEffect, useState } from 'react';
import request from '../../request';
import Input from '../input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faPlus } from '@fortawesome/free-solid-svg-icons';

const OrderDetails = (props) => {
  const [customerName, setCustomerName] = useState('');
  const [customerSuggestions, setCustomerSuggestions] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (customer) {
      setCustomerName(customer.name || `${customer.firstname} ${customer.lastname}`);
    }
  }, [customer]);

  useEffect(() => {
    props.onChange({
      customer,
      products,
    });
  }, [customer, products]);

  useEffect(() => {
    if (props.data.customer) {
      if (!customer || props.data.customer.id !== customer.id) {
        setCustomer(props.data.customer);
      }
    } else {
      setCustomer('');
    }

    if (JSON.stringify(props.data.products) !== JSON.stringify(products)) {
      setProducts(props.data.products);
    }
  }, [props.data]);

  const searchCustomer = (searchQuery) => {
    request.get(`quick-search/${searchQuery}`).then((response) => {
      let data = response.data;

      setCustomerSuggestions(data);
    });
  };

  const selectCustomer = (customer) => {
    setCustomer(customer);
    setCustomerSuggestions([]);
  };

  const addProduct = () => {
    const p = products.slice();
    p.push({
      title: '',
      description: '',
      quantity: '',
      price: '',
    });
    setProducts(p);
  };

  const onCustomerInputChange = (e) => {
    const val = e.target.value;
    setCustomerName(val);

    if (val.length > 2) {
      searchCustomer(val);
    } else {
      setCustomerSuggestions([]);
    }
  };

  const onProductDescriptionChange = (e, i) => {
    const p = products.slice();
    p[i].description = e.target.value;
    setProducts(p);
  };

  const onProductQuantityChange = (e, i) => {
    const p = products.slice();
    p[i].quantity = e.target.value;
    setProducts(p);
  };

  const onProductPriceChange = (e, i) => {
    const p = products.slice();
    p[i].price = e.target.value;
    setProducts(p);
  };

  return (
    <div className="OrderDetails">
      <div className="fields animate__animated animate__fadeIn">
        <div className={`customer-input ${customerSuggestions.length > 0 ? 'open' : ''}`}>
          <input
            type="text"
            placeholder="Customer"
            value={customerName}
            onChange={onCustomerInputChange}
          />

          <div className="suggestions">
            {
              customerSuggestions.map((customer, i) => {
                return (
                  <div
                    key={i}
                    className="suggestions__item"
                    onClick={selectCustomer.bind(this, customer)}
                  >
                    {customer.name}
                  </div>
                );
              })
            }
          </div>
        </div>
          
        <div className="products">
          {
            products.map((product, i) => {
              return (
                <div
                  key={i}
                  className="products__item"
                >
                  <Input
                    className="title-input"
                    value={product.description}
                    onChange={(e) => onProductDescriptionChange(e, i)}
                    placeholder="Product Description"
                  />

                  <Input
                    className="quantity-input"
                    value={product.quantity}
                    onChange={(e) => onProductQuantityChange(e, i)}
                    placeholder="Product Quantity"
                  />

                  <Input
                    className="price-input"
                    value={product.price}
                    onChange={(e) => onProductPriceChange(e, i)}
                    placeholder="Product Price"
                  />

                  <button
                    className="btn-remove-product"
                    onClick={() => {
                      const p = products.slice();
                      p.splice(i, 1);
                      setProducts(p);
                    }}
                  >
                    <FontAwesomeIcon icon={faEraser} size="lg" />
                  </button>
                </div>
              );
            })
          }
        </div>

        <button
          className="btn-add-product"
          onClick={addProduct}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Product</span>
        </button>

      </div>
    </div>
  );
}

export default OrderDetails;
