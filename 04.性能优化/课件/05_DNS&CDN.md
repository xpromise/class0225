## Http协议
	HTTP/0.9
	HTTP/1.0
	HTTP/1.1（主流）
	HTTP/2.0
	
	HTTP协议是在TCP/IP协议族的基础上运作起来的，用于客户端和服务端之间的通信
	其属于TCP/IP协议族内的一个子集；HTTP协议是无状态的协议。

## DNS域名解析服务
		DNS服务是和HTTP协议一样位于应用层的协议，它提供域名到IP地址之间的解析服务。
		计算机既可以被赋予IP地址，也可以被赋予主机名和域名。比如www.atguigu.com
		用户通常使用主机名或域名来访问对方的计算机，而不是通过IP地址访问，因为与IP地址
		的一组纯数字相比，用域名来指定计算机名更符合人类的记忆习惯。
		但是要让计算机去理解域名，相对而言就变得困难了，因为计算机更擅长处理一长串数字。
		为了解决上述问题，DNS服务应运而生。DNS协议提供通过域名查找IP，或逆向从IP地址反查域名的服务时
		
		chrome://dns/			:查看浏览器上的DNS缓存
		ipconfig /displaydns	:查看操作系统中的DNS缓存	
		
## DNS解析过程
1. 查找浏览器缓存。
    浏览器会检查缓存中有没有这个域名对应的解析过的IP地址，如果缓存中有，这个解析过程就将结束。
2. 查找系统缓存
    如果用户的浏览器缓存中没有，浏览器会查找操作系统缓存中是否有这个域名对应的DNS解析结果
3. 查找路由器缓存。
    如果系统缓存中也找不到，那么查询请求就会发向路由器，它一般会有自己的DNS缓存。
4. 查找ISP DNS 缓存。(网络运营商)
    运气实在不好，就只能查询ISP DNS 缓存服务器了。在我们的网络配置中都会有"DNS服务器地址"这一项，
    操作系统会把这个域名发送给这里设置的DNS，也就是本地区的域名服务器，这个专门的域名解析服务器性能都会很好，
    它们一般都会缓存域名解析结果，当然缓存时间是受域名的失效时间控制的。大约80%的域名解析都到这里就已经完成了，
    所以ISP DNS主要承担了域名的解析工作。
5. 递归搜索
    最无奈的情况发生了, 在前面都没有办法命中的DNS缓存的情况下
    (1) 本地 DNS服务器即将该请求转发到互联网上的根域
    (2) 根域将所要查询域名中的顶级域（即blog.baidu.com中的com)的服务器IP地址返回到本地DNS。
    (3) 本地DNS根据返回的IP地址，再向顶级域（就是com域）发送请求。
    (4) com域服务器再将域名中的二级域（即blog.baidu.com中的baidu.com）的IP地址返回给本地DNS。
    (5) 本地DNS再向二级域发送请求进行查询。
    (6) 之后不断重复这样的过程
    直到本地DNS服务器得到最终的查询结果，并返回到主机。这时候主机才能通过域名访问该网站。

## 优化DNS
* 目的：减少DNS查询
  * 一个多资源的站点最好使用2到4个不一样的主机来存放服务端资源。
    这是在减少DNS查询和允许高度并行下载之间作出的最好权衡
    (高度并行下载,浏览器一次能并发加载的量是受域名控制的)
  * 使用Keep-alive进行持久连接
  
## 内容发布网络CDN（Content  Delivery Networks）
* CDN是一组分布在多个不同地理位置的web服务器，用于更加有效的向用户发布内容  
* 实现基本思路：
  * 尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。
  * 通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，
  * CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息
  * 将用户的请求重新导向离用户最近的服务节点上。

			
	
	
