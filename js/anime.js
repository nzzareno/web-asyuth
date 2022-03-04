$(document).ready(function () {
  $("#fab").dblclick(function () {
    $("#fab").toggleClass("fabOpen");
    $(".fabContent").toggleClass("d-block");
  });
});

$(document).ready(function () {
  $("#termsBtn").click(function () {
    alertify
      .confirm()
      .set({
        startMaximized: true,
        message: `
    1. Introduction <br> <br>

Welcome to ASYUTH (“Company”, “we”, “our”, “us”)! <br>

These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at asosdesign.com (together or individually “Service”) operated by ASYUTH. <br>

Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. <br>

Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them. <br>

If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at nazagarma@gmail.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service. <br>
<br>
    2. Prohibited Uses 

    You may use Service only for lawful purposes and in accordance with Terms. <br> <br> You agree not to use Service: <br>
    
    0.1. In any way that violates any applicable national or international law or regulation. <br>
    
    0.2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise. <br>
    
    0.3. To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation. <br>
    
    0.4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity. <br>
    
    0.5. In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity. <br>
    
    0.6. To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability. <br>
    
    Additionally, you agree not to: <br> <br>
    
    0.1. Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service. <br>
    
    0.2. Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service. <br>
    
    0.3. Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent. <br>
    
    0.4. Use any device, software, or routine that interferes with the proper working of Service. <br>
    
    0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful. <br>
    
    0.6. Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service. <br>
    
    0.7. Attack Service via a denial-of-service attack or a distributed denial-of-service attack. <br>
    
    0.8. Take any action that may damage or falsify Company rating. <br>
    
    0.9. Otherwise attempt to interfere with the proper working of Service. <br>
    <br>
    3. Accounts <br> <br>

When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service. <br>
<br>
4. Error Reporting and Feedback <br> <br>

You may provide us either directly at nazagarma@gmail.com or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose. <br>
<br>
5. Acknowledgement <br> <br>

BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM. <br>
<br>
6. Contact Us <br> <br>
 
Please send your feedback, comments, requests for technical support by email: nazagarma@gmail.com.`,
      })
      .show();
  });
});

TweenMax.staggerFrom(
  ".form-modal",
  1,
  {
    y: "260",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 1,
  },
  1.6
);
