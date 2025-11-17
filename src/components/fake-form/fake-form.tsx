export function FakeForm() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          defaultValue="John"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          defaultValue="Doe"
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        defaultValue="john.doe@example.com"
        className="w-full border rounded px-3 py-2"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        defaultValue="555-1234"
        className="w-full border rounded px-3 py-2"
        required
      />

      <h2 className="text-xl font-semibold mt-6">Shipping Address</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="address"
          placeholder="Address"
          defaultValue="123 Main St"
          className="w-full border rounded px-3 py-2"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            defaultValue="Metropolis"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP"
            defaultValue="12345"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            defaultValue="USA"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
      </div>
    </>
  );
}
