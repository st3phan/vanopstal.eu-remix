import {useEffect, useState} from 'react';

const HireMe = () => {
  const gibberishEmail = 'uryyb@inabcfgny.rh';
  const [email, setEmail] = useState(gibberishEmail);

  useEffect(() => {
    const encodedEmail = gibberishEmail.replace(/[a-zA-Z]/g,
      function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
      });
    setEmail(encodedEmail);
  }, []);


  return (
    <article>
      <h2>Open to work</h2>
      <p>As of April 2024 I am accepting new freelance projects.</p>
      <h2>Contact</h2>
      <p>The best way to contact me is to send me an email at <a href={`mailto:${email}`} rel="nofollow">{email}</a>.</p>
      <p>Alternatively you could also send me a message through <a href="https://www.linkedin.com/in/stephanvanopstal">LinkedIn</a>.
      </p>
    </article>
  );
};

export default HireMe;
