import Transporter from "../../utils/Transporter";
export default async function CreditAlert({
  email,
  date,
  location,
  device,
  ip,
}: {
  email: string;
  date: string;
  location: string;
  device: string;
  ip: string;
}) {
  const mailOptions = {
    from: '"Jaan Services" <hello@jaan.ng>',
    to: email,
    subject: "Login Alert",
    html: `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family: 'Inter', Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; width: 100%;">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
        <meta name="x-apple-disable-message-reformatting">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <title>Funds have Been Received</title>
        <style>
    @media screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        max-width: 100% !important;
      }
    
      .responsive-table {
        width: 100% !important;
      }
    
      .mobile-padding {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
    
      .mobile-stack {
        display: block !important;
        width: 100% !important;
      }
    
      .center-mobile {
        text-align: center !important;
      }
    
      .logo-image {
        width: 40% !important;
        max-width: 150px !important;
        height: auto !important;
      }
    
      .verification-code {
        font-size: 28px !important;
      }
    
      .social-icons td {
        padding: 0 8px !important;
      }
    
      .glass-card {
        margin: 0 10px !important;
      }
    
      .button {
        width: 100% !important;
        max-width: 300px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
    }
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #121212 !important;
      }
    
      .dark-mode-bg-gradient {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%) !important;
      }
    
      .dark-mode-bg-primary {
        background-color: rgba(40, 40, 40, 0.8) !important;
      }
    
      .dark-mode-bg-secondary {
        background-color: rgba(30, 30, 30, 0.9) !important;
      }
    
      .dark-mode-text-primary {
        color: #f0f0f0 !important;
      }
    
      .dark-mode-text-secondary {
        color: #b0b0b0 !important;
      }
    
      .dark-mode-button {
        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%) !important;
      }
    
      .dark-mode-border {
        border-color: rgba(80, 80, 80, 0.5) !important;
      }
    
      .dark-mode-footer {
        background-color: rgba(20, 20, 20, 0.95) !important;
      }
    
      .dark-mode-footer-text {
        color: #a0a0a0 !important;
      }
    
      .dark-mode-code-bg {
        background-color: rgba(60, 60, 60, 0.6) !important;
      }
    }
    </style>
    </head>
    <body style="font-family: 'Inter', Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%); margin: 0; padding: 0; width: 100%;" class="dark-mode-bg-gradient">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 600px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" class="container">
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-card" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08); margin: 0 auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(255, 255, 255, 0.85); padding: 30px 0; text-align: center; border-bottom: 1px solid rgba(0, 0, 0, 0.05); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" class="dark-mode-bg-secondary fallback-border" bgcolor="rgba(255, 255, 255, 0.85)" align="center">
                                <img src="https://cloudfilesdm.com/postcards/image-1745444369515.png" width="140" height="auto" alt="Jaan Logo" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; width: 140px; height: auto;" class="logo-image">
                            </td>
                        </tr>
                        
                        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(255, 255, 255, 0.75); padding: 40px 30px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" class="mobile-padding dark-mode-bg-primary" bgcolor="rgba(255, 255, 255, 0.75)">
                                <h1 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 20px 0; font-family: 'Inter', Arial, sans-serif; font-weight: 700; font-size: 28px; line-height: 32px; color: #333333; letter-spacing: -0.5px;" class="dark-mode-text-primary fallback-text">
                                    Account Funding Successful
                                </h1>
                                
                                <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 25px 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #555555;" class="dark-mode-text-secondary fallback-text">
                                    Your Jaan Account has been successfully funded. Here are the details of the transaction:
                                </p>
                                
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin-bottom: 30px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                        <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(240, 240, 240, 0.7); border-radius: 12px; padding: 20px; text-align: left; border: 1px solid rgba(0, 0, 0, 0.05); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" class="dark-mode-code-bg dark-mode-border" bgcolor="rgba(240, 240, 240, 0.7)" align="left">
                                            <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 10px 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333;" class="dark-mode-text-primary fallback-text">
                                                Amount: <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-weight: 600;">NGN 10,000</span>
                                            </p>
                                            <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 10px 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333;" class="dark-mode-text-primary fallback-text">
                                                Transaction ID: <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-weight: 600;">1234567890</span>
                                            </p>
                                            <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 10px 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333;" class="dark-mode-text-primary fallback-text">
                                                Payment Method: <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-weight: 600;">Bank Transfer</span>
                                            </p>
                                            <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333;" class="dark-mode-text-primary fallback-text">
                                                Date: <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-weight: 600;">24th July 2024, 10:00 AM</span>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                
                                <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 30px 0; font-family: 'Inter', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #777777;" class="dark-mode-text-secondary fallback-text">
                                    You can now use the funds in your Jaan Wallet to make transactions.
                                </p>
                                
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                        <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: linear-gradient(135deg, #6b34ff 0%, #8b5cf6 100%); border-radius: 8px; text-align: center; box-shadow: 0 4px 12px rgba(107, 52, 255, 0.2); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" class="dark-mode-button" align="center">
                                            <a href="https://jaan.ng/" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 16px 36px; font-family: 'Inter', Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 20px; color: #ffffff; text-decoration: none; border-radius: 8px;" class="fallback-text">
                                                Go to Jaan
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    </td></tr><tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                        <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" bgcolor="rgba(255, 255, 255, 0.7)">
                                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                    <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 35px 30px; color: #333333; font-size: 16px; line-height: 1.6; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">If you have any questions or need assistance, our customer support team is always available to help. You can reach us via email at <a href="mailto:contact@jaan.ng" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #8F61FF; text-decoration: none; font-weight: 600;">contact@jaan.ng</a>, WhatsApp or any of our social media pages.</p>
                                        
                                    
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                        <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" bgcolor="rgba(255, 255, 255, 0.7)">
                                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                    <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 20px; font-size: 18px; font-weight: 600; color: #333333;">Download our mobile app</p>
                                        
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                                <td class="mobile-stack" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="http://jaan.ng/download" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
                                                        <img src="https://cloudfilesdm.com/postcards/button-app-store-dark.png" width="150" alt="App Store" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; max-width: 150px; height: auto;" height="auto">
                                                    </a>
                                                </td>
                                                <td class="mobile-stack" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="http://jaan.ng/download" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
                                                        <img src="https://cloudfilesdm.com/postcards/button-google-play-dark.png" width="150" alt="Google Play" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; max-width: 150px; height: auto;" height="auto">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                        <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" bgcolor="rgba(255, 255, 255, 0.7)">
                                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                    <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 20px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; font-size: 14px; color: #8F61FF; font-weight: 600; letter-spacing: 0.5px;">eSim | Internet | Gift Cards | TV | Electricity | Airtime | Ticketing</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                        <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 30px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-dark" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: rgba(40, 40, 60, 0.7); border: 1px solid rgba(80, 80, 120, 0.3); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" bgcolor="rgba(40, 40, 60, 0.7)">
                                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                    <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin-bottom: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="https://www.linkedin.com/company/jaan-ng/" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                                                        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" width="20" height="20" alt="LinkedIn" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                                                    </a>
                                                </td>
                                                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="https://www.tiktok.com/@jaan.ng" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                                                        <img src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000" width="20" height="20" alt="TikTok" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                                                    </a>
                                                </td>
                                                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="https://facebook.com/jaanservicesfb" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                                                        <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" width="20" height="20" alt="Facebook" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                                                    </a>
                                                </td>
                                                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="https://x.com/Jaanservices" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                                                        <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" width="20" height="20" alt="Twitter" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                                                    </a>
                                                </td>
                                                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="https://www.instagram.com/jaan.services" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                                                        <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" width="20" height="20" alt="Instagram" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                                                    </a>
                                                </td>
                                                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                                                    <a href="https://whatsapp.com/channel/0029Vb5kojLKLaHmC3fquf1A" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                                                        <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" width="20" height="20" alt="WhatsApp" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; outline: none; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px; line-height: 1.5;">
                                            © 2025 Jaan Digital Services LTD | RC8015243
                                        </p>
                                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 10px 0 0; color: rgba(255, 255, 255, 0.7); font-size: 12px;">
                                            <a href="https://www.jaan.ng" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255, 255, 255, 0.7); text-decoration: underline;">www.jaan.ng</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
`,
  };

  try {
    await Transporter.sendMail(mailOptions);
    console.error("reset email sent successfully");
    return true;
  } catch (error) {
    console.error(error);
  }
}
