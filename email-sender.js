const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter object with your email configuration
  const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
      user: 'your_email_address',
      pass: 'your_email_password',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'your_email_address',
    to: 'recipient_email_address',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js',
  };

  // Send the email
  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info.messageId);
}

sendEmail().catch(console.error);
