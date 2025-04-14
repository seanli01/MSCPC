// app/contact/page.tsx (Next.js App Router)
export default function ContactPage() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <h1>Contact Us</h1>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
          <label style={{ width: '100%', marginBottom: '10px' }}>
            Name:
            <input type="text" name="name" required style={{ width: '100%' }} />
          </label>
          <label style={{ width: '100%', marginBottom: '10px' }}>
            Email:
            <input type="email" name="email" required style={{ width: '100%' }} />
          </label>
          <label style={{ width: '100%', marginBottom: '10px' }}>
            Message:
            <textarea name="message" required style={{ width: '100%' }}></textarea>
          </label>
          <button type="submit" style={{ marginTop: '10px' }}>Send</button>
        </form>
      </div>
    );
}