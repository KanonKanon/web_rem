// 这个js文件作用是自动修改html中的font-size的值, 并定义了1rem=20px 这个可以在实际开发中修改
(function(){
    var calc=function(){
        var docElement=document.documentElement;
        var clientWidthValue = docElement.clientWidth>750?750:docElement.clientWidth;
        docElement.style.fontSize=20*(clientWidthValue/375)+"px";
    }
    calc();
    window.addEventListener('resize',calc);
})();