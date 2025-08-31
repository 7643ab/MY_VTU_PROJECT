🎓 MY_VTU_PROJECT

A ReactJS web app to check VTU (Visvesvaraya Technological University) exam results online.
Built with ReactJS, Axios, React Bootstrap, and JSON Server.

✨ Features

🔍 Search results by registerId

📊 View marks, total, percentage, and resultstatus

💻 Responsive UI with React Bootstrap

🛠 Uses JSON Server as a fake backend

🛠 Tech Stack

Frontend: ReactJS, HTML, CSS, JavaScript, React Bootstrap

Backend: JSON Server (fake REST API)

Data Fetching: Axios

⚡ Setup

1. Clone the repo

git clone https://github.com/7643ab/MY_VTU_PROJECT.git
cd MY_VTU_PROJECT


2. Install dependencies

npm install


3. Start JSON Server

npm install -g json-server
json-server --watch studentInfo.json --port 3002


Ensure studentInfo.json is in the root folder. Runs API at http://localhost:3002.

4. Run React App

npm start


App runs at http://localhost:3000 and fetches data from JSON Server (3002).

🗂 Database Example (studentInfo.json)
{
    "studentInfo":[{
            "_id":1,
            "studentId":1,
            "registerId":"209VTU3513",
            "studentName":"Mohan J",
            "FatherName":"Sukumar Jagur",
            "collegeName":"Delhi University",
            "code":"CSE001",
            "subject":"JAVA",
            "max_marks":"100",
            "min_marks":"35",
            "obtained_marks":"65",
            "result":"PASS"
    },
    {
            "_id":2,
            "studentId":1,
            "registerId":"209VTU3513",
            "studentName":"Mohan J",
            "FatherName":"Sukumar Jagur",
            "collegeName":"Delhi University",
            "code":"CSE002",
            "subject":"PYTHON",
            "max_marks":"100",
            "min_marks":"35",
            "obtained_marks":"45",
            "result":"PASS"
    },
    {
            "_id":3,
            "studentId":1,
            "registerId":"209VTU3513",
            "studentName":"Mohan J",
            "FatherName":"Sukumar Jagur",
            "collegeName":"Delhi University",
            "code":"CSE003",
            "subject":"SQL",
            "max_marks":"100",
            "min_marks":"35",
            "obtained_marks":"78",
            "result":"PASS"
    }

]
}

🔗 Routing

/ → Home / Search

/resultpage/:id → Detailed marks & percentage

📄 License

MIT License – Free to use, modify, and distribute with credit.




