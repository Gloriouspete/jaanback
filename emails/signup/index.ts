import Transporter from "../../utils/Transporter";
export default async function WelcomeMail({
  email,
}: {
  email: string;
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
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <meta name="x-apple-disable-message-reformatting">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <title>Welcome to Jaan</title>
      <!--[if mso]>
      <style type="text/css">
        .gradient-text {
          background: none !important;
          color: #8F61FF !important;
        }
        .glass-panel {
          background-color: #ffffff !important;
          border: 1px solid #e0e0e0 !important;
        }
        .glass-dark {
          background-color: #28283C !important;
          border: 1px solid #3a3a5a !important;
        }
        .gradient-bg {
          background: #8F61FF !important;
        }
      </style>
      <![endif]-->
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
    
      .mobile-center {
        text-align: center !important;
      }
    
      .mobile-logo {
        max-width: 180px !important;
        height: auto !important;
      }
    
      .mobile-hide {
        display: none !important;
      }
    
      .mobile-social {
        padding: 8px 6px !important;
      }
    
      .mobile-coupon {
        font-size: 24px !important;
      }
    
      .mobile-br {
        display: none !important;
      }
    }
    </style>
    </head>
    
    <body style="font-family: 'Inter', Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background: linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%); margin: 0; padding: 0; width: 100%;">
      <!-- Preheader Text (Hidden) -->
      <div style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: none; max-height: 0px; overflow: hidden;">
        Welcome to Jaan - Your one-stop solution for bill payments with ₦200 free credit
      </div>
      
      <!-- Email Container -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 600px; margin: 0 auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
        <!-- Header -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" bgcolor="rgba(255, 255, 255, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 25px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                  <!-- Fixed logo URL -->
                  <img src="https://i.ibb.co/twJGWFcR/JAAN.png" width="180" alt="Jaan Logo" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 180px; height: auto; display: block; margin: 0 auto;" height="auto">
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Hero Section -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="gradient-bg" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-radius: 16px; box-shadow: 0 8px 32px rgba(143, 97, 255, 0.3); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background: linear-gradient(135deg, #8F61FF 0%, #6E3AFF 100%);">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 40px 30px; text-align: center; color: #ffffff; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                  <h1 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; font-size: 32px; font-weight: 700; line-height: 1.2;">Welcome to Jaan!</h1>
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 15px 0 0; font-size: 18px; line-height: 1.5; font-weight: 300;">Your one-stop solution for all bill payments</p>
                  
                  <!-- Social Media Icons -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin-top: 25px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://www.tiktok.com/@jaan.ng" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=000000" width="20" height="auto" alt="TikTok" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://facebook.com/jaanservicesfb" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" width="20" height="auto" alt="Facebook" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://x.com/Jaanservices" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" width="20" height="auto" alt="Twitter" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://www.instagram.com/jaan.services" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000" width="20" height="auto" alt="Instagram" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://www.linkedin.com/company/jaan-ng/" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000" width="20" height="auto" alt="LinkedIn" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Main Content -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" bgcolor="rgba(255, 255, 255, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 35px 30px; color: #333333; font-size: 16px; line-height: 1.6; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px;">We are excited to have you on board and look forward to helping you stay connected and in control of your Bill Payments.</p>
                  
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px;">At Jaan, we understand the importance of staying connected with your loved ones, colleagues, and business associates. That's why we have designed our platform to make it easy for you to buy your <em style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #8F61FF;">airtime, data plans, Gift Cards, TV Subscription, Electricity meter tokens</em>, and other <em style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #8F61FF;">important bills</em>, with just a few clicks.</p>
                  
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px;">To get started, simply fund your newly created account on Jaan via bank transfer or using your ATM Cards. You can then select your preferred service and recharge or pay your bill using our secure and convenient platforms.</p>
                  
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px; margin-bottom: 0;">To get you on track faster, we have a special gift for you!</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Coupon Code -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; overflow: hidden; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" bgcolor="rgba(255, 255, 255, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px; text-align: center; background: linear-gradient(135deg, rgba(143, 97, 255, 0.1) 0%, rgba(110, 58, 255, 0.1) 100%); mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 15px; font-size: 16px; color: #333333; font-weight: 500;">Use this coupon code to get started:</p>
                        <div style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 15px 20px; background: linear-gradient(135deg, #8F61FF 0%, #6E3AFF 100%); display: inline-block; border-radius: 12px; box-shadow: 0 4px 15px rgba(143, 97, 255, 0.3);">
                          <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: 2px;">WELCOME10</p>
                        </div>
                        <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 15px 0 0; font-size: 16px; color: #333333;">Enjoy <strong style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #8F61FF;">₦200</strong> free credit for your first transaction</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Additional Content -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" bgcolor="rgba(255, 255, 255, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 35px 30px; color: #333333; font-size: 16px; line-height: 1.6; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px;">If you have any questions or need assistance, our customer support team is always available to help. You can reach us via email at <a href="mailto:contact@jaan.ng" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #8F61FF; text-decoration: none; font-weight: 600;">contact@jaan.ng</a>, WhatsApp or any of our social media pages.</p>
                  
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px;">Once again, welcome to Jaan. We look forward to helping you stay connected.</p>
                  
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px; margin-bottom: 5px;"><em style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">Best Regards,</em></p>
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 16px; margin-top: 0;"><em style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">Jaan Team</em></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- App Download Buttons -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" bgcolor="rgba(255, 255, 255, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 0 20px; font-size: 18px; font-weight: 600; color: #333333;">Download our mobile app</p>
                  
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td class="mobile-stack" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="http://jaan.ng/download" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
                          <img src="https://cloudfilesdm.com/postcards/button-app-store-dark.png" width="150" alt="App Store" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; max-width: 150px; height: auto;" height="auto">
                        </a>
                      </td>
                      <td class="mobile-stack" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="http://jaan.ng/download" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
                          <img src="https://cloudfilesdm.com/postcards/button-google-play-dark.png" width="150" alt="Google Play" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; max-width: 150px; height: auto;" height="auto">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Services Banner -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-panel" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" bgcolor="rgba(255, 255, 255, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 20px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; font-size: 14px; color: #8F61FF; font-weight: 600; letter-spacing: 0.5px;">eSim | Internet | Gift Cards | TV | Electricity | Airtime | Ticketing</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 30px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="glass-dark" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; background-color: rgba(40, 40, 60, 0.7); border: 1px solid rgba(80, 80, 120, 0.3); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);" bgcolor="rgba(40, 40, 60, 0.7)">
              <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 30px; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;" align="center">
                  <!-- Social Media Icons -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin-bottom: 20px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://www.linkedin.com/company/jaan-ng/" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" width="20" height="auto" alt="LinkedIn" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://www.tiktok.com/@jaan.ng" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000" width="20" height="auto" alt="TikTok" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://facebook.com/jaanservicesfb" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" width="20" height="auto" alt="Facebook" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://x.com/Jaanservices" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" width="20" height="auto" alt="Twitter" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://www.instagram.com/jaan.services" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" width="20" height="auto" alt="Instagram" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 8px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                        <a href="https://whatsapp.com/channel/0029Vb5kojLKLaHmC3fquf1A" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; padding: 8px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%;">
                          <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" width="20" height="auto" alt="WhatsApp" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block;">
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Copyright -->
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
    </html>`,
  };

  try {
    await Transporter.sendMail(mailOptions);
    console.error("reset email sent successfully");
    return true;
  } catch (error) {
    console.error(error);
  }
}
