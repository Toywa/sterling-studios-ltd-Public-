export default function Footer(){
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-500">
        <div>
          <div className="font-semibold text-sterlingNavy">Sterling Studios Ltd</div>
          <div>Pinentree Plaza, Kaburu Dr, Ngong Rd, Nairobi</div>
          <div className="mt-1">+254722114098 • info@sterlingstudios.com</div>
        </div>
        <div className="text-xs">
          <div>KES & USD • M-Pesa, Bank, Stripe, PayPal</div>
          <div>Invoices from Sterling Studios Ltd</div>
          <div className="mt-2">© {new Date().getFullYear()} Sterling Studios Ltd</div>
        </div>
      </div>
    </footer>
  )
}
