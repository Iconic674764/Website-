
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Website</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f0f4f8;
        }

        nav {
            background: #2563eb;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        nav h2 {
            margin: 0;
        }

        .menu a {
            color: white;
            text-decoration: none;
            margin-left: 15px;
        }

        .content {
            text-align: center;
            padding: 50px 20px;
        }

        .card {
            background: white;
            padding: 25px;
            margin: 20px auto;
            max-width: 300px;
            border-radius: 12px;
            box-shadow: 0 4px 10px #0001;
        }

        button {
            background: #2563eb;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        #menuItems {
            display: none;
            background: #dbeafe;
            padding: 15px;
            text-align: center;
        }
    </style>
</head>

<body>

    <nav>
        <h2>My Website</h2>
        <div class="menu">
            <a href="#home">Home</a>
            <a href="#profile">Profile</a>
            <a href="#" onclick="showMenu()">Menu ☰</a>
        </div>
    </nav>

    <div id="menuItems">
        <p><a href="#home">Home</a></p>
        <p><a href="#profile">My Profile</a></p>
        <p><a href="#about">About Us</a></p>
    </div>

    <section class="content" id="home">
        <h1>Welcome to My Website!</h1>
        <p>This is my first simple website.</p>
        <button onclick="alert('Welcome!')">
            Click Me
        </button>
    </section>

    <section class="card" id="profile">
        <h2>My Profile 👤</h2>
        <p>Name: Your Name</p>
        <p>Role: Student</p>
        <button onclick="alert('This is my profile!')">
            View Profile
        </button>
    </section>

    <section class="content" id="about">
        <h2>About Us</h2>
        <p>Thanks for visiting my website.</p>
    </section>

    <script>
        function showMenu() {
            const menu = document.getElementById("menuItems");

            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
    </script>

</body>
</html>
