<h1 align="center">Welcome to F.R.I.C</h1>

> The Cyber Experimentation & Analysis Division (CEAD) recognizes the complexity and the time it takes to
manage task assignments, progress, vulnerability discovery during a cyber engagement and generate custom
reports that presents the discovered vulnerabilities and potential issues to CEAD’s target audience. They want a
system that would aid the management of task, collection of evidence, and report generation during a cyber
engagement.
The University of Texas at El Paso (UTEP) and CEAD are collaborating to develop Findings and Reporting
Information Console (FRIC) system that will provide the ability to manage task assignment and progress, and
facilitate the collection of evidence on existing vulnerabilities, and generation of custom reports.

### 🏠 [Homepage](https://github.com/IsaiasLeos/FRIC)

## Install
For nodejs: https://nodejs.org/en/ | install 14.15.1 LTS
For Python: https://www.python.org/downloads/ | install 3.9
For Database: https://www.mongodb.com/try/download/community | install 4.4.2

WINDOWS
```sh
cd FRIC/fric
npm install
cd FRIC/fric/python
python -m venv venv
cd venv/Scripts/
```
While in command prompt run ```sh activate.bat```
While in virtual environment
```sh
While in the virtual environment Then run 
pip install flask
pip install pymongo
pip install python-docx
pip install openpyxl
pip install python-pptx
pip install python-dotenv
set FLASK_APP=getAllEvents.py
set FLASK_ENV=development
```
## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Isaias Leos**
👤 **Alex Vasquez**
👤 **Jacob Padilla**
👤 **Luis Soto**
👤 **Andrew Clanan**

* Github: [@IsaiasLeos](https://github.com/IsaiasLeos)
* Github: [@LXvsqz](https://github.com/LXvsqz)
* Github: [@JacobpaDILLAA](https://github.com/JacobpaDILLAA)
* Github: [@Luis9620](https://github.com/Luis9620)
* Github: [@aclanan](https://github.com/aclanan)
