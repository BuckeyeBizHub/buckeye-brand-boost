const Footer = () => {
  return (
    <footer className="bg-ohio-grey-dark py-10">
      <div className="container text-center">
        <p className="font-display italic text-primary-foreground/60 text-lg">
          Rooted in Ohio. Built to Grow Your Business.
        </p>
        <p className="text-primary-foreground/40 text-sm mt-4">
          © {new Date().getFullYear()} Buckeye Biz Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
