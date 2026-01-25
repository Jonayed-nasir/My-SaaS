// app/dashboard/payment/page.js
"use client";

const plans = [
  { name: "Free", price: 0, features: ["Limited automation"] },
  { name: "Pro", price: 19, features: ["Full automation", "Unlimited comments"] },
  { name: "Business", price: 49, features: ["Multi-page support", "Premium logs"] },
];

export default function PaymentPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Billing & Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white shadow p-4 rounded-md">
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <p className="text-2xl font-semibold">${plan.price}/mo</p>
            <ul className="my-3 text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className="w-full bg-black text-white py-2 rounded-md">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
