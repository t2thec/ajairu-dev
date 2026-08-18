// Email configuration - copy to email.config.local.js and fill in
// email.config.local.js is gitignored

export const emailConfig = {
  // SMTP server settings
  // For Gmail: host = 'smtp.gmail.com', port = 465, secure = true
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,

  // SMTP credentials - use an App Password, not your regular password
  user: 'TODO_FILL_IN',
  password: 'TODO_FILL_IN',

  // From address for outgoing emails to users
  fromName: 'ajairu',
  fromEmail: 'TODO_FILL_IN@gmail.com',

  // Where to send internal notifications (new submissions)
  notifyEmail: 'TODO_FILL_IN@gmail.com',
};