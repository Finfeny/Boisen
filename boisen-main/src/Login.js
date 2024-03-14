import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import Cookies from 'js-cookie';

const LOGIN_API_URL = "https://boisen-api-882e3f974b75.herokuapp.com/login";

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const checkboxRef = useRef(null);

  const handleInputChange = useCallback((event) => {
    setCredentials(prevCredentials => ({ ...prevCredentials, [event.target.name]: event.target.value }));
  }, []);

  const postfunktio = useCallback(async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('username', credentials.email);
    formData.append('password', credentials.password);
  
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
  
        const cookieOptions = checkboxRef.current.checked ? { expires: 182, secure: true, sameSite: 'none' } : { expires: new Date(new Date().getTime() + (30 * 60 * 1000)), secure: true, sameSite: 'none' };
        ['Wilma2SID', 'WilmaID', 'WilmaFormkey'].forEach(key => {
          const cookieValue = responseData[key];
          Cookies.set(key, cookieValue, cookieOptions);
        });
        window.location.href = "/etusivu";
      } else {
        if (response.status === 401) {
          alert("Väärä salasana.");
          window.location.reload();
        } else {
          console.error("Error:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, [credentials]);

  return (
    <div className="login">
      <div className="login-otsikko">Boisen</div>
      <div className="login-laatikko">
        <form onSubmit={postfunktio}>
          {['email', 'password'].map((field, index) => (
            <input
              key={index}
              type={field}
              value={credentials[field]}
              onChange={handleInputChange}
              name={field}
              placeholder={field === 'email' ? "Sähköposti (@edu.turku.fi)" : "Salasana"}
              className="login-label"
            />
          ))}
          <div className="login-submit">
            <input type="submit" value="Kirjaudu sisään" className="login-submit-button" />
            <label className="login-submit-check">
              <input type="checkbox" ref={checkboxRef} className="login-submit-check" />
              Muista minut
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;