"use client";

import { registerDriver } from "@/app/lib/actions";

export default function Page() {
  //   const [username, setUsername] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [errors, setErrors] = useState<string[]>([]);
  //   const [success, setSuccess] = useState("");

  //   function validate() {
  //     const e: string[] = [];
  //     if (!username.trim()) e.push("Username is required.");
  //     if (!firstName.trim()) e.push("First name is required.");
  //     if (!lastName.trim()) e.push("Last name is required.");
  //     const phoneNormalized = phone.replace(/[^0-9+]/g, "");
  //     if (!phoneNormalized) e.push("Phone number is required.");
  //     else if (!/^\+?[0-9]{7,15}$/.test(phoneNormalized)) {
  //       e.push("Phone number looks invalid (use digits, optional leading +).");
  //     }
  //     return e;
  //   }

  //   function handleSubmit(e: React.FormEvent) {
  //     e.preventDefault();
  //     setSuccess("");
  //     const v = validate();
  //     setErrors(v);
  //     if (v.length === 0) {
  //       setSuccess("Registration submitted — thank you!");
  //       setUsername("");
  //       setFirstName("");
  //       setLastName("");
  //       setPhone("");
  //     }
  //   }
  return (
    <section className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white">Partner Registration</h1>

      <p className="mt-2 mb-4 text-white/90">
        Fill in the details to register as a partner.
      </p>

      {/* {errors.length > 0 && (
        <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">
          <strong className="block">
            There are problems with your submission:
          </strong>
          <ul className="list-disc list-inside mt-2">
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
          {success}
        </div>
      )} */}

      {}

      <form action={registerDriver} className="mt-4 grid gap-4">
        <label className="block">
          <div className="text-sm text-white mb-1">Username</div>
          <input
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            placeholder="your-username"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <label className="block">
          <div className="text-sm text-white mb-1">First name</div>
          <input
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            type="text"
            placeholder="First name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <label className="block">
          <div className="text-sm text-white mb-1">Last name</div>
          <input
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            type="text"
            placeholder="Last name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <label className="block">
          <div className="text-sm text-white mb-1">Phone number</div>
          <input
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            name="phone"
            type="tel"
            placeholder="+2547..."
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-800"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
