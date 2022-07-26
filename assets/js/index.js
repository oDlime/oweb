window.onload = function(){
    $(".buttontest").click(function(){
        console.log("进行请求");
        // $.get('https://bundlen.run.goorm.io',function(data){
        //     // $(".testbox").text("test")
        //     console.log(data+"saaaaa");
        // })
        $.ajax({
            url:'https://bundlen.run.goorm.io',//url
            type:'GET',//请求类型
            success:function(data){//成功的回调
                console.log("请求成功")
                console.log("成功："+data);
            },
            timeout:4000,//超时时间
            error:function(err){
                console.log("请求失败")
                console.log(err)
            }//失败的回调1
        });
    })
}