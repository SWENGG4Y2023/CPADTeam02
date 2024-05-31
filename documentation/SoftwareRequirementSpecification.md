# Software Requirement Specification

## Table of Contents
-  [1. Introduction](#1-introduction)
   - [1.1 Purpose](#11-purpose)
   - [1.2 Document Conventions](#12-document-conventions)
   - [1.3 Intended Audience and Reading Suggestions](#13-intended-audience-and-reading-suggestions)
   - [1.4 Project Scope](#14-project-scope)
   - [1.5 Scope](#15-references)
- [2. Overall Description](#2-overall-description)
   -  [2.1 Product Perspective](#21-product-perspective)
   -  [2.2 Product Features](#22-product-features)
   -  [2.3 User Classes and Characteristics](#23-user-classes-and-characteristics)
   -  [2.4 Operating Environment](#24-operating-environment)
   -  [2.5 Design and Implementation Constraints](#25-design-and-implementation-constraints)
   -  [2.6 User Documentation](#26-user-documentation)
   -  [2.7 Assumptions and Dependencies](#27-assumptions-and-dependencies)
-  [3. System Features](#3-system-features)
   -  [3.1 Admin Features](#31-admin-features)
   -  [3.2 User Features](#32-user-features)
   -  [3.2 Trainer Features](#33-trainer-features)
-  [4. External Interface Requirements](#4-external-interface-requirements)
   -  [4.1 User Interface Requirements](#41-user-interface-requirements)
   -  [4.2 Hardware Interface Requirements](#42-hardware-interface-requirements)
   -  [4.3 Software Interface Requirements](#43-software-interface-requirements)
   -  [4.4 Communication Interface Requirements](#44-communication-interface-requirements)
-  [5. Nonfunctional Requirements](#5-nonfunctional-requirements)
   -  [5.1 Performance Requirements](#51-performance-requirements)
   -  [5.2 Safety Requirements](#52-safety-requirements)
   -  [5.3 Security Requirements](#53-security-requirements)
   -  [5.4 Software Quality Attributes](#54-software-quality-attributes)

## 1. Introduction

   - ### **1.1 Purpose**
      The purpose of the Smart CO2 Converter is to empower individuals to become more climate-conscious by providing them with actionable insights into their carbon footprint. The application aims to analyze users' daily activities, calculate their CO2 emissions, and offer personalized recommendations to reduce their environmental impact. By leveraging advanced technologies such as SAP Cloud Application Programming (CAP) model, React Native, and Azure Open AI, the Smart CO2 Converter helps users make informed decisions towards sustainable living, thus promoting environmental responsibility and contributing to global efforts in combating climate change.

   - ### **1.2 Document Conventions**
      Smart CO2nverter makes use of the following conventions: 
      Conventions        | Definition
      -----------        | -----------
      RAM                | Random Access Memory 
      SmartCO2 Members   | Person who is using the services of the Fitbit application 
      PC                 | Personal Computer
      Stakeholders       | Any person with an interest in the project who is not a developer 
      Web                | Web Based (to run application on web)
      Android            | A mobile devices operating system designed by Google Inc. 
      iOS                | An operating system created and developed by Apple Inc. 
      GHz                | Gigahertz 



   -  ### **1.3 Intended Audience and Reading Suggestions**
         
         -  Developers: to be sure they are developing the right project that fulfils requirements provided in this document. 
         -  Testers: to have an exact list of the features and functions that must respond according to requirements and provided diagrams. 
         -  Test Members: to get familiar with the idea of the project and suggest other features that would make it even more functional. 
         -  Stakeholders: To review and provide feedback on the system specifications.
         -  Documentation writers: to know what features and in what way they must explain. What security technologies are required, how the system will response in each user’s action etc. 
         -  Admin, Customers, Members: to know exactly what they must expect from the system, right inputs and outputs and response in error situations.

   -  ### **1.4 Project Scope**
      This system is aimed to give better out look to the user interfaces and to provide wellness information to the Fitbit Members. This project is a mobile and a web application where users can access the application while doing any physical activity. The main purpose of this system is to make users know their physical activity benefits and encourage them to work out more. This application can help users to track their fitness activities like how much calories they have burned, steps they have taken, distance they have walked, heart rate tracking etc. This application can help users who have joined gym recently in making their AI enabled workout schedule and help them in defining their fitness goal. It can also help in developing a diet and nutrition chart based on the current fitness condition of the user. The user can either be a consumer of fitness details or fitness consultant, a user can be fitness consultant only when its certification is verified. Once the user is verified as consultant, they can provide consultations to other users either for free or for a charge depending upon them and can share information with them. The consultation will be of either 30 minutes or 1 hour duration and users can rate the consultants based upon their liking. 

   -  ### **1.5 References**
         - Fitbit Help Center: https://help.fitbit.com/
         - Fitbit research studies:
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6629209/
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4872186/
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5534733/
         - Sichuan University Documents: https://www.studocu.com/row/document/sichuan-university
         - Nike Training Club: https://www.nike.com/ntc-app


##  **2. Overall Description**

   - ### **2.1 Product Perspective**
      This Fitbit App is an independent system designed to handle various activities related to a gym, including exercises, generating member's report, managing trainers, and handling administrative issues. The system stores all records in a centralized database, which can only be accessed by the admin with unique IDs and specific permissions. To ensure data integrity, members are not permitted to modify records belonging to other Fitbit Members. Additionally, the system offers data recovery options in case of any lost data.
   -  ### **2.2 Product Features**
      Fitbit is an app that provides fitness and wellness advice to its users through a set of exercise activities, nutritional diet charts, and even real-time health coaching. The app utilizes artificial intelligence, machine learning, and other technologies to provide personalized fitness programs to our fitbit members.
      The major feature of our app includes:

      -  Footstep & Activity Tracker
      -  Heart Monitoring                             
      -  Water & Sleep Tracker
      -  BMI Calculator
      -  Altimeter - for tracking stairs climbed
      -  Online consultation with trainers
      -  Helps to Monitor Diet
      -  AI-enabled workout schedule
      
   -  ### 2.3 **User Classes and Characteristics**
      Our app is available for download on both the Play Store for Android devices and the App Store for Apple devices. The app is designed to cater to three types of users: Trainers, Fitbit Members, and Administrators.

         - Trainers:
             These are the people who can create and share workout schedules and activities for our Fitbit members. To ensure quality service, Trainers are required to possess at least a basic certification as an instructor.
         -  Fitbit Members:
      These are the individuals who are interested in improving their lifestyle and seeking guidance from our verified trainers. These individuals can access a range of consultation services through our app to achieve their fitness goals.
         -  Administrators:
      The role of an Administrator in our app is to have complete access to all users, including both Fitbit Members and Trainers, as well as AI-generated workouts. Administrators should possess a sound understanding of health and fitness to ensure that they can effectively verify a Trainer's profile.


 -  ### **2.4 Operating Environment**
Fitbit will be used over smartphones:
           
           Android: Lollipop 5.1.0 or above
           IOS: 12.0.0 or above
           RAM: 512MB or above


 -  ### **2.5 Design and Implementation Constraints**
      These are the limitations and guidelines that need to be considered during the development of the Fitbit application. Some of the design and implementation constraints for the Fitbit application are:
       -  Platform constraints: The Fitbit application should be designed and implemented to be compatible with a variety of platforms, including Android, iOS, and web-based platforms.
       -  Data security constraints: The application should be designed with a robust security system that protects user data and personal information.
       -  Performance constraints: The application should be designed and implemented to provide efficient and fast performance, with a focus on reducing loading times and minimizing resource usage.
       -  User interface constraints: The application should be designed with a user-friendly interface that is easy to navigate and understand.
       -  Device compatibility constraints: The application should be designed to work on a range of devices, including smartphones, tablets, and wearable devices.
       -  API and integration constraints: The application should be designed and implemented to integrate with other fitness and health-related applications and APIs.
       -  Localization constraints: The application should be designed to support multiple languages and regions, with a focus on providing a localized experience for users in different countries and regions.
 
   -  ### **2.6 User Documentation**
      
      User documentation for Fitbit includes a range of materials that are designed to help users understand how to use and get the most out of their Fitbit device and app. Some of them are as follows:

      - Quick start guide: This document provides a brief overview of the Fitbit device and how to set it up for use.

      - User manual: The user manual provides more detailed instructions for using the Fitbit device and app, including how to track activity, set goals, and use advanced features.

      - Online help center: Fitbit provides an online help center that includes articles and tutorials on how to use specific features of the app and device, as well as troubleshooting tips and frequently asked questions.

      - In-app help: The Fitbit app also includes in-app help, which can be accessed from within the app itself to provide users with real-time guidance on how to use specific features.

      - Community forums: Fitbit also maintains community forums where users can ask questions, share tips and advice, and connect with other Fitbit members.

   -  ### **2.7 Assumptions and Dependencies**
    
       -  Performance: It may include performance requirements for the  app, such as response time, scalability, and availability.
       -  User Base: It is assumed that the app is having enough pre-joined trainers who can deal with the newly joined fitbit members.
       -  Pre Knowledge :It is assumed that the administrator should have good knowledge of fitness and health so that they can validate the trainer’s profile.
       -  Platform: It is assumed that the platform on which the fitness app will run, such as iOS or Android.
       -  User Interface: It is assumed that a user interface design for the fitness app, including a color scheme, logo, and overall layout.
       -  Integration: Integration with other third-party services, such as fitness tracking devices, payment gateways, and social media platforms is assumed.
       -  Security: The SRS document may assume security features for the app, such as secure login, data encryption, and access control.
       -  Maintenance: The SRS document may assume maintenance requirements for the fitness app, such as bug fixing, software updates, and technical support.



## 3. System Features

   - ### **3.1 Admin Features**

      The features that are available to the Admin are:  

      -   Admin can Add / Delete / Update Trainers and Fitbit member details.  
      -   Admin has all rights to view the details of fitbit members.  
      -   Admin can also view Transaction Details and update fitness membership packages with the trainers. 
      -   Validate and verify trainers based upon their certification and feedback.

   - ### **3.2 User Features**

      The features that are available to the members are  

      -   Can view profile history and details  
      -   Makes inquiries and can take training membership.  
      -   Can schedule a fitness consultancy session. 
      -   Can view their past fitness records. 
      -   Can create their self-fitness goals. 
      -   Can give feedback to the trainers. 
      -   Can provide feedback to the trainers and the fitness consultants 
  
   - ### **3.3 Trainer Features**

      The features that are available to the Trainer are:  

      -   Trainer can view Member details who have subscribed to them.  
      -   Accept or reschedule consultancy sessions with the members. 
      -   Provide their fitness work-out details to the members. 
      -   Can charge fees from the subscribed members. 
      -   Trainers can also add blogs and videos about their activities. 

## 4. External Interface Requirements
   - ### **4.1 User Interface Requirements**
   
      Fitbit is designed to provide a user-friendly and engaging experience for members to access and manage their fitness data. The app is customizable, easy to navigate, and visually appealing, with features such as notifications and integrations with other apps to keep members motivated and engaged. The app is also accessible to members with disabilities and support multiple languages.

      - Easy navigation: The Fitbit app should have an intuitive interface that is easy to navigate, with clear labeling of features and options.
      - Customization: The user interface should allow members to customize their experience, such as choosing which metrics to track or setting personal goals.
      -  Visual feedback: The app should provide clear visual feedback, such as charts and graphs, to help members track their progress and understand their fitness data.
      -  Notifications: The app should provide notifications, such as reminders to move or congratulatory messages for hitting goals, to help motivate and engage members.
      -  Integration with other apps: The app may integrate with other health and fitness apps, such as calorie trackers or meditation apps, to provide a comprehensive view of a members health and wellness.
      -  Accessibility: The app should be accessible to members with disabilities, with features such as high contrast mode or voice command options.
      -  Multilingual support: The app should support multiple languages to make it accessible to members around the world.
      -  Membership Subscription Plan: The user interface shall allow users to view the membership subscription plans offered by the fitbit application and choose the plan that best fits their needs. The membership subscription plan page shall display the benefits and pricing of each plan. 

   -  ### **4.2 Hardware Interface Requirements**
   
      This system doesn’t require any specific hardware interface. The one used here is a smartphone. The system should have these hardware requirements    minimum of:  

         -  Processor: Any processor with 1.5GHz speed 
         -  Android: Lollipop 5.1.0 or above 
         -  IOS: 12.0.0 or above 
         -  RAM: 512MB or above 
         -  Memory: 4GB or above 
     
   -  ### **4.3 Software Interface Requirements**
      
         - Operating system compatibility: The Fitbit app and device may require a specific operating system (OS) version to function properly. The app may be available for iOS, Android, and Windows devices, and may require a minimum OS version for each.

         - API access: Fitbit may offer an API (application programming interface) that allows third-party developers to access and integrate Fitbit data into their own apps or services.

         - SDK availability: Fitbit may offer a software development kit (SDK) that allows developers to create custom apps or features for Fitbit devices.
         
         - Data transfer protocols: Fitbit devices may use specific data transfer protocols to send data to the Fitbit app, such as Bluetooth or Wi-Fi.

         - Data storage: Fitbit may store user data, including fitness activity, sleep data, and other metrics, on their servers or in the cloud. Users may be able to access and manage their data through the app or web interface.
         
         - Payment Gateway: The various membership plans integrate with a payment gateway to process user payments for subscription plans and other transactions. The payment gateway shall ensure secure and reliable payment processing and shall support different payment methods, including credit cards, PayPal, and other online payment systems. 
      
   -  ### **4.4 Communication Interface Requirements**
   
         - Bluetooth connectivity: Fitbit devices use Bluetooth to connect to a members mobile device, allowing for data to be synced between the device and the Fitbit app.
         - Wi-Fi connectivity: Fitbit devices may also be able to connect to Wi-Fi networks for more seamless data syncing and to access additional features such as music streaming and app updates.
         - USB connectivity: Fitbit devices may also be able to connect to a members computer via USB cable to update firmware or transfer data.
         - Mobile app interface: The Fitbit app provides a user-friendly interface for members to access and manage their fitness data, set goals, and track progress. The app may also offer social features, guided programs, and third-party integrations.
         - Web interface: Fitbit also provides a web interface that allows members to access and manage their data, as well as to purchase new devices and accessories.
         - Notifications: Fitbit devices and app may use notifications, such as push notifications, to communicate with members about activity progress, reminders, and other updates.
      
## **5. Nonfunctional Requirements**

   -  ### **5.1 Performance Requirements**
       
       Performance requirements in a fitness app refer to the specific expectations or goals related to how the app should function in terms of speed, responsiveness, and resource utilization. Some of the performance requirements that could be considered for a health & fitness app are:
        
         - Response Time: The app should respond to user interactions (such as opening the app or navigating between screens) within a specified time frame to provide a smooth and seamless experience.
         - Scalability: The app should be designed and implemented to handle increased traffic and usage as more members download and use the app.
         - Availability: The app should be available to members at all times without any downtime or interruptions in service.
         - Resource Utilization: The app should be designed to use the minimum amount of system resources such as CPU, memory, and battery power to ensure optimal performance and reduce device load.
         - User Concurrent Access: The app should be able to handle multiple members accessing the app simultaneously without slowing down or crashing.
         
   -  ### **5.2 Safety Requirements**

         - Secure user data: Fitbit should protect the privacy of member's data by securely storing and transmitting personal information.
         - User consent: Fitbit should clearly inform members about how their data will be used and obtain their consent before collecting any data.
         - Safe user interface: Fitbit should provide a safe and secure user interface that is free from vulnerabilities that could be exploited by attackers.
         - Secure network communication: Fitbit should encrypt data transmitted over the network to prevent unauthorized access.
         - Appropriate use of permissions: Fitbit should only request necessary permissions and clearly explain why each permission is needed.
         - Data retention policy: Fitbit should have a clear policy on how long member data is retained and how it is deleted when no longer needed.
         - Regular security updates: Fitbit should regularly release security updates to patch any known vulnerabilities.


   -  ### **5.3 Security Requirements**

      This system is provided with authentication without which no member can pass. So only the legitimate members are allowed to use the application. If the legitimate member's share the authentication information, then the system is open to outsiders. Security requirements for a health & fitness app refer to the measures that should be taken to ensure the protection of member data and prevent unauthorized access to the app or its features. Here are some key security requirements that should be considered for a fitness app:
        -  Secure data storage: applications should securely store member data on the device and ensure that sensitive data such as passwords, credit card details, or other personal information is encrypted and protected.
        -  Secure data transmission: Applications should use secure protocols like HTTPS to encrypt data transmitted between the mobile device / PC and server to prevent man-in-the-middle attacks.
        -  User authentication and authorization: Applications should provide secure user authentication and authorization mechanisms, such as two-factor authentication, to ensure that only authorized members can access sensitive data or functionality.
        -  Access control: Applications should restrict access to sensitive data or features to authorized members only and limit the permissions granted to each member based on their role or level of access.
        
   -  ### **5.4 Software Quality Attributes**

        -  Reliability: Good validations of members inputs will be done to avoid incorrect storage of records. 
        -  Maintainability: During the maintenance stage, SRS document can be referred for any validations. 
        -  Portability: This system can be easily viewed in any mobile OS or PC OS above the mentioned software version.
        -  Flexibility: The system keeps on updating the data according to the fitness activity that takes place. 
        -  Timeless: The system carries out all the operations with consumption of very less time. 
        -  Security: Security of the system is maintained by giving access to only authenticated member id and password.

