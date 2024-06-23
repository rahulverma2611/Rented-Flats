import React, { useState } from "react";
import { Input, Modal } from "antd";
import axios from "axios";

const ContactModal = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // function onSubmit() {
  //   const formData = { name, email, phone };
  //   axios
  //     .post("http://localhost:3000/users", formData, {
  //       Headers: {
  //         "content-type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }
  function submit() {
    const filledData = { name, email, phone };
    axios
      .post("http://localhost:3000/users", filledData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((resp) => {
        console.log(resp);
      });
  }
  return (
    <Modal
      title="Contact the Owner"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <div className="flex flex-col gap-5">
        <Input
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="your phone no."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={submit}
          type="button"
          class="text-white w-[100%] py-3 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  "
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
