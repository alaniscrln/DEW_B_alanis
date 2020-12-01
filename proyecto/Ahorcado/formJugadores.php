<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <style>
        label {
            font-size: 2rem;
        }

        form {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body>
    <?php
    
        if( isset($_REQUEST['jugador1']) && isset($_REQUEST['jugador2']) ){
            $jugador1 = $_REQUEST['jugador1'];
            $jugador2 = $_REQUEST['jugador2'];
        }
    
    ?>

    <div class="container-fluid">
        <div class="container text-center">
            <form action="formJugadores.php" method="post">
                <div class="row">
                    <div class="col-12">
                        <label for="jugador1">Nombre del jugador 1</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <input type="text" name="jugador1" id="jugador1">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-12">
                        <label for="jugador2">Nombre del jugador 2</label>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12">
                        <input type="text" name="jugador2" id="jugador2">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-12">
                        <input id="btn" type="submit" value="!A jugar!">
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!--------------------------------------------------------------------------------------->

    <script type="text/javascript">
        let btn = document.getElementById("btn");
        btn.addEventListener("click", () =>{
            window.location.href = "partida.html";
        });
    </script>

</body>

</html>