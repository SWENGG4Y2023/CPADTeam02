# Software Design Document

## Table of Contents
- [1. Project Information](#1-project-information)
- [2. Software Design Fundamentals](#2-software-design-fundamentals)
   -  [2.1 Context of Software Design](#21-context-of-software-design)
   -  [2.2 High Level Application Design](#22-high-level-application-design)
   -  [2.3 Software Design Model](#23-software-design-model)
   -  [2.4 Software Design Principles](#24-software-design-principles)
-  [3. Activity Diagram](#3-activity-diagram)
-  [4. Key Issues in Software Design](#4-key-issues-in-software-design)
   -  [4.1 Error and Exception Handling](#41-error-and-exception-handling)
   -  [4.2 Security Issues](#42-security-issues)
   -  [4.3 Concurrency Issues](#43-concurrency-issues)
-  [5. Software Design Quality Analysis and Evaluation](#5-software-design-quality-analysis-and-evaluation)
   -  [5.1 Non Functional Requirements](#51-non-functional-requirements)
   -  [5.2 Software Design Quality Analysis and Evaluation Technique](#52-software-design-quality-analysis-and-evaluation-technique)
## 1 **Project Information**

Fitbit Health and Wellness application monitors the health of a Fitbit member and provides information to them so that they can have a healthy lifestyle.

## 2 **Software Design Fundamentals**
### 2.1 **Context of Software Design**

The Fitbit Application is a comprehensive and autonomous system which is developed to help multiple aspects of gym exercises. It efficiently manages exercise routines, generates detailed reports for members, handles trainer management, and effectively addresses administrative tasks. All data is securely stored in a centralized database accessible solely by the admin, who possesses unique IDs and carefully assigned permissions. The application has data integrity, strict restrictions which prevents members from modifying records belonging to other Fitbit Members. Moreover, the system incorporates robust data recovery mechanisms to safeguard against any potential loss of information.

### 2.2 **High Level Application Design**

Fitbit Application provides health and wellness consultation and advice to its subscribed members where they can enroll to different features present in it also. Fitbit also takes input from the members such as body weight, body height, age, disease (if any) and they can manually select their health goal. The AI model then computes the information and provides data to the subscribed member regarding BMS Index, diet chart, regular exercise routines, how much steps and stairs should be covered by the member in a day. The information consumed by our application is strictly confidential and private and cannot be shared to any third-party application.
List of features present in the Fitbit Application:
1.	Footstep & Activity Tracker
2.	Heart Monitoring
3.	Water & Sleep Tracker
4.	BMI Calculator
5.	Altimeter - for tracking stairs climbed 
6.	Online consultation with trainers
7.	Helps to Monitor Diet
8.	AI-enabled workout schedule

<img height="500" width="500" alt="Fitbit" src="https://raw.githubusercontent.com/SWENGG4Y2023/SWENGG4Y2023Team02/main/Assignment02/UML%20Diagrams/WebAppDesign.png"> <img height="500" width="500" alt="Fitbit" src="https://raw.githubusercontent.com/SWENGG4Y2023/SWENGG4Y2023Team02/main/Assignment02/UML%20Diagrams/MobileAppDesign.png">

### 2.3 Software Design Model

For designing the Fitbit Application, the development team follows Agile Model where all the requirements are gathered which can be fulfilled and are achievable. A desired plan was made of how these requirements can achieved in a stipulated amount of time. Creation of model was done where the planning flow was broadened up and a set of technologies were decided to construct the application, from the decided tech-stack the basic layout of application was built and if a new high priority requirement was introduced, was entertained in the same sprint. After the completion of sprint, retrospective is conducted to know what can be improved in upcoming development tasks. After the completion of retrospective, planning for next sprint starts.

### 2.4 **Software Design Principles**

Principles followed in designing the application:

1.	Gather Requirements: Understanding the need of application from a subscribed member perspective is important. Document these requirements to serve as a reference throughout the design process.

2.	Designing the model in iterations: Analyse the gathered requirements from various stakeholders and create a design of how the application should look when it is released.

3.	Creating technical architecture: Define an overall architecture of the application which includes all the technical components that needs to be constructed and which tools and modules should be used in development.

4.	Prototyping a feature: Create a Proof of Concept (POC) where the most important and basic features are developed which are the need of a subscribe member and gather feedback that can improve the functionality of the software.

5.	Design Review and Refinement: After gathering feedback from the stakeholders, work on its implementation and make changes to the modelling and architecture if necessary. The requirements and feedback gathered should not be repetitive.

6.	High Performance: Achieving high performance in software is a critical goal to ensure optimal speed, responsiveness, and efficiency of an application.

7.	Data Privacy and Security: Subscribed member’s data should be used in safe and secure way and should not be shared with any third party software. Access to member’s data should be given to only the admin of the application.

8.	Continuous Monitoring: Application should be monitored after it is released to know its performance and how the members are interacting with it. It should be monitored to know and report if any illegal activity is happening with the help of application by any subscribed member.

## 3 **Activity Diagram**

<img alt="Fitbit" src="https://raw.githubusercontent.com/SWENGG4Y2023/SWENGG4Y2023Team02/main/Assignment02/UML%20Diagrams/ActivityDiagram.png">

## 4 **Key Issues in Software Design**
### 4.1 Error and Exception Handling

1.	Scalability: The Fitbit application should be designed to handle a large user base and accommodate future growth. Consider the scalability of the architecture, databases, and infrastructure to handle increasing data volumes, user requests, and concurrent users.
2.	Performance: Ensure that the Fitbit application is responsive and performs optimally. Optimize database queries, minimize network latency, and optimize code to deliver a smooth user experience, especially when handling real-time data from Fitbit devices.
3.	Integration with Fitbit devices: Design the application to seamlessly integrate with Fitbit wearable devices, ensuring reliable data synchronization, device pairing, and real-time data streaming. Consider the compatibility of different Fitbit device models and ensure a consistent user experience across devices.
4.	User Interface and User Experience: Focus on creating an intuitive and user-friendly interface that allows users to easily navigate through features, track their health data, set goals, and interact with the application. Prioritize usability, visual appeal, and accessibility to cater to a diverse user base.
5.	Data Management: Develop a robust data management strategy that ensures the secure storage, backup, and recovery of user data. Consider data privacy regulations, implement data anonymization and pseudonymization techniques, and regularly perform data backups to prevent data loss.

### 4.2 Security Issues

Protecting user data is paramount in a health and fitness application. Implement strong authentication mechanisms, secure data transmission using encryption, enforce access control to prevent unauthorized access, and follow industry best practices for securing user information. 
Here is the list of security issues that needs to be taken care of while developing a Health and Fitness Application:

1.	User Authentication: Fitbit should implement a strong authentication mechanism to ensure that only authorized users can access their accounts. This includes enforcing password complexity rules and protection against brute-force attacks.

2.	Data Encryption: Fitbit should encrypt sensitive data both at rest and in transit. This includes encrypting data stored on servers, as well as data transmitted between the application and backend systems, to protect against unauthorized access and data breaches.

3.	Secure APIs: Fitbit may expose APIs for integration with third-party applications. It is crucial to ensure that these APIs are secure and follow industry best practices. Implement strong authentication and authorization mechanisms, rate limiting, and input validation to prevent unauthorized access and API abuse.

4.	Secure Data Storage: Fitbit should employ robust security measures to protect user data stored on servers. This includes using strong encryption algorithms, implementing access controls and permissions, regularly patching and updating software, and conducting regular security audits and vulnerability assessments.

5.	Privacy Settings: Fitbit should provide users with granular privacy settings to control the sharing and visibility of their personal health data. Users should have the ability to choose what information is shared with others, including friends, groups, and social communities.

6.	Secure Bluetooth Communication: Fitbit devices communicate with the application via Bluetooth. It is important to ensure that the Bluetooth communication is secure and protected against interception or unauthorized access. Implement secure Bluetooth protocols and encryption to safeguard data transmission.

### 4.3 Concurrency Issues

Developing a health & Fitness Application involves addressing various concurrency issues to ensure smooth and reliable operation. Here are some common concurrency challenges that can be faced in software development:

1.	Data Synchronization: Fitbit application may involve syncing data from multiple sources, such as Fitbit devices and user inputs from different devices. Ensure that concurrent data synchronization processes are handled correctly to prevent data inconsistencies or conflicts.

2.	Database Concurrency: Multiple users accessing and modifying data concurrently can lead to conflicts and data integrity issues. Implement appropriate concurrency control mechanisms, such as transactions, locks, or optimistic concurrency control, to manage concurrent database access and maintain data consistency.

3.	Thread Safety: If the Fitbit application utilizes multiple threads or processes, pay attention to thread safety. Ensure that shared data structures or resources are accessed and modified safely to prevent data corruption or race conditions. Use synchronization primitives, thread-safe data structures, or message passing mechanisms to coordinate concurrent activities.

4.	Asynchronous Operations: Fitbit application may involve asynchronous operations, such as network requests, data processing, or background tasks. Proper handling of asynchronous operations is crucial to avoid blocking the user interface and ensure smooth execution without conflicts or data inconsistencies.

## 5 Software Design Quality Analysis and Evaluation
### 5.1 Non Functional Requirements

1. Non-Functional Requirements, also known as Quality attributes or system qualities, are the desired characteristics or properties of a software system that define its overall quality. Some of the non-functional requirements are:

2. Reliability: Reliability refers to the ability of a software system to perform its intended functions accurately and consistently over a specified period. It includes attributes such as fault tolerance, availability, recoverability, and error handling.

3. Performance: Performance relates to the system's responsiveness, efficiency, scalability, and resource utilization. It encompasses attributes like response time, throughput, latency, and capacity. Performance goals ensure that the system meets user expectations and can handle expected loads.

4. Maintainability: Maintainability focuses on the ease with which the software can be modified, enhanced, and repaired over its lifecycle. It includes attributes such as modularity, readability, extensibility, reusability, and testability. A maintainable system reduces maintenance efforts, enables quick bug fixes, and supports future enhancements.

5. Usability: Usability relates to the ease of use, learnability, and user satisfaction with the software system. It encompasses attributes such as user interface design, intuitiveness, consistency, accessibility, and documentation. A usable system ensures a positive user experience and minimizes user errors or frustrations.

6. Interoperability: Interoperability relates to the system's ability to interact and exchange data with other systems or components, often in a heterogeneous environment. It includes attributes such as adherence to standards, support for protocols and data formats, and compatibility with external systems. Interoperability enables seamless integration and collaboration between different software components.

### 5.2 Software Design Quality Analysis and Evaluation Technique

some quality analysis techniques used are:

1. Code Reviews: Code reviews involve manual examination of the source code by peers or experts to identify defects, ensure adherence to coding standards, and improve overall code quality. This technique promotes collaboration, knowledge sharing, and early bug detection.

2. Static Code Analysis: Static code analysis tools automatically analyze source code without executing it. These tools identify potential coding issues, such as syntax errors, code smells, security vulnerabilities, and adherence to coding standards. Static code analysis helps in early defect detection and code quality improvement.

3. Unit Testing: Unit testing involves writing and executing small, focused tests on individual code units, such as functions or methods. It verifies the correctness of individual units and helps identify defects early in the development process. Unit testing frameworks and techniques, such as Test-Driven Development (TDD), play a crucial role in ensuring software quality.

4. Security Testing: Security testing focuses on identifying vulnerabilities and weaknesses in the software's security controls. Techniques include vulnerability scanning, penetration testing, and code analysis to assess the software's resistance to attacks, data protection, and compliance with security standards.

5. Peer Reviews: Peer reviews involve informal discussions or inspections where team members review and provide feedback on artifacts such as requirements documents, designs, or test plans. This technique promotes knowledge sharing, identifies inconsistencies, and improves overall quality through collaborative feedback.
