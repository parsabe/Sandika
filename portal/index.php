<?php 

session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";
if(!isset($_SESSION['anon_id'])){
    $updator = $connection->prepare("UPDATE `users` SET status = 'Offline' WHERE `id` = ? ");
    $updator->bind_param("s", $_SESSION['anon_id']);
    $res = $updator->execute();
    return $res ? header("location: /") : header("location: /portal/");
}
?>
    

<?php include_once "/home/hounaarc/sandika.hounaar.com/src/php/header.php"; ?>

<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Sandika - Portal</title>
</head>
<body>


<nav class="navbar navbar-dark fixed-top">
  <div class="container-fluid">
      <h5 style="color:white;">𝐒  𝐀  𝐍  𝐃  𝐈  𝐊  𝐀</h5>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">𝐒  𝐀  𝐍  𝐃  𝐈  𝐊  𝐀</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="list-group-item profiler" id="profiler2">Profile</li>
          <li class="list-group-item familier" id="familier2">Family</li>
          <a href="https://chat.hounaar.com/">
              <li class="list-group-item" data-content="chat">Chat Portal</li>
          </a>
          <li class="list-group-item" data-content="rules" id="rules_section2">Rules</li>
          <li class="list-group-item" data-content="eai" id="eai_section2" data-bs-toggle="modal" data-bs-target="#eai_search">EAI</li>
          <li class="list-group-item" data-content="nigma" id="nigma_btn2">Nigma</li>
          <li class="list-group-item" data-content="Arkham-Spirits" id="arkham_btn2">Arkham Spirits</li>
          <li class="list-group-item" data-content="stories" id="story_btn2">Stories</li>

          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#post_story">Post Stories</li>



          <li class="list-group-item" id="tool_btn2">Hounaar Toolkit</li>          
          <li class="list-group-item" id="lang_btn2">Hounaar Language</li>
          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#rot13">Rot 13 Enc/Decryptor</li>
          <li class="list-group-item" data-content="git-insights" id="git_btn">Git Insights</li>
          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#post_git">Post Git Insight</li>

          <li class="list-group-item" data-content="songs" id="songs_btn2">Songs</li>
 
        </ul>
        
      </div>
    </div>
  </div>
</nav>

<div class="container container-portal mt-5">
    <div class="row">
      <div class="col-md-3">
        <!-- Sidebar with clickable links -->
        <div class="row animate__animated animate__fadeInDown">
            <div class="col-md-3">
                <img src="/src/pics/logo.jpg" class="img-fluid rounded-cricle" width="40" height="40"  alt=""><br/>
            </div>
            <div class="col-md-8 mt-2">
                <h5 style="color:white;">𝐒  𝐀  𝐍  𝐃  𝐈  𝐊  𝐀</h5>
            </div>
        </div>
        <ul class="list-group mt-3 animate__animated animate__fadeInLeft">
          <li class="list-group-item profiler" id="profiler">Profile</li>
          <li class="list-group-item familier" id="familier">Family</li>
          <a href="https://chat.hounaar.com">
              <li class="list-group-item" data-content="chat">Chat Portal</li>
          </a>
          <li class="list-group-item" data-content="rules" id="rules_section">Rules</li>
          <li class="list-group-item" data-content="eai" id="eai_section" data-bs-toggle="modal" data-bs-target="#eai_search">EAI</li>
          <li class="list-group-item" data-content="nigma" id="nigma_btn">Nigma</li>
          <li class="list-group-item" data-content="Arkham-Spirits" id="arkham_btn">Arkham Spirits</li>
          <li class="list-group-item" data-content="stories" id="story_btn">Stories</li>

          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#post_story">Post Stories</li>



          <li class="list-group-item" id="tool_btn">Hounaar Toolkit</li>          
          <li class="list-group-item" id="lang_btn">Hounaar Language</li>
          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#rot13">Rot 13 Enc/Decryptor</li>
          <li class="list-group-item" data-content="git-insights" id="git_btn">Git Insights</li>
          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#post_git">Post Git Insight</li>

          <li class="list-group-item" data-content="songs" id="songs_btn">Songs</li>
        </ul>
      </div>

      <div class="col-md-9">

      <!-- the first content here -->
            <div class="none-content" id="none">
                <div class="row">
                    <div class="col animate__animated animate__fadeIn animate__delay-1s">
                        <h4>
                            <p>
                            Nothing to show here. Select an option from the menubar. 
                            We recommned you to go to the rules section first.
                            </p>
                        </h4>
                    </div>
                </div>
            </div>

        <!-- the profie content here -->
        <div class="profile" id="profile">

        <?php include_once "/home/hounaarc/sandika.hounaar.com/src/php/select_profile.php";?>
           </div>


                <!-- the family content here -->

               
                    <div class="family" id="family">
                     <?php include_once "/home/hounaarc/sandika.hounaar.com/src/php/family_select.php";?>
                    </div>



                    <!-- user infos -->
                    <div id="user-info-section" style="display: none;"></div>

                  
                  



                   



                                        


<!-- the rules content here -->
<div class="rules" id="rules">
<h1 class="animate__animated animate__bounceIn">Welcome to the Sandika</h1>

<div class="animate__animated animate__fadeInUp animate__delay-1s">
<p>Rules:</p>

<ol>
    <li>There is no disrespecting allowed.</li>

    <li>In order to get verified, you need to have 50 CP (Contribution Points).</li>

    <li>How to increase CP:</li>
    <ul>
        <li>Solve riddles in the Nigma section: 15 CP per riddle.</li>
        <li>Add words and phrases to the dictionary (English or German): 10 CP each.</li>
        <li>Post a story with more than 1000 characters, mentioning something important and including links: 10 CP.</li>
        <li>Add Git insights: 5 CP each, or 15 CP if it's from your verified GitHub account.</li>
        <li>Solve cipher codes in the Arkham Spirits section: 20 CP each.</li>
    </ul>

    <li>Use EAI (Enigma Artificial Intelligence) to solve riddles and deciphered messages.</li>

    <li>Ranks:</li>
    <ul>
        <li>Rookie</li>
        <li>Soldier (20 to 50 CP)</li>
        <li>Captain (50 to 100 CP)</li>
        <li>Sergent (100 to 150 CP)</li>
        <li>Lieutenant (150 to 400 CP)</li>
        <li>Admiral (400 to 1000 CP)</li>
        <li>Bossman (2000 CP)</li>
    </ul>
    <p>Each rank has a logo. Whichever rank you were the logo will be right in front of your name in the profile section</p>

    <li>What are these ranks for:</li>
    <p>Each level allows you to participate in projects requiring a certain amount of CP. If required or verified by the admin, you will be notified via email. Update your email accordingly. Successful completion of tasks may earn you prizes corresponding to the task. These tasks are not harmful or dangerous and can be done according to your work using our EAI tool.</p>
</ol>
</div>
</div>


<div class="nigma animate__animated animate__fadeInRight mt-3" id="nigma">
    
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle1">Riddle 1</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle2">Riddle 2</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle3">Riddle 3</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle4">Riddle 4</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle5">Riddle 5</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle6">Riddle 6</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle7">Riddle 7</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle8">Riddle 8</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle9">Riddle 9</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle10">Riddle 10</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle11">Riddle 11</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle12">Riddle 12</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle13">Riddle 13</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle14">Riddle 14</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle15">Riddle 15</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle16">Riddle 16</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle17">Riddle 17</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle18">Riddle 18</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle19">Riddle 19</a>
</div>
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#riddle20">Riddle 20</a>
</div>

     


    
</div>

<div class="arkham animate__animated animate__fadeInRight mt-3" id="arkham">
    
<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as1">Arkham Spirits 1</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as2">Arkham Spirits 2</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as3">Arkham Spirits 3</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as4">Arkham Spirits 4</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as5">Arkham Spirits 5</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as6">Arkham Spirits 6</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as7">Arkham Spirits 7</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as8">Arkham Spirits 8</a>
</div>

<div class="col">
    <a href="" data-bs-toggle="modal" data-bs-target="#as9">Arkham Spirits 9</a>
</div>








</div>


<div class="story animate__animated animate__fadeInUp mt-3" id="story">

<?php 

include_once "/home/hounaarc/sandika.hounaar.com/src/php/story_select.php";

?>

</div>





<div id="tool" class="tool mt-3 animate__animated animate__fadeInDown">
<h1>HounaarToolkit</h1>

    <p>HounaarToolkit is a versatile Python toolkit that provides a set of tools for various tasks, including data analysis, YouTube video downloading, cryptocurrency price checking, typing automation, network scanning, and rootkit detection. This toolkit aims to simplify and streamline these common tasks into a single, easy-to-use package.</p>

    <h2>Features</h2>
    <ul>
      <li><strong>Data Analysis AI:</strong> Perform data analysis with AI-powered tools to gain insights from your data effortlessly.</li>
      <li><strong>YouTube Downloader:</strong> Download YouTube videos and playlists with ease, all from the command line.</li>
      <li><strong>Cryptocurrency Price Checker:</strong> Get real-time cryptocurrency prices and information for your favorite coins.</li>
      <li><strong>Type Rover:</strong> Automate typing tasks by simulating keyboard input. Useful for repetitive typing jobs.</li>
      <li><strong>Network Scanner:</strong> Scan your network to discover connected devices and check their status.</li>
      <li><strong>Rootkit Scanner:</strong> Detect rootkits and suspicious system files to ensure the security of your system.</li>
    </ul>

    <h2>Installation</h2>

    <!-- Pip Installation -->
    <h3>Pip Installation</h3>
    <pre><code>pip install HounaarToolkit</code></pre>
    <!-- Path Setup -->
    <h4>Adding to System's Path</h4>
    <!-- Windows -->
    <h5>Windows</h5>
    <ol>
      <li>Find the directory where HounaarToolkit was installed.</li>
      <li>Copy the path to this directory.</li>
      <li>Open the Start menu, search for "Environment Variables," and select "Edit the system environment variables."</li>
      <li>In the System Properties window, click the "Environment Variables" button.</li>
      <li>In the Environment Variables window, under "System Variables," find the "Path" variable, select it, and click the "Edit" button.</li>
      <li>In the Edit Environment Variable window, click the "New" button, and paste the path to the HounaarToolkit directory.</li>
      <li>Click "OK" to save your changes.</li>
    </ol>
    <!-- Linux and macOS -->
    <h5>Linux and macOS</h5>
    <ol>
      <li>Open a terminal window.</li>
      <li>Run the following command, replacing `/path/to/HounaarToolkit` with the actual path to the HounaarToolkit executable directory:</li>
      <pre><code>export PATH=$PATH:/path/to/HounaarToolkit</code></pre>
      <li>You can also add this command to your shell's configuration file (e.g., `~/.bashrc` or `~/.zshrc`) to make it permanent.</li>
    </ol>

    <h2>Usage</h2>
    <!-- Usage Steps -->
    <pre><code>hounaartoolkit</code></pre>
    <p>Choose from the following commands:</p>
    <ol>
      <li>Data Analysis AI</li>
      <li>YouTube Downloader</li>
      <li>Cryptocurrency Price Checker</li>
      <li>Type Rover</li>
      <li>Network Scanner</li>
      <li>Rootkit Scanner</li>
      <li>Exit</li>
    </ol>

    <h2>Requirements</h2>
    <p>HounaarToolkit requires the following Python libraries:</p>
    <ul>
      <li>numpy</li>
      <li>pandas</li>
      <li>matplotlib</li>
      <li>seaborn</li>
      <li>reportlab</li>
      <li>scikit-learn</li>
      <li>pyautogui</li>
      <li>colorama</li>
      <li>PyPDF2</li>
      <li>pytube</li>
      <li>requests</li>
      <li>beautifulsoup4</li>
      <li>scapy</li>
      <li>python-nmap</li>
    </ul>
    <p>You can install them via:</p>
    <pre><code>pip install -r req.txt</code></pre>
    <p>Or you can download from here:</p>
    <a href="/src/files/toolkit.zip" class="btn btn-outline-primary">Download</a>
  </div>





<div class="lang mt-3 animate__animated animate__fadeInUp" id="lang">
<h1 class="display-4">Hounaar Language Syntax</h1>
        <p class="lead">Hounaar is a beginner-friendly and minimalist programming language designed for ease of use and quick scripting. Below, you'll find an overview of its syntax and key features.
            But first you need to install it. the Prequiests for installing it is to first install the Python. 
        </p>
        <p>After that, simply click the download link here:</p>
        <a href="/src/files/lang.zip" class="btn btn-outline-primary">Download</a>
        <p>After downloading each program you write must ends with a .ho file. You can simply run it like this:</p>
        <p>
        <pre>
            python main.py main.ho
        </pre>
        </p>

        <h2>Variables</h2>
        <p>Variables in Hounaar are simple to declare and do not require explicit data types. Here's how you declare a variable:</p>
        <pre>
            Variable_Name = Initial_Value
        </pre>
        <p>Example:</p>
        <pre>
            name = "John"
            age = 25
        </pre>

        <h2>Conditionals (If-Else)</h2>
        <p>Hounaar supports basic conditional statements for decision-making. Here's how you use if-else:</p>
        <pre>
            IF Condition:
                Code_Block
            ELSE:
                Code_Block
        </pre>
        <p>Example:</p>
        <pre>
            IF age >= 18:
                PRINT "You are an adult."
            ELSE:
                PRINT "You are a minor."
        </pre>

        <h2>Loops (For and While)</h2>
        <p>Hounaar provides both for and while loops for repetitive tasks. Here's how you use them:</p>
        <pre>
            FOR Variable_Name FROM Start TO End:
                Code_Block

            WHILE Condition:
                Code_Block
        </pre>
        <p>Example:</p>
        <pre>
            FOR i FROM 1 TO 5:
                PRINT i

            num = 0
            WHILE num < 5:
                PRINT num
                num = num + 1
        </pre>

        <h2>Mathematical Operations</h2>
        <p>Performing basic mathematical operations in Hounaar is straightforward:</p>
        <pre>
            result = x + 5
        </pre>
        <p>Example:</p>
        <pre>
            total = 10 * price
        </pre>

        <h2>Functions</h2>
        <p>Functions allow you to define reusable blocks of code. Here's how you declare a function:</p>
        <pre>
            FUNCTION Function_Name(Arguments):
                Code_Block
        </pre>
        <p>Example:</p>
        <pre>
            FUNCTION greet(name):
                PRINT "Hello, " + name
        </pre>
</div>




<div class="git animate__animated animate__fadeInUp mt-3" id="git">
<?php include_once "/home/hounaarc/sandika.hounaar.com/src/php/git_insight.php";?>

        
            
</div>



<div class="songs animate__animated animate__fadeInUp mt-3" id="songs">

<div class="col">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2JDqYOGUzJbsxR62YiFn36?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

</div>

    <div class="col">
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3UZ2YKsrUQpSwY54p6Zjgf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

<div class="col">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6yYiGzaeTns5G8WpffD39C?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

<div class="col">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5XIILSWFdf9eopCHuz6809?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

<div class="col">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/59SC4n2bqfr1qn33Ha6JzA?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>


</div>
















 <!-- the end of col-md-9 -->
            </div>
        </div>
        </div>





        

<style>
    
    .custom-table td{
        border: #003566 2px solid;
        padding:10px 10px 10px 10px;
}



</style>
<script src="/src/js/contents.js"></script>
<script src="/src/js/userinfo.js"></script>


  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

  

  <?php include_once "/home/hounaarc/sandika.hounaar.com/src/php/footer.php";?>
