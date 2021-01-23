const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abeltoth7@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app.`
        // html: ''
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abeltoth7@gmail.com',
        subject: 'Sorry to see you go',
        text: `Dear ${name}. I am sorry to hear that you cancelled the your account. Please provide me some feedback about it.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}