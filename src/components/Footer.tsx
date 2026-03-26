const Footer = () => {
  return (
    <footer className="bg-ohio-grey-dark py-12 border-t border-primary-foreground/5">
      <div className="container text-center">
        <p className="font-display italic text-primary-foreground/50 text-xl mb-2">
          Rooted in Ohio. Built to Grow Your Business.
        </p>
        <div className="w-16 h-0.5 bg-primary/40 mx-auto my-4" />
        <p className="text-primary-foreground/30 text-sm">
          © {new Date().getFullYear()} Buckeye Biz Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
