import React, { useContext, useState } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'
import PaystackPop from '@paystack/inline-js'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const PlaceOrder = () => {
    const {getTotalCartAmount, token, food_list, cartItems, url, setCartItems,currency,deliveryCharge}=useContext(StoreContext)
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }
    
    // const placeOrder = async (e) => {
    //     e.preventDefault()
    //     let orderItems = [];
    //     food_list.map(((item) => {
    //         if (cartItems[item._id] > 0) {
    //             let itemInfo = item;
    //             itemInfo["quantity"] = cartItems[item._id];
    //             orderItems.push(itemInfo)
    //         }
    //     }))
    //     let orderData = {
    //         address: data,
    //         items: orderItems,
    //         amount: getTotalCartAmount() + deliveryCharge,
    //     }
    //     // const paywithpaystack = async (e) => {
    //         // e.preventDefault();
    //         const paystack = new PaystackPop();
    //         paystack.newTransaction({
    //             key: 'pk_test_0aa93dd968daab8059b137e8421dc7fcc054bd4a',
    //             amount: getTotalCartAmount() * 100,
    //             onSuccess: async (transaction) => {
    //                 // Prepare order data
    //                 let orderItems = [];
    //                 food_list.forEach((item) => {
    //                     if (cartItems[item._id] > 0) {
    //                         let itemInfo = { ...item, quantity: cartItems[item._id] };
    //                         orderItems.push(itemInfo);
    //                     }
    //                 });
        
    //                 orderData = {
    //                     address: data,
    //                     items: orderItems,
    //                     amount: getTotalCartAmount() + deliveryCharge,
    //                     paymentReference: transaction.reference, // Include Paystack reference
    //                 };
        
    //                 // Send order to the backend
    //                 try {
    //                     const response = await axios.post(url + "/api/order/place", orderData, {
    //                         headers: { token },
    //                     });
        
    //                     if (response.data.success) {
    //                         alert("Payment Successful! Order Placed.");
    //                         setCartItems({}); // Clear cart
    //                     } else {
    //                         alert("Order placement failed.");
    //                     }
    //                 } catch (error) {
    //                     console.error("Error placing order:", error);
    //                     alert("An error occurred.");
    //                 }
    //             },
    //             onCancel: () => {
    //                 alert("You canceled the transaction.");
    //             },
    //         });
    //     // };
        
    //     // if (payment === "stripe") {
    //     //     let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    //     //     if (response.data.success) {
    //     //         const { session_url } = response.data;
    //     //         window.location.replace(session_url);
    //     //     }
    //     //     else {
    //     //         toast.error("Something Went Wrong")
    //     //     }
    //     // }
    //     // else{
    //     //     let response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
    //     //     if (response.data.success) {
    //     //         navigate("/myorders")
    //     //         toast.success(response.data.message)
    //     //         setCartItems({});
    //     //     }
    //     //     else {
    //     //         toast.error("Something Went Wrong")
    //     //     }
    //     // }

    // }

    const isValidForm = () => {
        for (let key in data) {
          if (!data[key]) {
            alert(`Please fill in the ${key} field.`);
            return false;
          }
        }
        return true;
      }

    // const placeOrder = async (e) => {
    //     e.preventDefault();
      
    //     if (!isValidForm()) return;
      
    //     if (getTotalCartAmount() === 0) {
    //       alert("Your cart is empty.");
    //       return;
    //     }
      
    //     let orderItems = food_list
    //       .filter((item) => cartItems[item._id] > 0)
    //       .map((item) => ({
    //         ...item,
    //         quantity: cartItems[item._id],
    //       }));
      
    //     let orderData = {
    //       address: data,
    //       items: orderItems,
    //       amount: getTotalCartAmount() + deliveryCharge,
    //     };
      
    //     const paystack = new PaystackPop();
    //     paystack.newTransaction({
    //       key: 'pk_test_0aa93dd968daab8059b137e8421dc7fcc054bd4a',
    //       amount: getTotalCartAmount() * 100,
    //       email: data.email, // Ensure this is properly validated
    //       currency: 'ZAR',
    //       onSuccess: async (transaction) => {
    //         try {
    //           console.log("Transaction successful:", transaction); // Debugging log
    //           orderData.paymentReference = transaction.reference;
          
    //           console.log("Order data being sent to backend:", orderData); // Debugging log
    //           const response = await axios.post(`${url}/api/order/place`, orderData, {
    //             headers: { token },
    //           });
          
    //           console.log("Response from backend:", response.data); // Debugging log
          
    //           if (response.data.success) {
    //             alert("Payment Successful! Order Placed.");
    //             setCartItems({});
    //             navigate("/myorders");
    //           } else {
    //             alert("Order placement failed.");
    //           }
    //         } catch (error) {
    //           console.error("Error placing order:", error.response?.data || error.message);
    //           alert("An error occurred while placing your order. Please try again.");
    //         }
    //       },
          


    //     //   onSuccess: async (transaction) => {
    //     //     try {
    //     //       orderData.paymentReference = transaction.reference;
      
    //     //       const response = await axios.post(url + "/api/order/place", orderData, {
    //     //         headers: { token },
    //     //       });
      
    //     //       if (response.data.success) {
    //     //         alert("Payment Successful! Order Placed.");
    //     //         setCartItems({});
    //     //         navigate("/myorders");
    //     //       } else {
    //     //         alert("Order placement failed.");
    //     //       }
    //     //     } catch (error) {
    //     //       console.error("Error placing order:", error);
    //     //       alert("An error occurred.");
    //     //     }
    //     //   },
          
        
    //     onCancel: () => {
    //         alert("You canceled the transaction.");
    //       },
    //     });
    //   };
      
    //   <button onClick={placeOrder} type="button">
    //     PROCEED TO PAYMENT
    //   </button>
    const placeOrder = async (e) => {
        e.preventDefault();
        
        if (!isValidForm()) return;
        
        if (getTotalCartAmount() === 0) {
            alert("Your cart is empty.");
            return;
        }
        
        let orderItems = food_list
            .filter((item) => cartItems[item._id] > 0)
            .map((item) => ({
                ...item,
                quantity: cartItems[item._id],
            }));
        
        let orderData = {
            userId: token, // Make sure you have the userId from your context
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + deliveryCharge,
        };
        
        try {
            const paystack = new PaystackPop();
            paystack.newTransaction({
                key: 'pk_test_0aa93dd968daab8059b137e8421dc7fcc054bd4a',
                amount: getTotalCartAmount() * 100,
                email: data.email,
                currency: 'ZAR',
                onSuccess: async (transaction) => {
                    try {
                        orderData.paymentReference = transaction.reference;
                        
                        const response = await axios.post(`${url}/api/order/place`, orderData, {
                            headers: { 
                                'Content-Type': 'application/json',
                                token 
                            }
                        });
                        
                        if (response.data.success) {
                            alert("Payment Successful! Order Placed.");
                            setCartItems({});
                            navigate("/myorders");
                        } else {
                            throw new Error(response.data.message || "Order placement failed");
                        }
                    } catch (error) {
                        console.error("Error placing order:", error);
                        alert(error.message || "An error occurred while placing your order");
                    }
                },
                onCancel: () => {
                    alert("Transaction cancelled");
                }
            });
        } catch (error) {
            console.error("Paystack error:", error);
            alert("Payment initialization failed. Please try again.");
        }
    };
      
    
    








  return (
    <form  className='placeOrder'>
        <div className="placeOrderLeft">
                <p className='title'>Delivery Info</p>
                <div className="multiFields">
                    <input 
                        type="text" 
                        name="firstName"
                        value={data.firstName}
                        onChange={onChangeHandler}
                        placeholder='First name'
                        required
                    />
                    <input 
                        type="text"
                        name="lastName"
                        value={data.lastName}
                        onChange={onChangeHandler}
                        placeholder='Last name'
                        required
                    />
                </div>
                <input 
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    placeholder='Email address'
                    required
                />
                <input 
                    type="text"
                    name="street"
                    value={data.street}
                    onChange={onChangeHandler}
                    placeholder='Street'
                    required
                />
                <div className="multiFields">
                    <input 
                        type="text"
                        name="city"
                        value={data.city}
                        onChange={onChangeHandler}
                        placeholder='City'
                        required
                    />
                    <input 
                        type="text"
                        name="state"
                        value={data.state}
                        onChange={onChangeHandler}
                        placeholder='State'
                        required
                    />
                </div>
                <div className="multiFields">
                    <input 
                        type="text"
                        name="zipcode"
                        value={data.zipcode}
                        onChange={onChangeHandler}
                        placeholder='Zip code'
                        required
                    />
                    <input 
                        type="text"
                        name="country"
                        value={data.country}
                        onChange={onChangeHandler}
                        placeholder='Country'
                        required
                    />
                </div>
                <input 
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={onChangeHandler}
                    placeholder='Phone'
                    required
                />
            </div>
            <div className="placeOrderRight">
                <div className="cartTotal">
                    <h2>Cart Totals</h2>
                    <div className="cartTotalDetails">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartTotalDetails">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
                    </div>
                    <hr />
                    <div className="cartTotalDetails">
                        <b>Total</b>
                        <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
                    </div>
                    <button onClick={placeOrder} type='button'>
                        PROCEED TO PAYMENT
                    </button>
                </div>
            </div>
    </form>
  )
}

export default PlaceOrder