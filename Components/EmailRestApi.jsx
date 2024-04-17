// import axios, { Axios } from "axios";
// import React from "react";
// import { useState } from "react";
// const EmailRestApi = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const serverId = "service_2jrt0ek";
//     const templateId = "template_f8g6yuk";
//     const publicKey = "PGi63C9Qak0_YXTGw";

//     const data = {
//       service_id: serverId,
//       template_id: templateId,
//       user_id: publicKey,
//       template_params: {
//         from_name: name,
//         from_email: email,
//         to_name: "My cv",
//         message: message,
//       },
//     };

//     try {
//       const res = await axios.post(
//         "https://api.emailjs.com/api/v1.0/email/send",
//         data
//       );
//       console.log(res.data);
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       console.error(error);
//     }

//     setInterval(() => {
//       if (message != message) {
//         document.querySelector(".theSend").innerHTML = "Meddelande skickat";
//       } else if (message === message) {
//         document.querySelector(".theSend").innerHTML =
//           "Meddelandet skickades inte";
//         setInterval(() => {
//           document.querySelector(".theSend").innerHTML = "";
//         }, 1500);
//       } else {
//         document.querySelector(".theSend").innerHTML = "";
//       }
//     }, 1500);
//   };
//   return (
//     <div className="theForm">
//       <form onSubmit={handleSubmit} className="emailForm">
//         <label>Username</label>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>E-mail</label>
//         <input
//           type="email"
//           placeholder="Your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Message</label>
//         <textarea
//           cols="40"
//           rows="10"
//           value={message}
//           placeholder="Här kontaktar du angånde..."
//           onChange={(e) => setMessage(e.target.value)}></textarea>
//         <button type="submit">Send Email</button>
//         <p className="theSend"></p>
//       </form>
//     </div>
//   );
// };

// export default EmailRestApi;

import axios from "axios";
import React, { useState } from "react";

const EmailRestApi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validera input
    if (!name || !email || !message) {
      //   setErrorMessage("Du behöver fylla i i alla fält");
      let needToFiled = document.querySelector(".youNeedToFieldAllInputs");
      needToFiled.innerHTML = "Du behöver fylla i alla fällt";
      let notSendBtn = document.querySelector(".sendBtn");
      notSendBtn.classList.add("errorBtn");
      let myIntervall = setInterval(() => {
        if (needToFiled.innerHTML === "") {
        } else {
          needToFiled.innerHTML = "";
          notSendBtn.classList.remove("errorBtn");

          clearInterval(myIntervall);
        }
      }, 2000);

      return;
    }

    const serverId = "service_2jrt0ek";
    const templateId = "template_f8g6yuk";
    const publicKey = "PGi63C9Qak0_YXTGw";

    const data = {
      service_id: serverId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "My cv",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);

      let messageSent = document.querySelector(".messageSent");
      let sendBtn = document.querySelector(".sendBtn");
      messageSent.innerHTML = "Meddelande skickat";
      messageSent.classList.add("goodMessage");
      setInterval(() => {
        if (messageSent === "") {
          // setSuccessMessage("Meddelandet skickat");
        } else {
          messageSent.innerHTML = "";

          sendBtn.classList.remove("sendGood");
        }
      }, 1500);

      sendBtn.classList.add("sendGood");

      setInterval(() => {
        setSuccessMessage("");
        sendBtn.classList.remove("sendGood");
      }, 1000);

      //   } else {
      // messageSent.innerHTML = "";
      //   }
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Misslyckades att skicka meddelantet");
    }
  };

  return (
    <div className="theForm">
      <h2>Kontakta mig här</h2>
      <form onSubmit={handleSubmit} className="emailForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Din e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          cols="40"
          rows="10"
          value={message}
          placeholder="Här kontaktar du angånde..."
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className="sendBtn" type="submit">
          Send Email
        </button>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {successMessage && <p className="successMessage">{successMessage}</p>}

        <p className="youNeedToFieldAllInputs"></p>
        <p className="messageSent"></p>
      </form>
    </div>
  );
};

export default EmailRestApi;
