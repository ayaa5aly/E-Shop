import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Checkout</h3>

      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing Information */}
          <div className="border p-4 mb-6 rounded shadow">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`space-y-4 mt-4 ${billingToggle ? "block" : "hidden"}`}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Phone"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-4 mb-6 rounded shadow">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`space-y-4 mt-4 ${
                shippingToggle ? "block" : "hidden"
              }`}
            >
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-medium"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Your City"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="zip-code"
                  className="block text-gray-700 font-medium"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-4 mb-6 rounded shadow">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={`space-y-4 mt-4 ${paymentToggle ? "block" : "hidden"}`}
            >
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-gray-700 font-medium">
                  Cash on Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  id="dc"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                  className="mr-2"
                />
                <label htmlFor="dc" className="text-gray-700 font-medium">
                  Debit Card
                </label>
              </div>

              {paymentMethod === "dc" && (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="card-number"
                      className="block text-gray-700 font-medium"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      placeholder="Enter Card Number"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="card-holder"
                      className="block text-gray-700 font-medium"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      id="card-holder"
                      placeholder="Enter Card Holder Name"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="expiry"
                        className="block text-gray-700 font-medium"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>

                    <div className="w-1/2">
                      <label
                        htmlFor="cvv"
                        className="block text-gray-700 font-medium"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="CVV"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-gray-100 p-4 rounded shadow-md">
          {/* Summary Section */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
