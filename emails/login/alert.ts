import Transporter from "../../utils/Transporter";
export default async function LoginAlert({
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
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Alert</title>
    </head>
    <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%); font-family: Arial, sans-serif;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: auto;">
        <tr>
          <td style="padding: 30px 20px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08); margin: 0 auto; background-color: rgba(255,255,255,0.85);">
              <tr>
                <td style="padding: 30px 0; text-align: center; border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                  <img src="https://cloudfilesdm.com/postcards/image-1745444369515.png" width="140" height="auto" alt="Jaan Logo" style="width: 140px; height: auto;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 40px 30px; background-color: rgba(255,255,255,0.75);">
                  <h1 style="margin: 0 0 20px 0; font-weight: 700; font-size: 28px; line-height: 32px; color: #333333;">
                    Login Alert
                  </h1>
                  <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 24px; color: #555555;">
                    We have detected a new login to your Jaan Account. Please review the details below:
                  </p>
                  <ul style="margin: 0 0 25px 0; padding-left: 20px; font-size: 16px; line-height: 24px; color: #555555;">
                    <li><strong>Date & Time:</strong> ${date}</li>
                    <li><strong>Location:</strong> ${location}</li>
                    <li><strong>Device:</strong> ${device}</li>
                    <li><strong>IP Address:</strong> ${ip}</li>
                  </ul>
                  <p style="text-align:center;">
                    <a href="#" target="_blank" style="display: inline-block; padding: 16px 36px; background: linear-gradient(135deg, #6b34ff 0%, #8b5cf6 100%); color: #ffffff; font-size: 16px; font-weight: 600; line-height: 20px; border-radius: 8px; text-decoration: none;">
                      Change Your Password
                    </a>
                  </p>
                  <p style="margin: 25px 0 0 0; font-size: 16px; line-height: 24px; color: #555555;">
                    If you did not initiate this login, please click the button above to secure your account immediately.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 20px 20px;">
            <table width="100%" style="background-color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="padding: 35px 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                  <p>If you have any questions or need assistance, our customer support team is always available to help. You can reach us via email at <a href="mailto:contact@jaan.ng" style="color: #8F61FF; text-decoration: none; font-weight: 600;">contact@jaan.ng</a>, WhatsApp or any of our social media pages.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 20px 30px;">
            <table width="100%" style="background-color: rgba(40, 40, 60, 0.7); border: 1px solid rgba(80, 80, 120, 0.3); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); text-align: center;">
              <tr>
                <td style="padding: 30px;">
                  <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px; line-height: 1.5;">
                    © 2025 Jaan Digital Services LTD | RC8015243<br>
                    <a href="https://www.jaan.ng" target="_blank" style="color: rgba(255, 255, 255, 0.7); text-decoration: underline;">www.jaan.ng</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

    <tr>
      <td style="padding: 0 20px 30px;">
        <table width="100%" style="background-color: rgba(40, 40, 60, 0.7); border: 1px solid rgba(80, 80, 120, 0.3); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); text-align: center;">
          <tr>
            <td style="padding: 30px;">
              <table align="center" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/company/jaan-ng/" target="_blank" style="display:inline-block;padding:8px;background-color:rgba(255,255,255,0.1);border-radius:50%;">
                      <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" width="20" height="20" alt="LinkedIn">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.tiktok.com/@jaan.ng" target="_blank" style="display:inline-block;padding:8px;background-color:rgba(255,255,255,0.1);border-radius:50%;">
                      <img src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000" width="20" height="20" alt="TikTok">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://facebook.com/jaanservicesfb" target="_blank" style="display:inline-block;padding:8px;background-color:rgba(255,255,255,0.1);border-radius:50%;">
                      <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" width="20" height="20" alt="Facebook">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://x.com/Jaanservices" target="_blank" style="display:inline-block;padding:8px;background-color:rgba(255,255,255,0.1);border-radius:50%;">
                      <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" width="20" height="20" alt="Twitter">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.instagram.com/jaan.services" target="_blank" style="display:inline-block;padding:8px;background-color:rgba(255,255,255,0.1);border-radius:50%;">
                      <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" width="20" height="20" alt="Instagram">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://whatsapp.com/channel/0029Vb5kojLKLaHmC3fquf1A" target="_blank" style="display:inline-block;padding:8px;background-color:rgba(255,255,255,0.1);border-radius:50%;">
                      <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" width="20" height="20" alt="WhatsApp">
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px; line-height: 1.5;">
                © 2025 Jaan Digital Services LTD | RC8015243<br>
                <a href="https://www.jaan.ng" target="_blank" style="color: rgba(255, 255, 255, 0.7); text-decoration: underline;">www.jaan.ng</a>
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
