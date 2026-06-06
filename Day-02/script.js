//Task1
const order = {
    orderId: "ORD101",
    itemName: "Laptop",
    price: 50000,
    isAvailable: true,
    userMembership: "Premium"
};

const processOrder = (order) => {
    if (!order.isAvailable) {
        return "Order Rejected: Item Out of Stock";
    }

    let finalPrice = order.price;

    if (order.userMembership === "Premium") {
        finalPrice = order.price * 0.8; // 20% discount
    } else if (order.userMembership === "Regular") {
        finalPrice = order.price * 0.9; // 10% discount
    }

    return `Order successful for ${order.itemName}. Total amount to pay is $${finalPrice}.`;
};

console.log(processOrder(order));


//Task2
const userSession = {
    username: "moon",
    isAuthenticated: true,
    profile: {
        age: 20,
        role: "Editor"
    }
};

const checkAccess = (userSession) => {
    if (!userSession.isAuthenticated) {
        return "Access Denied: Please log in first";
    }

    if (userSession.profile.role === "Admin") {
        return "Access Granted: Full administrative privileges.";
    } else if (userSession.profile.role === "Editor") {
        if (userSession.profile.age >= 18) {
            return "Access Granted: Editor dashboard.";
        } else {
            return "Access Denied: Editors must be 18+.";
        }
    } else if (userSession.profile.role === "Viewer") {
        return "Access Denied: Viewers cannot access this route.";
    }
};

console.log(checkAccess(userSession));