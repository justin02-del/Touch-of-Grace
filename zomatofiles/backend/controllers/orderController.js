import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

//config variables
const currency = "usd";
const deliveryCharge = 5;
const frontend_URL = 'http://localhost:5173';

// Placing User Order for Frontend using stripe
// const placeOrder = async (req, res) => {

//     const placeOrder = async (req, res) => {
//     try {
//         // Verify that we have all required data
//         const { userId, items, amount, address, paymentReference } = req.body;
        
//         if (!userId || !items || !amount || !address || !paymentReference) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: "Missing required order information" 
//             });
//         }

//         // Create new order with Paystack reference
//         const newOrder = new orderModel({
//             userId,
//             items,
//             amount,
//             address,
//             payment: true, // Since Paystack payment is already completed
//             paymentReference,
//             status: 'pending' // Initial order status
//         });

//         await newOrder.save();

//         // Clear user's cart after successful order
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ 
//             success: true, 
//             message: "Order placed successfully",
//             orderId: newOrder._id 
//         });

//     } catch (error) {
//         console.error("Order placement error:", error);
//         res.status(500).json({ 
//             success: false, 
//             message: "Error placing order",
//             error: error.message 
//         });
//     }
// }
// }


const placeOrder = async (req, res) => {
    try {
        // Verify that we have all required data
        const { userId, items, amount, address, paymentReference } = req.body;
        
        if (!userId || !items || !amount || !address || !paymentReference) {
            return res.status(400).json({ 
                success: false, 
                message: "Missing required order information" 
            });
        }

        // Create new order with Paystack reference
        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address,
            payment: true, // Since Paystack payment is already completed
            paymentReference,
            status: 'pending' // Initial order status
        });

        await newOrder.save();

        // Clear user's cart after successful order
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ 
            success: true, 
            message: "Order placed successfully",
            orderId: newOrder._id 
        });

    } catch (error) {
        console.error("Order placement error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error placing order",
            error: error.message 
        });
    }
}

// Placing User Order for Frontend using stripe
const placeOrderCod = async (req, res) => {

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Listing Order for Admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// User Orders for Frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const updateStatus = async (req, res) => {
    console.log(req.body);
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        res.json({ success: false, message: "Error" })
    }

}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" })
        }
        else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({ success: false, message: "Not Paid" })
        }
    } catch (error) {
        res.json({ success: false, message: "Not  Verified" })
    }

}

export { placeOrder, listOrders, userOrders, updateStatus, verifyOrder, placeOrderCod }