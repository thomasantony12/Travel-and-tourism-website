<script src="js/main.js"></script>
    <script>
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxSrg7ayX0NGGBRpE7QHm5c8oTfoXDZXjyQyMbOI735zzw1oe1EUB9Av1qOT51SoOLU/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
    </script>
