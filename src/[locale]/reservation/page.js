import ReservationForm from "./ReservationForm";
import { Helmet } from 'react-helmet-async';

export default function ReservationPage() {
    return (
        <>
            <Helmet>
                <title>Reserve a Table – Naans & Curries</title>
                <meta name="description" content="Book your table at Naans & Curries. Choose your preferred location, date, and time for an unforgettable Indian dining experience in Costa Rica." />
            </Helmet>
            <main className="min-h-screen bg-[#FFF7ED]">
                <ReservationForm />
            </main>
        </>
    );
}

export const metadata = {
    title: "Reserve a Table – Naans & Curries",
    description:
        "Book your table at Naans & Curries. Choose your preferred location, date, and time for an unforgettable Indian dining experience in Costa Rica.",
};
