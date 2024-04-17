import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serverId = "service_2jrt0ek";
    const templateId = "template_f8g6yuk";
    const publicKey = "PGi63C9Qak0_YXTGw";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "My cv",
      message: message,
    };

    emailjs
      .send(serverId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
