// app/contact/page.tsx (Next.js App Router)
export default function ContactPage() {
    return (
      <div>
        <h1>Contact Us</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label><br />
          <label>
            Email:
            <input type="email" name="email" required />
          </label><br />
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label><br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }