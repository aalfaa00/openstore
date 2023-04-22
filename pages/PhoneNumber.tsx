import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import stylesPhone from "../styles/PhoneNumberForm.module.css";


const PhoneNumber = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePhoneNumberChange = (event) => {
    let newPhoneNumber = event.target.value.replace(/\D/g, '');

    if (newPhoneNumber.length > 9) {
      newPhoneNumber = newPhoneNumber.substring(0, 9);
    }

    const formattedNumber = [];

    for (let i = 0; i < newPhoneNumber.length; i++) {
      if (i === 0) {
        formattedNumber.push('(');
      } else if (i === 2) {
        formattedNumber.push(') ');
      } else if (i === 5) {
        formattedNumber.push('-');
      } else if (i === 7) {
        formattedNumber.push('-');
      }
      formattedNumber.push(newPhoneNumber[i]);
    }

    setPhoneNumber(formattedNumber.join(''));
    setIsValid(newPhoneNumber.match(/^\d{9}$/) !== null);
  };

  const [showModal, setShowModal] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`Phone number submitted: ${phoneNumber.replace(/[\(\)\-\s]/g, '')}`);
    await router.push('/Verification');

  };

  return (
    <>
        <div className={stylesPhone.container}>
            <form className={stylesPhone.form} onSubmit={handleSubmit}>
              <div className={stylesPhone.labelContainer}>
                <label className={stylesPhone.label} htmlFor="phoneNumber">
                  Telefon raqam:
                </label>
              </div>
              <div className={stylesPhone.inputContainer}>
                <input
                  className={`${stylesPhone.input} ${isValid ? stylesPhone.valid : stylesPhone.invalid}`}
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Telefon raqam"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <button className={stylesPhone.button} type="submit" disabled={!isValid}>
                  Yuborish
                </button>
              </div>
              <div className={stylesPhone.noteContainer}>
                <p className={stylesPhone.note}>
                  Telefon raqam 9 xonali sondan iborat bo'lishi shart.
                </p>
              </div>
            </form>
        </div>
    </>
  );
}


export default PhoneNumber;
