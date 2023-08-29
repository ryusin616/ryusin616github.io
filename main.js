document.addEventListener('click', (event) => {
    // 半径
    let r = 50
    // 色
    let color = 'rgba(0,250,250,0.5)'

    function draw(r,color){
        // CSSスタイルを適用
        div.style.width  = `${r}px`;
        div.style.height = `${r}px`;
        div.style.backgroundColor = color;
        div.style.borderRadius = '50%';
        div.style.position = 'absolute'; // positionを設定して絶対位置に配置
        div.style.left = `${mouseX - r/2 + window.scrollX}px`; // 左からの距離を設定
        div.style.top  = `${mouseY - r/2 + window.scrollY}px`; // 上からの距離を設定
    }

    // マウス位置関連
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // 要素を作成
    let div = document.createElement("div")
    
    // ボディに要素を追加
    document.body.appendChild(div)

    // console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
    draw(r,color)

    const interval = setInterval(function(element){
        // console.log(element.style.width)
        let siz = parseInt(element.style.width);
        if(siz <= 10){
            element.remove();
            clearInterval(interval);
        }else{
            element.style.width  = `${siz - 4 }px`;
            element.style.height = `${siz - 4 }px`;
            div.style.left = `${mouseX - siz/2 + window.scrollX}px`; // 左からの距離を設定
            div.style.top  = `${mouseY - siz/2 + window.scrollY}px`; // 上からの距離を設定
        }
    },1000/30,div)
});
