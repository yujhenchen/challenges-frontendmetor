const NewsletterSignUp = () => {
  return (
    <div className="flex h-full w-full flex-col bg-white font-outfit duration-500 hover:shadow-lg md:col-span-2 md:flex-row-reverse">
      <div className="bg-slate-400">image</div>
      <div className="flex flex-col bg-slate-200">
        <h1>stay updated container</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <label>Email address</label>
        <input />
        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
