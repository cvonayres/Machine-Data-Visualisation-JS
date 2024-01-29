# Machine-Data-Visualisation-JS
This is a project to solve a problem in my last job; that being of how to gather data from industrial machines and also provide a website were that data can be presented in a clear and clean manager to allow visualisation of trends and performance. This is phase 1 where everthing will be done in javascript and other common webframe works.


Organisation:
1. - This is everything to be deployed onto the server and consists of the frontend, database handler and remote handler;
    1.1 - This has everything to display and interact with the webpage. If data is required it is requested via API from the serverDataHandler using Rest APIs.
    1.2 - This has everything to handle and process the data including connection to the database. It has APIs so the frontend index.js and the serverRemoteHandler can pass and retrieve data.
    1.3 - This has everything to handle the remote connection to the machine and to get or pull there data. This data is passed to the database via the serverDataHandler using Rest APIs.

2. - This is everything to be deployed on each machine in the field and consist of .....