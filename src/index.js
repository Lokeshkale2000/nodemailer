const http = require("http");
const transporter = require("../config/nodemailerConfig");

const server = http.createServer((request, response) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "lokesh.21910292@viit.ac.in",
        subject: "nodejs backend mail sending Testing!",
        text: "Hello Lokesh, this is a test email!",
    };

    transporter.sendMail(mailOptions, (error, emailResponse) => {
        if (error) {
            console.error("Error occurred:", error);
            response.end();
            return;
        }

        console.log("Email sent successfully!");
        response.end();
    
        
    });
});

server.listen(8081, () => {
    console.log("Server running on http://localhost:8081");
});
