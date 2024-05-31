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

FSmart CO2nverter is an innovative CO2 converter designed to capture and transform carbon dioxide emissions into useful by-products such as fuel, building materials, or other valuable chemicals. This technology aims to mitigate the impact of greenhouse gases on the environment by converting CO2 into sustainable resources.

### Project Objectives:

-   Reduce atmospheric CO2 levels.
-   Convert CO2 into useful products.
-   Enhance energy efficiency in the conversion process.
-   Implement a scalable and sustainable solution.

### Project Scope:

-   Development of the software components.
-   Integration with existing industrial systems.
-   Implementation of robust error handling, security, and concurrency mechanisms.
-   Evaluation of the software design quality.

## 2 **Software Design Fundamentals**
### 2.1 **Context of Software Design**

The software component of Smart CO2nverter acts as the brain of the system. It controls and monitors the entire CO2 conversion process, ensuring optimal performance. The software must interface with various sensors and actuators, process large volumes of data in real-time, and make intelligent decisions to optimize the conversion process.

### 2.2 **High Level Application Design**

-   User Interface (UI): A web-based dashboard that allows users to monitor the system's status, view historical data, and control the conversion process.
-   Data Processing Module: Collects data from CO2 sensors, analyzes it to determine the efficiency and effectiveness of the conversion process, and identifies any anomalies.
-   Control Module: Sends commands to actuators to adjust the conversion process parameters based on real-time data analysis.
-   Storage Module: Stores historical data for long-term analysis and reporting, facilitating trend analysis and process optimization.
-   Communication Module: Ensures secure and reliable communication between different system components and external systems.


<p>
  <img src="assets/home.gif" alt="home" width="24%" />
  <img src="assets/challenges.png" alt="challenges" width="24%" />
  <img src="assets/suggestions.png" alt="suggestions" width="24%" />
  <img src="assets/habits.png" alt="habits" width="24%" />
</p>

### 2.3 Software Design Model

The software follows a modular architecture to enhance maintainability and scalability. The main components include:

-   Presentation Layer: Provides the user interface and visualizations for monitoring and controlling the system.
-   Business Logic Layer: Contains the core functionalities for data processing, decision making, and control.
-   Data Access Layer: Manages interactions with the database, ensuring efficient data retrieval and storage.
-   Integration Layer: Facilitates communication with external systems, such as industrial equipment and third-party applications.

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
The activity diagram outlines the sequential flow of activities in the CO2 conversion process. It helps in understanding the overall process and identifying critical points for optimization and monitoring.

1. Start: The system initializes and performs self-checks.
2. Collect CO2 Data: Sensors collect real-time data on CO2 levels and other relevant environmental parameters.
3. Analyze Data: The data processing module analyzes the collected data to assess the conversion process's efficiency and detect any issues.
4. Control Conversion Process: The control module adjusts actuators based on the analyzed data to optimize the conversion process.
5. Monitor Conversion: Continuous monitoring of the process to ensure it remains within optimal parameters.
6. Store Data: Historical data is stored in the database for future analysis and reporting.
7. End: The process completes, or the system shuts down as per user commands or predefined conditions.

<img alt="SmartCO2nverter" src="">

## 4 **Key Issues in Software Design**
### 4.1 Error and Exception Handling

1.	Scalability: The SmartCO2nverter application should be designed to handle a large user base and accommodate future growth. Consider the scalability of the architecture, databases, and infrastructure to handle increasing data volumes, user requests, and concurrent users.
2.	Performance: Ensure that the Smart C02nverter application is responsive and performs optimally. Optimize database queries, minimize network latency, and optimize code to deliver a smooth user experience, especially when handling real-time data from different companies.
3.	Integration with various Retailers, Manufacturers: For real time data.
4.	User Interface and User Experience: Focus on creating an intuitive and user-friendly interface that allows users to easily navigate through features, track their health data, set goals, and interact with the application. Prioritize usability, visual appeal, and accessibility to cater to a diverse user base.
5.	Data Management: Develop a robust data management strategy that ensures the secure storage, backup, and recovery of user data. Consider data privacy regulations, implement data anonymization and pseudonymization techniques, and regularly perform data backups to prevent data loss.

### 4.2 Security Issues

Protecting user data is paramount in a health and fitness application. Implement strong authentication mechanisms, secure data transmission using encryption, enforce access control to prevent unauthorized access, and follow industry best practices for securing user information. 
Here is the list of security issues that needs to be taken care of while developing a Health and Fitness Application:

1.	User Authentication: Smart C02nverter should implement a strong authentication mechanism to ensure that only authorized users can access their accounts. This includes enforcing password complexity rules and protection against brute-force attacks.

2.	Data Encryption: Smart C02nverter should encrypt sensitive data both at rest and in transit. This includes encrypting data stored on servers, as well as data transmitted between the application and backend systems, to protect against unauthorized access and data breaches.

3.	Secure APIs: Smart C02nverter may expose APIs for integration with third-party applications. It is crucial to ensure that these APIs are secure and follow industry best practices. Implement strong authentication and authorization mechanisms, rate limiting, and input validation to prevent unauthorized access and API abuse.

4.	Secure Data Storage: Smart C02nverter should employ robust security measures to protect user data stored on servers. This includes using strong encryption algorithms, implementing access controls and permissions, regularly patching and updating software, and conducting regular security audits and vulnerability assessments.

5.	Privacy Settings: Smart C02nverter should provide users with granular privacy settings to control the sharing and visibility of their personal health data. Users should have the ability to choose what information is shared with others, including friends, groups, and social communities.

6.	Secure Bluetooth Communication: Smart C02nverter devices communicate with the application via Bluetooth. It is important to ensure that the Bluetooth communication is secure and protected against interception or unauthorized access. Implement secure Bluetooth protocols and encryption to safeguard data transmission.

### 4.3 Concurrency Issues

Developing a health & Fitness Application involves addressing various concurrency issues to ensure smooth and reliable operation. Here are some common concurrency challenges that can be faced in software development:

1.	Data Synchronization: Smart C02nverter application may involve syncing data from multiple sources, such as Smart C02nverter devices and user inputs from different devices. Ensure that concurrent data synchronization processes are handled correctly to prevent data inconsistencies or conflicts.

2.	Database Concurrency: Multiple users accessing and modifying data concurrently can lead to conflicts and data integrity issues. Implement appropriate concurrency control mechanisms, such as transactions, locks, or optimistic concurrency control, to manage concurrent database access and maintain data consistency.

3.	Thread Safety: If the Smart C02nverter application utilizes multiple threads or processes, pay attention to thread safety. Ensure that shared data structures or resources are accessed and modified safely to prevent data corruption or race conditions. Use synchronization primitives, thread-safe data structures, or message passing mechanisms to coordinate concurrent activities.

4.	Asynchronous Operations: Smart C02nverter application may involve asynchronous operations, such as network requests, data processing, or background tasks. Proper handling of asynchronous operations is crucial to avoid blocking the user interface and ensure smooth execution without conflicts or data inconsistencies.

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
