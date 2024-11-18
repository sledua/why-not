import React from "react";

const Footer = ({ contact, links }) => {
  return (
    <footer>
      <h2>Contact Us</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <h2>Links</h2>
      <ul>
        <li>{links.about}</li>
        <li>{links.whatWeDo}</li>
      </ul>
    </footer>
  );
};

export default Footer;
