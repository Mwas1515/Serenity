import { useAuth } from "@/context/AuthContext";

export default function Admin() {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-display text-teal mb-2">
          Therapist Dashboard
        </h1>

        <p className="text-ink/70 mb-10">
          Welcome back, {currentUser.name || currentUser.email}
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl2 border border-sage-light p-6">
            <h2 className="text-lg font-semibold text-teal">
              Today's Appointments
            </h2>

            <p className="text-5xl font-bold mt-4 text-gold">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl2 border border-sage-light p-6">
            <h2 className="text-lg font-semibold text-teal">
              Upcoming Bookings
            </h2>

            <p className="text-5xl font-bold mt-4 text-gold">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl2 border border-sage-light p-6">
            <h2 className="text-lg font-semibold text-teal">
              Patients
            </h2>

            <p className="text-5xl font-bold mt-4 text-gold">
              0
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}