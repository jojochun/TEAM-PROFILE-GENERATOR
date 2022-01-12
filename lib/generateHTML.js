function generateHTML(data) {
    console.log(data);
    teamCards = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = generateManagerCard(employee);

            teamCards.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineerCard(employee);

            teamCards.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateInternCard(employee);

            teamCards.push(internCard);
        }
    }

    const employeeCards = teamCards.join("");

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>My Team</title>
</head>
<body>
    <main>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center mb-3">My Team</h1>
            </div>
        </div>


        
        <div class="container">
            <div class="row">

            <!-- Team Cards -->
            ${employeeCards}
            </div>
        </div>


    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
        
    </script>
</body>
</html>
    `;
}

// Manager card
const generateManagerCard = function (manager) {
    return `
        <div class="card  shadow-5 " style="width: 18rem;">
            <div class="card-header" style="background-color: rgb(209, 90, 90);">
                <h3>${manager.getName()}</h3>
                <h4><i class="fa fa-mug-hot mr-2"></i>Manager</h4>
            </div>
            <div class="card-body border border-primary">
                <div class="card" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Role:${manager.getRole()}</li>
                        <li class="list-group-item">ID:${manager.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

// Engineer card
const generateEngineerCard = function (engineer) {
    return `
        <div class="card  shadow-5 " style="width: 20rem; ">
            <div class="card-header" style="background-color: #d2f3d2;">
                <h3>${engineer.getName()}</h3>
                <h4><i class="fa fa-glasses mr-2">Engineer</i></h4>
            </div>
            <div class="card-body border border-primary">
                <div class="card" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Role:${engineer.getRole()}</li>
                        <li class="list-group-item">ID:${engineer.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

// Intern card
const generateInternCard = function (intern) {
    return `
        <div class="card  shadow-5 " style="width: 20rem;">
            <div class="card-header" style="background-color: rgb(173, 233, 233);">
                <h3>${intern.getName()}</h3>
                <h4><i class="fa fa-user-graduate mr-2"></i>Intern</h4>
            </div>
            <div class="card-body border border-primary">
                <div class="card" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Role:${intern.getRole()}</li>

                        <li class="list-group-item">ID:${intern.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School:${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

module.exports = generateHTML;
