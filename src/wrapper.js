import React from "react";
import Card1 from "./cart";
import { Card2, Card3, Card4 } from "./cart";

const Cartitem = () => {
    return (
        <div className="wrapperitems" style={{ display: "flex", justifyContent: 'center' }}>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </div>
    )
}
export default Cartitem;