<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>User Form</title>
</head>
<body>
    <div class="container">
        <h1>User Registration:</h1>
        <form id="form">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div>
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required>
            </div>
            <div>
                <label for="Accept">Accept Terms:</label>
                <input type="checkbox" id="Accept" name="Accept">
            </div>
            <button type="submit">Submit</button>
        </form>
        
        <h2>Entries</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Dob</th>
                    <th>Accepted terms?</th>
                </tr>
            </thead>
            <tbody id="entriesTableBody"></tbody>
        </table>
    </div>

    <script src="index.js"></script>
</body>
</html>
