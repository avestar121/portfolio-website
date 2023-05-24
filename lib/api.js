const sendContactForm = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => {
        if(!res.ok) throw new Error("Failed to send message");
        return res.json();
    })
  };
  
  export default sendContactForm;
  