import ReservationForm from "./ReservationForm";

export const metadata = {
    title: "Reserve a Table – Naans & Curries",
    description:
        "Book your table at Naans & Curries. Choose your preferred location, date, and time for an unforgettable Indian dining experience in Costa Rica.",
};

export default function ReservationPage() {
    return (
        <main className="min-h-screen bg-[#FFF7ED]">
            <ReservationForm />
        </main>
    );
}
