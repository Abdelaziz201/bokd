Link for the website: https://bokd.onrender.com
BOKD - Event Management Website
Abdelaziz Abdelkarim, Abdul Salam Jama, Ahmed Abuzed, Amal Moallim, Eyad Ahmed Salem Binafif, Nejan Elber Keskin 

I.INTRODUCTION:
The need for easily accessible, dependable, and user-friendly event planning tools has increased significantly in today's digitally connected world.  The time-consuming nature of manual bookings, the dispersed service options, and the restricted access to venue information make it difficult for many people to plan events, whether they be personal or professional.  After realizing these difficulties, our group decided to create a solution that would streamline and improve the efficiency of the event planning process for all involved.  As a result, our graduation project—Bokd-event management website designed to satisfy the various demands of contemporary users—was created.
Our platform, which is intended for the general public, enables users to organize and reserve spaces for a variety of events.  Our system offers a centralized platform where users can easily compare features, explore available options, and make reservations for any kind of event, including birthday parties, weddings, corporate gatherings, and even large concerts.  Users from a variety of backgrounds can easily navigate the interface thanks to its visual appeal and ease of use.  Our platform's emphasis on ease of use and accessibility distinguishes it from more conventional approaches to event planning.
The website's features include the ability for users to view venue photos, verify availability, and make reservations straight from the platform.  Additionally, we included options for various event kinds, like concerts, so users can reserve spaces that work for both small and large gatherings.  React, a cutting-edge front-end library renowned for its responsiveness and speed, was used to develop the system.


II.LITERATURE SURVEY:
To better understand the development and challenges of web-based event management systems (EMS), recent studies have explored technological advancements, user expectations, and industry trends. Findings reveal that while these platforms aim to streamline event planning, gaps remain in usability, security, and integration of emerging technologies [1][6].

A key focus of research is the role of technological integration in enhancing efficiency. Systems like Hikester [1] leverage real-time data synchronization and machine learning for personalized recommendations and spam filtering. Similarly, Dawat [3] employs Progressive Web Application architecture to ensure offline functionality and seamless user experiences. These platforms demonstrate how modern technologies can automate vendor coordination and improve accessibility. However, analysis of existing event websites [4] shows many users remain unfamiliar with these platforms, suggesting a need for improved onboarding and user education.

User experience (UX) and engagement significantly impact platform success. Research on online event experiences [7] reveals that effective communication and interactive content enhance participant satisfaction. Platforms that incorporate participatory features, like Hikester's [1] social interaction tools, foster deeper engagement. The Celebration Event Planner [5] highlights the importance of intuitive interfaces for tasks like guest management, while Magdivaneg [6] demonstrates how clean dashboards and vendor comparisons improve usability.

Automation tools are widely adopted to replace manual processes. The Event Management Customizer (EMC) [2] utilizes a structured database system to manage complex event logistics, including COVID-19 safety protocols. Similarly, the Event Management Solution [8] employs web technologies to streamline registration and content management. Despite these advancements, user satisfaction remains mixed, with many reporting only "somewhat satisfied" experiences [9].

Stakeholder-specific functionalities play a crucial role. Administrators benefit from comprehensive dashboards in systems like EMC [2], while clients value self-service features in Magdivaneg [6]. Vendors require specialized tools for service listings and pricing, as demonstrated in the Event Management System [9].

Challenges persist in security and scalability. Analysis of event websites [4] reveals significant security concerns, with few employing proper encryptions. The Event Management Solution [8] addresses scalability through modular design, while Hikester's [1] cloud-based infrastructure handles fluctuating user loads. Post-pandemic trends highlight growing demand for hybrid event support, requiring platforms to adapt to both virtual and physical components [3][6].

Looking ahead, research suggests technologies like AI and machine learning could further personalize experiences [1][9]. User feedback indicates strong interest in features like one-click bookings and responsive communication channels [6][9]. Social media integration also emerges as critical for promotional capabilities [4].

In conclusion, while web-based EMS have made significant strides in efficiency and user engagement through technological integration, opportunities remain for improving security, usability, and innovation. Future developments should prioritize intuitive design, real-time functionality, and adaptive features to meet evolving user expectations [1][3][6].








III.BOKD - EVENT MANAGEMENT SYSTEM
	3.1 Project Requirements
	The platform falls within the domain of event management and booking systems. It shares 	similarities with platforms like Eventbrite, Cvent, or Meetup, which allow users to browse, 	book, and manage events. However, BOKD is specifically tailored for event-handling 		companies, enabling them to showcase past events and manage bookings more 			effectively.
●	Venues and tickets can be added via admin’s dashboard - BOKD Website has a feature to take applications from venues that are willing to be displayed on the venues page for users to book, The admin on BOKD Website will have access to the dashboard, where they could find any applications for venues from potential collaborators to be accepted and added to the website, when a user books a certain venue, it shows in the dashboard for admin to accept the venue booking request, which is considered a ‘user event’, in addition, the admin could make/add an event that includes tickets booking for users to be available on tickets page. 
●	The user will receive email notifications.
The user will be able to verify their email address when they register their account on the website. The user will receive an email notification for their venue booking with their booking Id, date and the status of their booking. The potential collaborators with their venue places or their services will receive an email for applying on the website. The users will receive a confirmation email after their ticket purchase has been completed.

	3.2 Design/Architecture

 	Main components of the system are (figure 3.2.1) front-end, back-end, Database and payment. Front-end is created using HTML, CSS, and react.js. Some of the features are responsive UI, Role based access, sticky navbar and zone selection. The front-end is built to be user friendly. The back-end and the database are built to handle all the functions that we discussed. For payment we went with Stripe to be able to use the normal credit cards, apple pay and google pay in the payment system. The back-end was built using node.js and express so the whole project will be javascript to reduce context switching and make the full-stack development easier. For the database mongodb was used because it is written in javascript, flexible schema, performance in read/write heavy apps, and built in geospatial queries and text search. 

 <img width="964" height="552" alt="image" src="https://github.com/user-attachments/assets/eb29e2dc-d221-405b-b0ba-746e91d0cab6" />

Figure 3.2.1 - BOKD Software Architecture Diagram


The figure 3.2.2 describes how the database schemas were built to satisfy the need of the project. The user schema has some important properties like the type of the user if it is an admin or normal user which will detect if the dashboard appears or not. It is connected to the booking schema because every purchase will have a user ID and every user can purchase numeral tickets. Also, the reviews schema is connected to the user schema because every comment will be registered to the Id of the user. The venue/service schema is for the application of the potential collaborators, and it’s connected to user because every applied application will be registered under its user ID.      

<img width="992" height="867" alt="image" src="https://github.com/user-attachments/assets/7f4a9acf-f005-42c6-a440-b42de49434d6" />
 
Figure 3.2.2 - BOKD ER Diagram


The user experience for exploring and buying event tickets can be seen in the GUI design diagram for the BOKD website project In Figure 3.2.3. Users can search for events, check event types, and access login or sign-up options on the Homepage, which is where it starts. After selecting an event, users are redirected to the Event Details Page, which includes important details, for example the event's title, description, gallery, and ticket purchase button. Users must sign up or log in before they can proceed with the purchase. After credentials have been successfully authenticated, the system looks for past payment attempts. The user is taken to the homepage if there are no previous attempts. Otherwise, users type their payment details on the payment page, where the cycle continues. Incorrect payment information results in a retry, in contrast successful transactions take users to a booking confirmation page. An efficient, secure, and user-friendly ticket booking process on the BOKD platform is shown by this diagram. 


 <img width="856" height="932" alt="image" src="https://github.com/user-attachments/assets/99b5f08d-06b1-43af-b71b-a9ca093f7796" />

Figure 3.2.3 - BOKD GUI Design Diagram

IV.CONCLUSION:

Building BOKD, our event management website, was a valuable and challenging experience. Our main goal was to solve the common problems people face when planning events, such as limited access to venue details, complicated booking processes, and scattered services. With BOKD, we aimed to make the process smoother and easier for both users and administrators by bringing everything into one platform.
We used modern tools like React.js for the front end, Node.js and Express for the backend, and MongoDB for handling data. We also integrated Stripe to manage secure payments through credit cards and digital wallets. These technologies helped us create a fast, responsive, and scalable system that’s flexible for future updates.
The platform includes features like venue and ticket booking, admin approval systems, user registration, email notifications, and role-based access. Users can see their booking status in real-time, and admins can handle everything from a clear, easy-to-use dashboard.
While developing BOKD, we faced and overcame several challenges, especially in connecting the frontend with the backend and designing the database structure. These experiences helped us improve our skills in full stack development and better understand how to work as a team on a real-world project.
Going forward, we see potential to improve BOKD by adding features like a recommendation system, mobile optimization, and better analytics for admins. We also believe that hybrid event support and multilingual features could make the platform even more useful.
Overall, this project helped us apply what we learned throughout our degree and showed us what it takes to build a complete, user-focused web application. BOKD is not just a final project, it’s something we’re proud of and a strong step toward our future as software engineers.






