import { Box, Button, Typography } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <section className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-sm sm:p-10">
        <Typography component="h1" variant="h3" gutterBottom>
          Venue Booking
        </Typography>
        <Box component="form" className="mt-8 grid gap-8" noValidate>
          <DateReserve />
          <Button name="Book Venue" type="submit" variant="contained">
            Book Venue
          </Button>
        </Box>
      </section>
    </main>
  );
}
