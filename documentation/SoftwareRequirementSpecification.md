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
      SmartCO2 Members   | Person who is using the services of the Smart C02nverter application 
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
         -  Admin, Business Customers, Members: to know exactly what they must expect from the system, right inputs and outputs and response in error situations.

   -  ### **1.4 Project Scope**
      The Smart CO2 Converter application aims to empower consumers by providing insights into their carbon footprint based on daily activities. It leverages SAP CAP, React Native, and Azure Open AI to offer personalized recommendations for reducing CO2 emissions, thereby promoting environmental sustainability and responsible behavior.

   -  ### **1.5 References**
         - [Consume OpenAI services (GPT) through CAP & SAP AI Core](https://github.com/SAP-samples/azure-openai-aicore-cap-api)
         - [SAP BTP Product Page](https://help.sap.com/viewer/product/CP/Cloud/en-US?task=discover_task)
         - [What Is SAP BTP](https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/73beb06e127f4e47b849aa95344aabe1.html)
         - [About CAP](https://cap.cloud.sap/docs/about/)
         - [Learn how to get started](https://cap.cloud.sap/docs/get-started/)
         - [CAP Documentation](https://cap.cloud.sap/)
         - [See CAP Samples](https://cap.cloud.sap/docs/resources/#public-resources)
         - [React Native](https://reactnative.dev/)
         - [Expo](https://expo.dev/)
         - [Overview of SAP BTP connectivity and destination services](https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/what-is-sap-btp-connectivity)
##  **2. Overall Description**

   - ### **2.1 Product Perspective**
      The Smart CO2 Converter is a standalone mobile application that integrates with SAP Business Technology Platform (BTP) for data management and Azure Open AI for generating insights. It is designed to be user-friendly and provide real-time feedback on users' carbon footprints.

   -  ### **2.2 Product Features**
      Smart C02nverter is an app that provides fitness and wellness advice to its users through a set of exercise activities, nutritional diet charts, and even real-time health coaching. The app utilizes artificial intelligence, machine learning, and other technologies to provide recommendations to our members.
      The major feature of our app includes:

      - Activity analysis and CO2 footprint calculation.
      - Personalized insights and recommendations.
      - Emissions tracking and visualization.
      - User engagement and educational content.
      
   -  ### 2.3 **User Classes and Characteristics**
      Our app is available for download on both the Play Store for Android devices and the App Store for Apple devices. The app is designed to cater to three types of users: Admins, SmartCO2 Consumers, and Environmentalist.

         - Admins: Manage system configurations and monitor overall application performance.
         - SmartCO2 Consumers: General consumers who use the app to track and reduce their carbon footprint.
         - Trainers/Environmentalist: Environmental experts who provide additional insights and support to users.


 -  ### **2.4 Operating Environment**
         - Mobile Platforms: iOS and Android.
         - Backend: SAP BTP and Azure Open AI services.
         - Development Tools: React Native, SAP CAP.


 -  ### **2.5 Design and Implementation Constraints**
      These are the limitations and guidelines that need to be considered during the development of the Smart C02nverter application. Some of the design and implementation constraints for the Smart C02nverter application are:
       -  Platform constraints: The smart CO2nverter application should be designed and implemented to be compatible with a variety of platforms, including Android, iOS, and web-based platforms.
       -  Data security constraints: The application should be designed with a robust security system that protects user data and personal information.
       -  Performance constraints: The application should be designed and implemented to provide efficient and fast performance, with a focus on reducing loading times and minimizing resource usage.
       -  User interface constraints: The application should be designed with a user-friendly interface that is easy to navigate and understand.
       -  Device compatibility constraints: The application should be designed to work on a range of devices, including smartphones, tablets, and wearable devices.
       -  API and integration constraints: The application should be designed and implemented to integrate with other fitness and health-related applications and APIs.
       -  Localization constraints: The application should be designed to support multiple languages and regions, with a focus on providing a localized experience for users in different countries and regions.
 
   -  ### **2.6 User Documentation**
      
      User documentation for smart CO2nverter includes a range of materials that are designed to help users understand how to use and get the most out of their smart CO2nverter app. Some of them are as follows:

      - Quick start guide: This document provides a brief overview of the smart CO2nverter and how to set it up for use.

      - User manual: The user manual provides more detailed instructions for using the smart CO2nverter app, including how to track activity, set goals, and use advanced features.

      - Online help center: smart CO2nverter provides an online help center that includes articles and tutorials on how to use specific features of the app , as well as troubleshooting tips and frequently asked questions.

      - In-app help: The smart CO2nverter app also includes in-app help, which can be accessed from within the app itself to provide users with real-time guidance on how to use specific features.

      - Community forums: Smart CO2nverter also maintains community forums where users can ask questions, share tips and advice, and connect with other smart CO2nverter consumers or environmentalist.

   -  ### **2.7 Assumptions and Dependencies**
    
       -  Performance: It may include performance requirements for the  app, such as response time, scalability, and availability.
       -  User Base: It is assumed that the app is having enough pre-joined trainers who can deal with the newly joined Smart C02nverter members.
       -  Pre Knowledge :It is assumed that the administrator should have good knowledge of fitness and health so that they can validate the trainer’s profile.
       -  Platform: It is assumed that the platform on which the fitness app will run, such as iOS or Android.
       -  User Interface: It is assumed that a user interface design for the fitness app, including a color scheme, logo, and overall layout.
       -  Integration: Integration with other third-party services, such as fitness tracking devices, payment gateways, and social media platforms is assumed.
       -  Security: The SRS document may assume security features for the app, such as secure login, data encryption, and access control.
       -  Maintenance: The SRS document may assume maintenance requirements for the fitness app, such as bug fixing, software updates, and technical support.



## 3. System Features

   - ### **3.1 Admin Features**

      The features that are available to the Admin are:  

      -   Manage user accounts and permissions.
      -   Configure system settings and preferences.
      -   Monitor system performance and usage statistics.

   - ### **3.2 User Features**

      The features that are available to the consumers are  

      -   Register and log in to the application.
      -   Input daily activities and receive CO2 footprint calculations.
      -   View personalized insights and recommendations.
      -   Track CO2 footprint over time with visualizations.
      -   Access educational content on sustainable practices.
  
   - ### **3.3 Trainer Features**

      The features that are available to the Trainer are:  

      -   Provide additional insights and support to users.
      -   Create and manage educational content.
      -   Engage with users through the app’s communication channels.

## 4. External Interface Requirements
   - ### **4.1 User Interface Requirements**
   
      Smart C02nverter is designed to provide a user-friendly and engaging experience for members to access and manage their fitness data. The app is customizable, easy to navigate, and visually appealing, with features such as notifications and integrations with other apps to keep members motivated and engaged. The app is also accessible to members with disabilities and support multiple languages.

      - Easy navigation: The Smart C02nverter app should have an intuitive interface that is easy to navigate, with clear labeling of features and options.
      - Customization: The user interface should allow members to customize their experience, such as choosing which metrics to track or setting personal goals.
      -  Visual feedback: The app should provide clear visual feedback, such as charts and graphs, to help members track their progress and understand their Smart C02nverter data.
      -  Notifications: The app should provide notifications, such as reminders to move or congratulatory messages for hitting goals, to help motivate and engage members.
      -  Integration with other apps: The app may integrate with other health and fitness apps, such as calorie trackers or meditation apps, to provide a comprehensive view of a members health and wellness.
      -  Accessibility: The app should be accessible to members with disabilities, with features such as high contrast mode or voice command options.
      -  Multilingual support: The app should support multiple languages to make it accessible to members around the world.
      -  Membership Subscription Plan: The user interface shall allow users to view the membership subscription plans offered by the Smart C02nverter application and choose the plan that best fits their needs. The membership subscription plan page shall display the benefits and pricing of each plan. 

   -  ### **4.2 Hardware Interface Requirements**
   
      This system doesn’t require any specific hardware interface. The one used here is a smartphone. The system should have these hardware requirements    minimum of:  

         -  Processor: Any processor with 1.5GHz speed 
         -  Android: Lollipop 5.1.0 or above 
         -  IOS: 12.0.0 or above 
         -  RAM: 512MB or above 
         -  Memory: 4GB or above 
     
   -  ### **4.3 Software Interface Requirements**
      
         - Operating system compatibility: The Smart C02nverter app and device may require a specific operating system (OS) version to function properly. The app may be available for iOS, Android, and Windows devices, and may require a minimum OS version for each.

         - API access: Smart C02nverter may offer an API (application programming interface) that allows third-party developers to access and integrate Smart C02nverter data into their own apps or services.

         - SDK availability: Smart C02nverter may offer a software development kit (SDK) that allows developers to create custom apps or features for Smart C02nverter devices.
         
         - Data transfer protocols: Smart C02nverter devices may use specific data transfer protocols to send data to the Smart C02nverter app, such as Bluetooth or Wi-Fi.

         - Data storage: Smart C02nverter may store user data, including fitness activity, daily consumption of goods, and other metrics, on their servers or in the cloud. Users may be able to access and manage their data through the app or web interface.
         
         - Payment Gateway: The various membership plans integrate with a payment gateway to process user payments for subscription plans and other transactions. The payment gateway shall ensure secure and reliable payment processing and shall support different payment methods, including credit cards, PayPal, and other online payment systems. 
      
   -  ### **4.4 Communication Interface Requirements**
   
         - Bluetooth connectivity: Smart C02nverter devices use Bluetooth to connect to a members mobile device, allowing for data to be synced between the device and the Smart C02nverter app.
         - Wi-Fi connectivity: Smart C02nverter devices may also be able to connect to Wi-Fi networks for more seamless data syncing and to access additional features such as music streaming and app updates.
         - USB connectivity: Smart C02nverter devices may also be able to connect to a members computer via USB cable to update firmware or transfer data.
         - Mobile app interface: The Smart C02nverter app provides a user-friendly interface for members to access and manage their fitness data, set goals, and track progress. The app may also offer social features, guided programs, and third-party integrations.
         - Web interface: Smart C02nverter also provides a web interface that allows members to access and manage their data, as well as to purchase new devices and accessories.
         - Notifications: Smart C02nverter devices and app may use notifications, such as push notifications, to communicate with members about activity progress, reminders, and other updates.
      
## **5. Nonfunctional Requirements**

   -  ### **5.1 Performance Requirements**
       
       Performance requirements in a fitness app refer to the specific expectations or goals related to how the app should function in terms of speed, responsiveness, and resource utilization. Some of the performance requirements that could be considered for a health & fitness app are:
        
         - Response Time: The app should respond to user interactions (such as opening the app or navigating between screens) within a specified time frame to provide a smooth and seamless experience.
         - Scalability: The app should be designed and implemented to handle increased traffic and usage as more members download and use the app.
         - Availability: The app should be available to members at all times without any downtime or interruptions in service.
         - Resource Utilization: The app should be designed to use the minimum amount of system resources such as CPU, memory, and battery power to ensure optimal performance and reduce device load.
         - User Concurrent Access: The app should be able to handle multiple members accessing the app simultaneously without slowing down or crashing.
         
   -  ### **5.2 Safety Requirements**

         - Secure user data: Smart C02nverter should protect the privacy of member's data by securely storing and transmitting personal information.
         - User consent: Smart C02nverter should clearly inform members about how their data will be used and obtain their consent before collecting any data.
         - Safe user interface: Smart C02nverter should provide a safe and secure user interface that is free from vulnerabilities that could be exploited by attackers.
         - Secure network communication: Smart C02nverter should encrypt data transmitted over the network to prevent unauthorized access.
         - Appropriate use of permissions: Smart C02nverter should only request necessary permissions and clearly explain why each permission is needed.
         - Data retention policy: Smart C02nverter should have a clear policy on how long member data is retained and how it is deleted when no longer needed.
         - Regular security updates: Smart C02nverter should regularly release security updates to patch any known vulnerabilities.


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

