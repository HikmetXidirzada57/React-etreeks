import { Grid, GridItem, TableContainer } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ClearCart, RemoveFromCart } from "../Redux/Actions/CartActions";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems)
  return (
    <div className="container">
      {cartItems.length > 0 ? (
        <div className="row">
          <div className="col-lg-8">
            <Grid item xs={8}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Sub Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    
                    <tr key={item.id}>
                      <td className="col-lg-4">
                        <img
                          className="img-fluid"
                          src={item.photoUrl}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {item.discount ? (
                          <>
                            <span>{item.price - item.discount}Azn</span>
                          </>
                        ) : (
                          <del>{item.price}Azn</del>
                        )}
                      </td>
                      <td>{((
                          item.discount>0 ? item.price:item.price-item.discount
                      )*item.quantity).toFixed(2)}</td>
                      
                      <td onClick={() => dispatch(RemoveFromCart(item.id))}>
                        <DeleteIcon sx={{ color: "red" }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
                
              </table>
            </Grid>
          </div>
          <div className="col-lg-4">
            <Grid item xs={4}>
              <div className="text-center card p-5">
                <h5>
                  Total{" "}
                  {cartItems.reduce(
                    (total, item) =>
                      total +
                      (item.discount > 0 ? item.price : item.price) *
                        item.quantity,0)}(azn)
                </h5>
                <button onClick={()=>dispatch(ClearCart())} className="btn my-3 btn-outline-danger">
                  Clear Cart
                </button>
                <button  className="btn btn-outline-success"> Purchase</button>
              </div>
            </Grid>
          </div>
        </div>
      ) : (
        <p className="alert alert-danger">Senin cartin isdemir</p>
      )}
    </div>
  );
};

export default Cart;
