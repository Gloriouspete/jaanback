import Transporter from "../../utils/Transporter";
export default async function OtpCode({
  email,
  code,
  username,

}: {
  email: string;
  username: string;
  code: string;
}) {
  const mailOptions = {
    from: '"Jaan Services" <hello@jaan.ng>',
    to: email,
    subject: "Login Alert",
    html: `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; margin: 0; padding: 0; min-height: 100%; width: 100%;">

    <head>
     <meta charset="UTF-8">
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
     <!--[if !mso]><!-- -->
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <!--<![endif]-->
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
     <meta name="x-apple-disable-message-reformatting">
     <link href="https://fonts.googleapis.com/css?family=DM+Sans:ital,wght@0,400;0,400;0,500;0,600;0,700;0,800" rel="stylesheet">
     <title>OTP Request by Jaan</title>
     <!-- Made with Postcards Email Builder by Designmodo -->
     <style>
    @media (min-width: 621px) {
      .pc-lg-hide {
        display: none;
      }

      .pc-lg-bg-img-hide {
        background-image: none !important;
      }
    }
    </style>
     <style>
    @media (max-width: 620px) {
      .pc-project-body {
        min-width: 0px !important;
      }

      .pc-project-container {
        width: 100% !important;
      }

      .pc-sm-hide,
    .pc-w620-gridCollapsed-1 > tbody > tr > .pc-sm-hide {
        display: none !important;
      }

      .pc-sm-bg-img-hide {
        background-image: none !important;
      }

      .pc-w620-padding-0-0-0-0 {
        padding: 0px 0px 0px 0px !important;
      }

      table.pc-w620-spacing-0-0-30-0 {
        margin: 0px 0px 30px 0px !important;
      }

      td.pc-w620-spacing-0-0-30-0,
    th.pc-w620-spacing-0-0-30-0 {
        margin: 0 !important;
        padding: 0px 0px 30px 0px !important;
      }

      .pc-w620-padding-32-20-0-20 {
        padding: 32px 20px 0px 20px !important;
      }

      .pc-w620-itemsSpacings-0-20 {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }

      .pc-w620-valign-top {
        vertical-align: top !important;
      }

      td.pc-w620-halign-center,
    th.pc-w620-halign-center {
        text-align: center !important;
      }

      table.pc-w620-halign-center {
        float: none !important;
        margin-right: auto !important;
        margin-left: auto !important;
      }

      img.pc-w620-halign-center {
        margin-right: auto !important;
        margin-left: auto !important;
      }

      div.pc-w620-textAlign-center,
    th.pc-w620-textAlign-center,
    a.pc-w620-textAlign-center,
    td.pc-w620-textAlign-center {
        text-align: center !important;
        text-align-last: center !important;
      }

      table.pc-w620-textAlign-center {
        float: none !important;
        margin-right: auto !important;
        margin-left: auto !important;
      }

      img.pc-w620-textAlign-center {
        margin-right: auto !important;
        margin-left: auto !important;
      }

      .pc-w620-lineHeight-100pc {
        line-height: 100% !important;
      }

      .pc-w620-fontSize-40px {
        font-size: 40px !important;
      }

      div.pc-w620-align-center,
    th.pc-w620-align-center,
    a.pc-w620-align-center,
    td.pc-w620-align-center {
        text-align: center !important;
        text-align-last: center !important;
      }

      table.pc-w620-align-center {
        float: none !important;
        margin-right: auto !important;
        margin-left: auto !important;
      }

      img.pc-w620-align-center {
        margin-right: auto !important;
        margin-left: auto !important;
      }

      .pc-w620-width-84pc {
        width: 84% !important;
      }

      .pc-w620-height-100pc {
        height: 100% !important;
      }

      .pc-w620-padding-40-20-40-20 {
        padding: 40px 20px 40px 20px !important;
      }

      .pc-w620-font-size-18px {
        font-size: 18px !important;
      }

      .pc-w620-line-height-26px {
        line-height: 26px !important;
      }

      .pc-w620-itemsSpacings-0-30 {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top: 15px !important;
        padding-bottom: 15px !important;
      }

      table.pc-w620-spacing-0-0-20-0 {
        margin: 0px 0px 20px 0px !important;
      }

      td.pc-w620-spacing-0-0-20-0,
    th.pc-w620-spacing-0-0-20-0 {
        margin: 0 !important;
        padding: 0px 0px 20px 0px !important;
      }

      .pc-w620-padding-18-20-18-20 {
        padding: 18px 20px 18px 20px !important;
      }

      .pc-w620-fontSize-32px {
        font-size: 32px !important;
      }

      .pc-w620-padding-36-16-16-16 {
        padding: 36px 16px 16px 16px !important;
      }

      table.pc-w620-spacing-0-0-0-0 {
        margin: 0px 0px 0px 0px !important;
      }

      td.pc-w620-spacing-0-0-0-0,
    th.pc-w620-spacing-0-0-0-0 {
        margin: 0 !important;
        padding: 0px 0px 0px 0px !important;
      }

      .pc-w620-padding-24-20-24-20 {
        padding: 24px 20px 24px 20px !important;
      }

      table.pc-w620-spacing-0-0-8-0 {
        margin: 0px 0px 8px 0px !important;
      }

      td.pc-w620-spacing-0-0-8-0,
    th.pc-w620-spacing-0-0-8-0 {
        margin: 0 !important;
        padding: 0px 0px 8px 0px !important;
      }

      .pc-w620-lineHeight-36 {
        line-height: 36px !important;
      }

      .pc-w620-font-size-16px {
        font-size: 16px !important;
      }

      .pc-w620-line-height-24px {
        line-height: 24px !important;
      }

      .pc-w620-padding-16-16-16-16 {
        padding: 16px 16px 16px 16px !important;
      }

      .pc-w620-itemsSpacings-0-16 {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
      }

      .pc-w620-width-fill {
        width: 100% !important;
      }

      .pc-w620-width-110 {
        width: 110px !important;
      }

      .pc-w620-height-auto {
        height: auto !important;
      }

      .pc-w620-itemsSpacings-8-30 {
        padding-left: 4px !important;
        padding-right: 4px !important;
        padding-top: 15px !important;
        padding-bottom: 15px !important;
      }

      .pc-w620-width-hug {
        width: auto !important;
      }

      .pc-w620-width-100pc {
        width: 100% !important;
      }

      table.pc-w620-spacing-0-8-0-8 {
        margin: 0px 8px 0px 8px !important;
      }

      td.pc-w620-spacing-0-8-0-8,
    th.pc-w620-spacing-0-8-0-8 {
        margin: 0 !important;
        padding: 0px 8px 0px 8px !important;
      }

      .pc-w620-text-align-center {
        text-align: center !important;
        text-align-last: center !important;
      }

      .pc-w620-itemsSpacings-20-0 {
        padding-left: 10px !important;
        padding-right: 10px !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
      }

      table.pc-w620-spacing-0-20-0-20 {
        margin: 0px 20px 0px 20px !important;
      }

      td.pc-w620-spacing-0-20-0-20,
    th.pc-w620-spacing-0-20-0-20 {
        margin: 0 !important;
        padding: 0px 20px 0px 20px !important;
      }

      .pc-w620-padding-20-20-30-20 {
        padding: 20px 20px 30px 20px !important;
      }

      .pc-w620-gridCollapsed-1 > tbody,
    .pc-w620-gridCollapsed-1 > tbody > tr,
    .pc-w620-gridCollapsed-1 > tr {
        display: inline-block !important;
      }

      .pc-w620-gridCollapsed-1.pc-width-fill > tbody,
    .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,
    .pc-w620-gridCollapsed-1.pc-width-fill > tr {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,
    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,
    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1 > tbody > tr > td,
    .pc-w620-gridCollapsed-1 > tr > td {
        display: block !important;
        width: auto !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
      }

      .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,
    .pc-w620-gridCollapsed-1.pc-width-fill > tr > td {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,
    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,
    .pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {
        padding-top: 0 !important;
      }

      .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,
    .pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {
        padding-bottom: 0 !important;
      }

      .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,
    .pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {
        padding-top: 0 !important;
      }

      .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,
    .pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {
        padding-bottom: 0 !important;
      }

      .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,
    .pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {
        padding-left: 0 !important;
      }

      .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,
    .pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {
        padding-right: 0 !important;
      }

      .pc-w620-tableCollapsed-1 > tbody,
    .pc-w620-tableCollapsed-1 > tbody > tr,
    .pc-w620-tableCollapsed-1 > tr {
        display: block !important;
      }

      .pc-w620-tableCollapsed-1.pc-width-fill > tbody,
    .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,
    .pc-w620-tableCollapsed-1.pc-width-fill > tr {
        width: 100% !important;
      }

      .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,
    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,
    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {
        width: 100% !important;
      }

      .pc-w620-tableCollapsed-1 > tbody > tr > td,
    .pc-w620-tableCollapsed-1 > tr > td {
        display: block !important;
        width: auto !important;
      }

      .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,
    .pc-w620-tableCollapsed-1.pc-width-fill > tr > td {
        width: 100% !important;
        box-sizing: border-box !important;
      }

      .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,
    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {
        width: 100% !important;
        box-sizing: border-box !important;
      }
    }
    </style>
     <!--[if !mso]><!-- -->
     <style>
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 800;
      src: url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIptRR23w.woff') format('woff'), url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAIptRR232.woff2') format('woff2');}
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR23w.woff') format('woff'), url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR232.woff2') format('woff2');}
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 500;
      src: url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxRR23w.woff') format('woff'), url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxRR232.woff2') format('woff2');}
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 700;
      src: url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZtRR23w.woff') format('woff'), url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZtRR232.woff2') format('woff2');}
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 600;
      src: url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJtRR23w.woff') format('woff'), url('https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJtRR232.woff2') format('woff2');}
    </style>
     <!--<![endif]-->
     <!--[if mso]>
        <style type="text/css">
            .pc-font-alt {
                font-family: Arial, Helvetica, sans-serif !important;
            }
        </style>
        <![endif]-->
     <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    </head>

    <body class="body pc-font-alt" style="font-weight: normal; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #878787; width: 100%; min-height: 100%; margin: 0; padding: 0;" bgcolor="#878787">
     <table class="pc-project-body" style="-ms-text-size-adjust: 100%; border-collapse: collapse; table-layout: fixed; width: 100%; min-width: 600px; mso-table-lspace: 0; mso-table-rspace: 0; background-color: transparent;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0" role="presentation" width="100%">
      <tr style="-ms-text-size-adjust: 100%;">
       <td align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; width: auto; mso-table-lspace: 0; mso-table-rspace: 0;" width="auto">
        <table class="pc-project-container" align="center" style="-ms-text-size-adjust: 100%; border-collapse: collapse; width: 600px; max-width: 600px; mso-table-lspace: 0; mso-table-rspace: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation" width="600">
         <tr style="-ms-text-size-adjust: 100%;">
          <td class="pc-w620-padding-0-0-0-0" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 20px 0px 20px 0px; mso-table-lspace: 0; mso-table-rspace: 0;" align="left" valign="top">
           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
            <tr style="-ms-text-size-adjust: 100%;">
             <td valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
              <!-- BEGIN MODULE: Header -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
               <tr style="-ms-text-size-adjust: 100%;">
                <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                 <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                  <tr style="-ms-text-size-adjust: 100%;">
                   <!--[if !gte mso 9]><!-- -->
                   <td valign="top" class="pc-w620-padding-36-16-16-16" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; background-image: url('https://cloudfilesdm.com/postcards/image-17454468318534.png'); background-size: cover; background-position: center; background-repeat: no-repeat; padding: 40px 16px 0px 16px; height: unset; background-color: #f3f3f3; mso-table-lspace: 0; mso-table-rspace: 0;" bgcolor="#f3f3f3" background="https://cloudfilesdm.com/postcards/image-17454468318534.png">
                    <!--<![endif]-->
                    <!--[if gte mso 9]>
                    <td valign="top" align="center" style="background-image: url('https://cloudfilesdm.com/postcards/image-17454468318534.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f3f3f3; border-radius: 0px;" bgcolor="#f3f3f3" background="https://cloudfilesdm.com/postcards/image-17454468318534.png">
                <![endif]-->
                    <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                        <v:fill src="https://cloudfilesdm.com/postcards/image-17454468318534.png" color="#f3f3f3" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
                        <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                            <div style="font-size: 0; line-height: 0;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                        <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                            <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                <tr>
                                                    <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td width="16" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                    <td valign="top" align="left">
                    <![endif]-->
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                     <tr style="-ms-text-size-adjust: 100%;">
                      <td class="pc-w620-spacing-0-0-30-0" align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 40px 0px; height: auto; mso-table-lspace: 0; mso-table-rspace: 0;" height="auto">
                       <a class="pc-font-alt" href="https://postcards.email/" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-decoration: none; display: inline-block; vertical-align: top;">
                        <img src="https://cloudfilesdm.com/postcards/image-1745444369515.png" width="auto" height="25" alt style="-ms-text-size-adjust: 100%; text-decoration: none; display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; height: 25px; max-height: 100%; width: auto; border: 0;">
                       </a>
                      </td>
                     </tr>
                    </table>
                    <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                     <tr class="pc-grid-tr-first pc-grid-tr-last" style="-ms-text-size-adjust: 100%;">
                     </tr>
                    </table>
                    <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                     <tr class="pc-grid-tr-first pc-grid-tr-last" style="-ms-text-size-adjust: 100%;">
                      <td class="pc-grid-td-first pc-grid-td-last" align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                       <table style="-ms-text-size-adjust: 100%; border-collapse: separate; border-spacing: 0; width: 100%; mso-table-lspace: 0; mso-table-rspace: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr style="-ms-text-size-adjust: 100%;">
                         <td class="pc-w620-padding-40-20-40-20" align="center" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 32px 32px 40px 32px; mso-padding-left-alt: 0; margin-left: 32px; height: auto; background-color: #ffffff; border-radius: 0px 0px 8px 8px; mso-table-lspace: 0; mso-table-rspace: 0;" height="auto" bgcolor="#ffffff">
                          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                           <tr style="-ms-text-size-adjust: 100%;">
                            <td align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                             <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                              <tr style="-ms-text-size-adjust: 100%;">
                               <td valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 20px 0px; height: auto; mso-table-lspace: 0; mso-table-rspace: 0;" height="auto">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="left" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                 <tr style="-ms-text-size-adjust: 100%;">
                                  <td valign="top" align="left" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                   <div class="pc-font-alt" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-decoration: none;">
                                    <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-size: 18px; mso-line-height-alt: 26px; line-height: 26px; text-align: left; text-align-last: left; color: #767676; letter-spacing: 0px; font-weight: 400; font-style: normal;">
                                     <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly;"><span style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px;" class="pc-w620-font-size-18px pc-w620-line-height-26px">Hi ${username || "Customer"} 👋,</span>
                                      <br style="-ms-text-size-adjust: 100%;"><span style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px;" class="pc-w620-font-size-18px pc-w620-line-height-26px">Your one-time password (OTP) is:</span>
                                     </div>
                                    </div>
                                   </div>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                           <tr style="-ms-text-size-adjust: 100%;">
                            <td align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                              <tr style="-ms-text-size-adjust: 100%;">
                               <td class="pc-w620-spacing-0-0-20-0" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 40px 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                 <tr class="pc-grid-tr-first pc-grid-tr-last" style="-ms-text-size-adjust: 100%;">
                                  <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30" align="center" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                   <table style="-ms-text-size-adjust: 100%; border-collapse: collapse; width: 100%; mso-table-lspace: 0; mso-table-rspace: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tr style="-ms-text-size-adjust: 100%;">
                                     <td class="pc-w620-padding-18-20-18-20" align="center" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 20px 24px 20px 24px; mso-padding-left-alt: 0; margin-left: 24px; height: auto; background-color: #f7f7f7; border-radius: 12px 12px 12px 12px; mso-table-lspace: 0; mso-table-rspace: 0;" height="auto" bgcolor="#f7f7f7">
                                      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                       <tr style="-ms-text-size-adjust: 100%;">
                                        <td align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                          <tr style="-ms-text-size-adjust: 100%;">
                                           <td valign="top" align="center" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                            <div class="pc-font-alt pc-w620-fontSize-32px" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 50px; letter-spacing: -0.2px; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-size: 40px; font-weight: normal; color: #333333; text-align: center; text-align-last: center;">
                                             <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly;"><span style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-weight: 800; font-style: normal; color: #141414; letter-spacing: 15px;">${code}</span>
                                             </div>
                                            </div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                           <tr style="-ms-text-size-adjust: 100%;">
                            <td align="center" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                             <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                              <tr style="-ms-text-size-adjust: 100%;">
                               <td valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                 <tr style="-ms-text-size-adjust: 100%;">
                                  <td valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                   <div class="pc-font-alt" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-decoration: none;">
                                    <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-size: 18px; mso-line-height-alt: 26px; line-height: 26px; color: #767676; letter-spacing: 0px; font-weight: 400; font-style: normal;">
                                     <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly;"><span style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px;" class="pc-w620-font-size-18px pc-w620-line-height-26px">This code is valid for the next&nbsp;30 minutes. Please use it to complete your verification process.</span>
                                     </div>
                                     <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly;">
                                      <br style="-ms-text-size-adjust: 100%;"><span style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px;" class="pc-w620-font-size-18px pc-w620-line-height-26px">For security purposes, never share this code with anyone. If you didn't request this, please contact our support team immediately.</span>
                                     </div>
                                    </div>
                                   </div>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!--[if gte mso 9]>
                                                    </td>
                                                    <td width="16" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                        </v:textbox>
                    </v:rect>
                    <![endif]-->
                   </td>
                  </tr>
                 </table>
                </td>
               </tr>
              </table>
              <!-- END MODULE: Header -->
             </td>
            </tr>
            <tr style="-ms-text-size-adjust: 100%;">
             <td valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
              <!-- BEGIN MODULE: Footer -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
               <tr style="-ms-text-size-adjust: 100%;">
                <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                 <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                  <tr style="-ms-text-size-adjust: 100%;">
                   <!--[if !gte mso 9]><!-- -->
                   <td valign="top" class="pc-w620-padding-20-20-30-20" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; background-image: url('https://cloudfilesdm.com/postcards/image-17454468318539.png'); background-size: cover; background-position: center; background-repeat: no-repeat; padding: 48px 48px 48px 48px; height: unset; background-color: #ffffff; mso-table-lspace: 0; mso-table-rspace: 0;" bgcolor="#ffffff" background="https://cloudfilesdm.com/postcards/image-17454468318539.png">
                    <!--<![endif]-->
                    <!--[if gte mso 9]>
                    <td valign="top" align="center" style="background-image: url('https://cloudfilesdm.com/postcards/image-17454468318539.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #ffffff; border-radius: 0px;" bgcolor="#ffffff" background="https://cloudfilesdm.com/postcards/image-17454468318539.png">
                <![endif]-->
                    <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                        <v:fill src="https://cloudfilesdm.com/postcards/image-17454468318539.png" color="#ffffff" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
                        <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                            <div style="font-size: 0; line-height: 0;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                        <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                            <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                <tr>
                                                    <td colspan="3" height="48" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td width="48" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                    <td valign="top" align="left">
                    <![endif]-->
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                     <tr style="-ms-text-size-adjust: 100%;">
                      <td class="pc-w620-spacing-0-0-20-0" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 32px 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                       <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                        <tr class="pc-grid-tr-first pc-grid-tr-last" style="-ms-text-size-adjust: 100%;">
                         <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16" align="right" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; width: 50%; padding-top: 0px; padding-right: 23.5px; padding-bottom: 0px; padding-left: 0px; mso-table-lspace: 0; mso-table-rspace: 0;" width="50%">
                          <table class="pc-w620-width-fill" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                           <tr style="-ms-text-size-adjust: 100%;">
                            <td class="pc-w620-halign-center pc-w620-valign-top" align="left" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                             <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                              <tr style="-ms-text-size-adjust: 100%;">
                               <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1; mso-table-lspace: 0; mso-table-rspace: 0;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                 <tr style="-ms-text-size-adjust: 100%;">
                                  <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 16px 0px; height: auto; mso-table-lspace: 0; mso-table-rspace: 0;" height="auto">
                                   <img src="https://i.ibb.co/twJGWFcR/JAAN.png" class="pc-w620-width-110 pc-w620-height-auto pc-w620-align-center" width="126" height="auto" alt style="-ms-text-size-adjust: 100%; text-decoration: none; display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 126px; height: auto; max-width: 100%; border: 0;">
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                              <tr style="-ms-text-size-adjust: 100%;">
                               <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1; mso-table-lspace: 0; mso-table-rspace: 0;">
                                <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                 <tr style="-ms-text-size-adjust: 100%;">
                                  <td class="pc-w620-valign-top pc-w620-halign-center" align="left" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                   <table class="pc-w620-halign-center pc-w620-width-hug" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                    <tr style="-ms-text-size-adjust: 100%;">
                                     <td style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; width: unset; mso-table-lspace: 0; mso-table-rspace: 0;" valign="top">
                                      <table class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-width-hug pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                       <tr class="pc-grid-tr-first pc-grid-tr-last" style="-ms-text-size-adjust: 100%;">
                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-8-30" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding-top: 0px; padding-right: 4px; padding-bottom: 0px; padding-left: 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                         <table style="-ms-text-size-adjust: 100%; border-collapse: collapse; width: 100%; mso-table-lspace: 0; mso-table-rspace: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                          <tr style="-ms-text-size-adjust: 100%;">
                                           <td class="pc-w620-halign-center pc-w620-valign-top" align="left" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                            <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                             <tr style="-ms-text-size-adjust: 100%;">
                                              <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1; mso-table-lspace: 0; mso-table-rspace: 0;">
                                               <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                                <tr style="-ms-text-size-adjust: 100%;">
                                                 <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                                  <a class="pc-font-alt" href="http://jaan.ng/download" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-decoration: none;">
                                                   <img src="https://cloudfilesdm.com/postcards/image-17454468318537.png" class="pc-w620-width-110 pc-w620-height-auto pc-w620-align-center" width="110" height="auto" alt style="-ms-text-size-adjust: 100%; text-decoration: none; display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;">
                                                  </a>
                                                 </td>
                                                </tr>
                                               </table>
                                              </td>
                                             </tr>
                                            </table>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-8-30" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 4px; mso-padding-left-alt: 0; margin-left: 4px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                         <table class="pc-w620-width-fill" style="-ms-text-size-adjust: 100%; border-collapse: collapse; width: 100%; mso-table-lspace: 0; mso-table-rspace: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                          <tr style="-ms-text-size-adjust: 100%;">
                                           <td class="pc-w620-halign-center pc-w620-valign-top" align="left" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                            <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                             <tr style="-ms-text-size-adjust: 100%;">
                                              <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1; mso-table-lspace: 0; mso-table-rspace: 0;">
                                               <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                                <tr style="-ms-text-size-adjust: 100%;">
                                                 <td class="pc-w620-halign-center" align="left" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                                  <a class="pc-font-alt" href="http://jaan.ng/download" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-decoration: none;">
                                                   <img src="https://cloudfilesdm.com/postcards/image-17454468318538.png" class="pc-w620-width-110 pc-w620-height-auto pc-w620-align-center" width="110" height="auto" alt style="-ms-text-size-adjust: 100%; text-decoration: none; display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;">
                                                  </a>
                                                 </td>
                                                </tr>
                                               </table>
                                              </td>
                                             </tr>
                                            </table>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                         <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16" align="right" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 23.5px; mso-padding-left-alt: 0; margin-left: 23.5px; mso-table-lspace: 0; mso-table-rspace: 0;" width="50%">
                          <table class="pc-w620-width-fill" style="-ms-text-size-adjust: 100%; border-collapse: collapse; width: 180px; mso-table-lspace: 0; mso-table-rspace: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation" width="180">
                           <tr style="-ms-text-size-adjust: 100%;">
                            <td align="right" valign="middle" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                             <table align="right" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                              <tr style="-ms-text-size-adjust: 100%;">
                               <td align="right" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                <table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                 <tr style="-ms-text-size-adjust: 100%;">
                                  <td class="pc-w620-spacing-0-8-0-8" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                    <tr style="-ms-text-size-adjust: 100%;">
                                     <td valign="top" align="left" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; mso-table-lspace: 0; mso-table-rspace: 0;">
                                      <div class="pc-font-alt" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-decoration: none;">
                                       <div style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-size: 14px; mso-line-height-alt: 19.6px; line-height: 19.6px; text-align: left; text-align-last: left; color: #141414; letter-spacing: 0px; font-weight: 400; font-style: normal;">
                                        <div class="pc-w620-text-align-center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly;"><span style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; font-family: 'DM Sans', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 140%;">Download Jaan App on Play Store and App Store to receive free JTokens.</span>
                                        </div>
                                       </div>
                                      </div>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                     <tr style="-ms-text-size-adjust: 100%;">
                      <td class="pc-w620-spacing-0-0-20-0" valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 32px 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                        <tr style="-ms-text-size-adjust: 100%;">
                         <td valign="top" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1px; font-size: 1px; border-bottom: 1px solid #e9e9e9; mso-table-lspace: 0; mso-table-rspace: 0;">&nbsp;</td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                     <tr style="-ms-text-size-adjust: 100%;">
                      <td align="center" style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0px 0px 16px 0px; mso-table-lspace: 0; mso-table-rspace: 0;">
                       <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">

                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; border-collapse: collapse; margin-bottom: 20px; mso-table-lspace: 0; mso-table-rspace: 0;">
                            <tr style="-ms-text-size-adjust: 100%;">
                              <td style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; text-align: center; mso-table-lspace: 0; mso-table-rspace: 0;" align="center">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" class="social-icons" style="-ms-text-size-adjust: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">
                                  <tr style="-ms-text-size-adjust: 100%;">
                                    <td style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0 10px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                      <a href="https://facebook.com/jaanservicesfb" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; display: inline-block; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; padding: 8px; width: 20px; height: 20px; text-align: center;">
                                        <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=FFFFFF" width="20" height="20" alt="Facebook" style="-ms-text-size-adjust: 100%; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; border: 0;">
                                      </a>
                                    </td>
                                    <td style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0 10px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                      <a href="https://www.instagram.com/jaan.services" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; display: inline-block; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; padding: 8px; width: 20px; height: 20px; text-align: center;">
                                        <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=FFFFFF" width="20" height="20" alt="Instagram" style="-ms-text-size-adjust: 100%; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; border: 0;">
                                      </a>
                                    </td>

                                    <td style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0 10px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                      <a href="https://www.tiktok.com/@jaan.ng" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; display: inline-block; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; padding: 8px; width: 20px; height: 20px; text-align: center;">
                                        <img src="https://img.icons8.com/?size=100&id=118640&format=png&color=FFFFFF" width="20" height="20" alt="TikTok" style="-ms-text-size-adjust: 100%; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; border: 0;">
                                      </a>
                                    </td>
                                    <td style="border-collapse: collapse; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; padding: 0 10px; mso-table-lspace: 0; mso-table-rspace: 0;">
                                      <a href="https://www.linkedin.com/company/jaan-ng/" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; display: inline-block; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; padding: 8px; width: 20px; height: 20px; text-align: center;">
                                        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=FFFFFF" width="20" height="20" alt="LinkedIn" style="-ms-text-size-adjust: 100%; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; border: 0;">
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                       </table>
                      </td>
                     </tr>
                    </table>

                    <!--[if gte mso 9]>
                                                    </td>
                                                    <td width="48" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" height="48" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                        </v:textbox>
                    </v:rect>
                    <![endif]-->
                   </td>
                  </tr>
                 </table>
                </td>
               </tr>
              </table>
              <!-- END MODULE: Footer -->
             </td>
            </tr>
           </table>
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
