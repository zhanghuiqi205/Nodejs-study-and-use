- 模板引擎：渲染页面的。变动的数据，生成页面.在nodeJS中,主流的是jade和ejs.
###### 我们先介绍一下jade模板,带有破坏式,强依赖的.
- 语法：缩进来代表层级.带有render()和renderFile(模板文件名，参数)的渲染选项.
   - [x] 属性的解析，属性放在()里面。逗号来分割。
   
        ```
        script(src="a.js")
        解析后为：
        <script src="a.js"></script>
        多个属性,逗号分隔即可.
        link(href="a.css", rel="stylesheet")
        解析后为：
        <link href="a.css" rel="stylesheet" >
        特殊的属性：
        style="width:100px;height:100px;"
        class="aaa bbb"
        这些怎么解析呢？首先先看style类：
        div (style="width:100px;height:100px")  //普通属性
        div(style={width:"100px",height:"100px"})//json格式
        上面的两种方式都可以。编译后为：
        <div style="width:100px;height:100px;"></div>
        对于class类：
        div(class="aaa bbb ccc") //普通格式
        div(class=["aaa","bbb","ccc"]) //数组格式
        解析后为：
        <div class="aaa bbb ccc"></div>
        
       ```
   - [x] 内容的解析：空格间隔内容
     
        ```
        a(href="www.baidu.com") 百度一下
        解析为：
        <a href="www.baidu.com">百度一下</a>
        
        ```
   - [x] 多个内容的嵌套
   
        ```
            div 你好
              span 世界
            解析为：
            <div>
                你好
                <span>世界</span>
            </div>
        ```
   - [x] 简写模式：div.box 解析为：<div class="box"></div>;同理#box就是id="box";
  
        ```
        div(title="aaa",id="div1")
        div&attributes({title:"aaa",id:"div1"})//可以使用json格式
        解析后为：
        <div title="aaa" id="div1"></div>
        ```
- 在深入的讲一下：jade
    - [x] 比较智能，可以自动识别单双标签(所有自定义的标签都是双标签)
    
        ```
        div
          input
        解析为：
        <div>
          <input />
        </div>
        ```
    - [x] 原样子输出的符号 |
    
        ```
            script
              | window.onload =function(){
              |    var box =123;
              | };
             解析后为：
             <script>
                window.onload =function(){
                    var box =123;
                }
            </script>
            更方便的方法：
            script.      //加一个点号，所有的下一级内容都是原样输出
               window.onload =function(){
                  var box =123;
               };
            另一种方法：通过引入方式来
            include a.js  //引入a.js文件
        ```        
    - [x] 变量的使用：#{},在模板中传入变量的值xxx，变量中也可以进行运算#{a+b}等等.当然我们所说的变量也可以从数据库获取过来。这样就可以生成变动的内容。
    
        ```
            div 我的名字：#{name}
            解析后为：
            <div>我的名字：xxx</div>
        ```
    - [x] jade内部可以自己定义变量和进行计算
    
        ```
        body
          -var a =12; //-代表我是一段代码，不会输出
          -var b =5;
          div 结果为#{a+b}
        解析后为：
        <body>
         <div>结果为17</div>
        </body>
        ```
    - [x] 循环的使用：变量为：arr：["aaa","bbb","ccc"];
            
        ```
        -for(var i=0;i<arr.lenth;i++)
           div=arr[i]
        解析后为：
        <div>aaa</div>
        <div>bbb</div>
        <div>ccc</div>
        ```
    - [x] 选择语句的输出：

        ```
        -var a = 12;
        -if(a%2==0)
           div 偶数
        -else
           div 奇数
        输出为：
        <div>偶数</>
        ```

   - [x] switch语句:
 
        ```
        -var a =3;
        case a
          when 0
            div aaa
          when 1
            div bbb
          when 3
            div ccc
          defult
            div ddd
        解析后为：
        <div>ccc</div>
        ```
    - [x] html标签的输出：！标签原样输出。不转义。
- 接下来我们讲解ejs模板的使用，实际的工作中，我公司还是使用的ejs的，所以我来介绍ejs模板的知识
###### esj 非侵入式，非破坏式的
- 输出方式：
   - [x]  <%= name%> 输出变量
   - [x] 还可以输出各种数据：
        ```
        数据：
        {json:{arr:[
            {user:"zhangsan",pass:123},
            {user:"zhangsan1",pass:1234},
            {user:"zhangsan2",pass:12356},
        
        ]}}
        <%  for(var i=0;i<json.arr.length;i++){%>
               <div> 我的名字叫：<%= json.arr[i].user %></div>
        <%}%>
        编译后为：
         <div> 我的名字叫：zhangsan</div>
         <div> 我的名字叫：zhangsan1</div>
         <div> 我的名字叫：zhangsan2</div>
        ```
    - [x] 输出html模板字符：
    
        ```
             <%
              var str="<div>1111</div>"
             %>
             <%-str%>
             编译后为：
             <div>1111</div>
        ```
    - [x] include:例如：<% include a.text %>  根据对应的目录查找文件。不能写变量。
###### ejs很多语法和JavaScript原始一样。所以相对来说用的还是很平滑，没有那么学习曲线陡峭。
