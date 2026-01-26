"use client";


function Footer(props) {
    return (
    <footer className="bg-black text-white py-6 text-center mt-10">
      <p>© {new Date().getFullYear()} My SaaS - All rights reserved.</p>
    </footer>
    );
}

export default Footer;