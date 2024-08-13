import { readFile } from 'fs/promises';
import { resolve } from 'path';


// async function readHtmlFile(filePath) {
//     try {
//         const absolutePath = resolve(filePath);
//         console.log(`Resolved Path: ${absolutePath}`); // Add this line
//         const content = await readFile(absolutePath, 'utf8');
//         return content;
//     } catch (error) {
//         console.error(`Error reading file: ${error}`);
//         return null;
//     }
// }


// // Usage
// const filePath = 'index.html'; // Replace with your file path


// export const htmlEmail = readHtmlFile(filePath).then(htmlContent => {
//     if (htmlContent !== null) {
//         return `{htmlContent}`;
//     }
// });;
export const textEmail = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam recusandae numquam necessitatibus, facere exercitationem error, ea obcaecati autem hic in consequuntur unde mollitia inventore consectetur maiores libero! Nisi expedita at id minus aut ipsam, eligendi explicabo reprehenderit quam repellendus! Non rerum laborum sit aliquid vel recusandae reiciendis. Aut, quidem at.`

export const htmlEmail = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&display=swap"
        rel="stylesheet">
    <title>Email Template</title>

</head>

<body style="margin: 0; padding: 0; background-color: #f4f4f4;">


    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0;">
        <tr>
            <td align="center" style="padding:0;">
                <table width="800" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
                    <!-- Header -->
                    <tr>
                        <td
                            style="background-color: #333333; padding: 20px 40px; text-align: center; color: #ffffff; font-size: 36px; font-family: 'Edu VIC WA NT Beginner', cursive, Arial, sans-serif;">
                            ----- Elevate Vision Co.-----
                        </td>
                    </tr>
                    <!-- Banner 1 -->
                    <tr>
                        <td style="width: 100%;text-align: center;color: white;">
                            <img style="padding: 0;margin: 0;max-width: 100%;height: fit-content;"
                                src="https://raw.githubusercontent.com/CHEPHYTY/email-images/main/Marketing%20Banner.png"
                                alt="top-banner">
                        </td>
                    </tr>

                    <!-- Body 1 -->
                    <tr>
                        <td
                            style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6; font-family: Arial, sans-serif; color: #333333;">
                            <strong>Dear Sir/Madam,</strong>
                            <br>
                            <br>
                            I hope this email finds you well. I am a representative of the <strong>Elevate Vision
                                Co.</strong>, a
                            full-service agency specializing in web design, branding, and digital solutions tailored to
                            elevate businesses like yours.
                            <br>
                            <br>
                            We recently came across your stunning portfolio and were truly impressed by the artistry and
                            professionalism of your work. Your ability to capture moments so beautifully is truly
                            inspiring, and we believe that your online presence should reflect the same level of
                            excellence.
                            <br><br>
                            At Elevate Vision Co., we understand the importance of a captivating and user-friendly
                            website that not only showcases your incredible work but also attracts potential clients and
                            facilitates easy communication. We would love the opportunity to collaborate with you to
                            enhance your digital presence through our comprehensive website design and maintenance
                            services
                        </td>
                    </tr>
                    <!-- Body 2 -->
                    <tr>
                        <td
                            style="padding: 0px 40px 40px 40px; text-align: left; font-size: 16px; line-height: 1.6; font-family: Arial, sans-serif; color: #333333;">

                            <mark style="font-size: 26px; background-color:white;">
                                Value We Provide to Our Clients
                            </mark>
                            <br>
                            <ul>
                                <li><strong>Your Vision, Perfectly Realized:</strong> We don't just create websites we
                                    bring your unique vision to life with custom designs that resonate deeply with your
                                    brand and captivate your audience. Every detail is tailored to reflect who you are
                                    and what you stand for.
                                </li>
                                <br>
                                <li><strong>Pioneering Technology, Seamlessly Integrated:</strong> We leverage the power
                                    of cutting-edge tools like React, Next.js, and Framer to build websites that are not
                                    only visually stunning but also blazing fast, responsive, and future-ready. We
                                    ensure your site stands at the forefront of digital innovation.

                                </li>
                                <br>
                                <li><strong>User Experience that Delights and Engages:</strong> Our designs are more
                                    than
                                    just beautiful—they're built to offer a seamless, intuitive experience that keeps
                                    your visitors engaged and encourages them to explore. We focus on creating a user
                                    journey that is as smooth as it is memorable.</li>
                                <br>
                                <li><strong>Unwavering Support and Partnership:</strong> Our relationship with you
                                    doesn't end when the website launches. We're committed to your long-term success
                                    with ongoing support, regular updates, and proactive maintenance. We're here to help
                                    you navigate the digital landscape with confidence.

                                </li><br>
                                <li><strong>Amplified Brand Presence and Reach: </strong> We don't just build websites,
                                    we craft platforms that elevate your brand, enhance your visibility, and connect you
                                    with a broader audience. Through SEO optimization and strategic design, we help you
                                    stand out in a crowded market and attract the clients you deserve.
                                </li>
                            </ul>

                        </td>
                    </tr>
                    <!-- Banner 2 -->
                    <tr>

                        <td style="width: 100%;text-align: center;color: white;">
                            <img style="padding: 0;margin: 0;max-width: 100%;height: fit-content;"
                                src="https://raw.githubusercontent.com/CHEPHYTY/email-images/main/improvement.png"
                                alt="top-banner">
                        </td>
                    </tr>
                    <!--  Body 3 -->

                    <tr>
                        <td
                            style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6; font-family: Arial, sans-serif; color: #333333;">


                            <mark style="font-size: 26px; background-color:white;">
                                Value We Provide to Our Clients
                            </mark>
                            <ul>
                                <li><strong>Discovery and Consultation</strong><br>We begin by understanding your unique
                                    needs and vision through an initial consultation. Discuss your brand, target
                                    audience, and the goals for your website
                                </li>
                                <li><strong>Design and Planning</strong><br>Develop a custom design plan, choosing
                                    between platforms like React, Next.js, Framer, Wix Studio, or WordPress based on
                                    your preferences. Create wireframes and design mockups to visualize the website
                                    structure and aesthetics.</li>
                                <li><strong>Development</strong><br>Build the website using the chosen technology,
                                    ensuring a responsive and user-friendly design. Integrate necessary features such as
                                    galleries, contact forms, and client management tools.
                                </li>
                                <li><strong>Content Integration</strong><br>Populate the website with your portfolio
                                    content, including images, videos, and text. Optimize the content for SEO to improve
                                    search engine visibility.
                                </li>
                                <li><strong>Testing and Quality Assurance</strong><br>Conduct thorough testing across
                                    different devices and browsers to ensure optimal performance. Fine-tune the website
                                    based on your feedback.
                                </li>
                                <li><strong>Ongoing Support and Maintenance
                                    </strong><br>Offer continuous support to keep your website updated and running
                                    smoothly. Regularly update the site with new content, features, and security patches
                                    as needed.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 0px 40px 40px 40px; text-align: left; font-size: 16px; line-height: 1.6; font-family: Arial, sans-serif; color: #333333;">
                            We are passionate about helping talented photographers like you reach a wider audience and
                            achieve greater success through a strong online presence. We would be thrilled to discuss
                            how we can contribute to your growth and enhance your brand.
                            <br><br>
                            We are passionate about helping talented photographers like you reach a wider audience and
                            achieve greater success through a strong online presence. We would be thrilled to discuss
                            how we can contribute to your growth and enhance your brand.
                            <br><br>
                            Thank you for considering Elevate Vision Co. We look forward to the opportunity to
                            collaborate with you.

                            <br><br>
                            <strong>Best regards,</strong><br>

                            Soumya Ranjan Hembram <br>
                            Frontend Developer <br>
                            Elevate Vision Co. <br>

                        </td>
                    </tr>

                    <!-- Call to action Button -->
                    <tr>
                        <td style="padding: 0px 40px 40px 40px; text-align: center;">

                            <h1 style="color:black; font-family:'Edu VIC WA NT Beginner', cursive, Arial, sans-serif;">
                                Get In Touch</h1>
                            <a href="mailto:elevatevision.evi@gmail"
                                style="font-size: 26px;font-family:'Edu VIC WA NT Beginner', cursive, Arial, sans-serif;">elevatevision.evi@gmail</a>
                            <table cellspacing="0" cellpadding="0" style="margin:20px auto;">
                                <tr>
                                    <td align="center"
                                        style="background-color: #0400ff; padding: 10px 60px; border-radius: 5px;">
                                        <a href="https://www.yourwebsite.com" target="_blank"
                                            style="color: #ffffff; text-decoration: none; font-weight: bold; font-family: Arial, sans-serif;">Book
                                            a Meeting</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Logo Section -->

                    <tr>
                        <td style="width: 100%; height: fit-content; margin:0 40px; justify-content:space-between;">
                            <table style="width: 100%; border-spacing: 0;">
                                <tr>
                                    <td style="width: 200px; padding: 0 30px;">
                                        <img src="https://raw.githubusercontent.com/CHEPHYTY/email-images/main/logo.png"
                                            alt="logo" style="width: 200px; height: auto;">
                                    </td>
                                    <td style="width: 2px; border-left: 2px solid black;"></td>
                                    <td style="padding:20px 30px;">
                                        <ul style="margin: 0; list-style-type: none; padding: 0;">
                                            <li style="font-size: 36px; background-color: white; text-align: start;">
                                                <strong>Contact</strong>
                                            </li>
                                            <li style="text-align: left;"><a
                                                    href="mailto:elevatevision.evi@gmail.com">elevatevision.evi@gmail.com</a>
                                            </li>
                                            <li style="text-align: left;"><a
                                                    href="mailto:rahul.elevatevision@gmail.com">rahul.elevatevision@gmail.com</a>
                                            </li>
                                            <li style="text-align: left;"><a
                                                    href="mailto:bhabani.elevatevision@gmail.com">bhabani.elevatevision@gmail.com</a>
                                            </li>
                                            <li style="text-align: left;">+91 637-242-5819</li>
                                            <li style="text-align: left;">+91 934-881-7703</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>






                    <!-- banner 2 -->
                    <tr>

                        <td style="width: 100%;text-align: center;color: white;">
                            <img style="padding: 0;margin: 0;max-width: 100%;height: fit-content;"
                                src="https://raw.githubusercontent.com/CHEPHYTY/email-images/main/helping%20banner.png"
                                alt="top-banner">
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td
                            style="background-color: #333333; padding:20px 40px; text-align: center; color: #ffffff; font-size: 14px; font-family: Arial, sans-serif;">
                            Copyright &copy; 2024 | Elevate Vision Co.
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>

</body>

</html>`
