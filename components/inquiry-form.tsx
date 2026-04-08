export function InquiryForm() {
  return (
    <form className="card space-y-5" action="#" method="post">
      {/* TODO: connect form handling with Resend/Brevo endpoint. */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
        <input id="name" name="name" required className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
        <input id="email" type="email" name="email" required className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">Brand / Company</label>
        <input id="company" name="company" className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">Service needed</label>
        <select id="service" name="service" className="w-full rounded-xl border bg-white px-4 py-3 text-sm">
          <option>UGC Services</option>
          <option>Event Content Creation</option>
          <option>Wedding Content</option>
          <option>Hospitality Content</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium">Short project description</label>
        <textarea id="description" name="description" rows={5} className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium">Preferred timeline</label>
        <input id="timeline" name="timeline" placeholder="e.g. May 2026" className="w-full rounded-xl border bg-white px-4 py-3 text-sm" />
      </div>
      <button type="submit" className="rounded-full bg-foreground px-5 py-3 text-sm text-white hover:bg-neutral-800">
        Send inquiry
      </button>
    </form>
  );
}
