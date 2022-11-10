# 🧱 Glossary

### IP Address

Your IP address is a code that uniquely identifies a network device, like a computer or a smartphone. It’s often described by analogy like a physical street address, but there is an important distinction – because the code is logical (not arbitrary like a street address), it can change. Use WhatIsMyIPAddress to find what yours is right now.

Since your IP address is the principal identifier for your device on a network, your proxy’s main job is to mask that IP address and replace it with a diﬀerent one. There are many ways to do this, so there are many diﬀerent types of proxies.

### Port

If an IP address is like a residential mailing address, then a port is more like an individual mailbox – except every address has thousands of individual ones. Essentially, ports transmit specific types of information and are organized in such a way that data remains eﬃciently categorized no matter where you’re sending it.

For instance, port 25 is the default outgoing port for email. Your computer uses this system of ports (there are thousands) to determine what kind of data it is sending or receiving – that’s how emails end up in inboxes instead of, for instance, on an HTTP web browser (which uses port80).

- [14 common network ports you should know - Opensource.com](https://opensource.com/article/18/10/common-network-ports)

### Web Scrapers

Web scraping is the automated process of gathering data from an online resource – usually a website or archive. Since web pages are generally made for human users, collecting large amounts of data is not always easy or feasible. Web scrapers are tools that automate this, often using proxies.

Scraping a website involves asking its server to work very hard providing all of the data requested. For this reason, most administrators try to limit the ability for web scrapers to automatically gather data. Proxies are one-way users get around these limits.

### Transparent Proxies

The type of proxy that most users will be immediately familiar with is the transparent proxy. When you sign onto the Internet at your local coﬀee shop and the coffee shop’s network asks you to agree to its terms and conditions, it is putting you through a transparent proxy.

The reason it’s called a transparent proxy is that you, the user, are generally not aware it’s working. It makes no attempt to hide your identity and simply processes requests to external networks. Corporate proxies that limit employees’ access to forbidden websites are also transparent proxies.

### Residential Proxies

Residential proxies oﬀer a one-to-one proxy for your IP address. This is the most basic level of anonymity you can obtain using proxy technology. Essentially, instead of accessing a website directly through your network connection, you claim that a diﬀerent machine is the one you “reside” on – your residential proxy.

### Shared Proxies

Shared proxies are similar to residential proxies except that instead of offering a one-to-one proxy service, you share your proxy connection with a number of other users. This lets a group of individuals share the cost of maintaining the proxy server itself, but it also creates a direct relationship between them that anyone can trace.

### Dedicated Proxies

Whereas shared proxies are open groups that any number of users can share, dedicated proxies are closed. You are the only person who can access and use your dedicated proxy.This oﬀers a broad range of benefits suitable for high-impact proxy tasks and business use. It guarantees security, anonymity, and speed.

### Backconnect Proxies

Backconnect proxies oﬀer users the ability to connect a single device to multiple different residential proxies. This has the practical benefit of allowing users to access websites from a variety of different IP addresses – making one user’s activity look like multiple, unrelated queries.

These proxies are not functionally different than rotating ips, although the two terms are distinct. The main drawback to using these proxies is ensuring that the individual IPs are high-quality – that is, not already blacklisted or otherwise compromised. Backconnect and rotating IPs are never dedicated to one user since multiple users will connect to the same shared pool.

### Honey Pot

A honeypot is a trap, set by hackers and organizations, to lure users into sending sensitive data through their proxy services. The honey pot owner examines, analyzes, and uses data sent through the proxy system.

A common scenario is using a free proxy to bypass a corporate firewall and log into Facebook or Instagram, only to find out a week later that someone logged in using your password and took control of your account. In this case, the free proxy was in fact a honey pot for a social media hacker.

### ASN

Your autonomous system number (ASN) refers to particular digits that identify a group of IP addresses. You can think of autonomous systems as being one level up along the hierarchy of data identification on the Internet. Diﬀerent countries and ISPs have diﬀerent ASNs.

### Subnet

A subnet is a smaller group of individual device identities located on a single unified network. For instance, in a corporate oﬃce building, multiple devices may share the same IP address and have diﬀerent subnets keeping them distinct and organized.

### HTTP/SOCKS

The hypertext transfer protocol is the standard proxy protocol for the Internet. When you type in a web address and it contains, “http://” in front of it, that means both you and the server hosting the website are using this protocol to communicate.

In terms of proxy usage, HTTP proxies oﬀer maximum functionality for obtaining data from websites because they are built within the same framework. SOCKS protocols are similar, but use a more basic framework that oﬀers security and compatibility benefits.

### VPS

When an internet hosting service sells a virtual private server (VPS), it is allowing access to a specific component of an existing server according to its users’ needs. This may or may not correspond to a specific physical device – because the server is virtual, it doesn’t have to.

This bridges the gap between selling dedicated server usage and shared server usage. Shared servers stuff multiple users into a single physical device, while dedicated servers are private, one-to-one devices. A VPS oﬀers privacy without forcing users to accommodate a specific physical device.

### Proxy Gateway

A proxy gateway is a tool that proxy users create to identify how their activity looks to other web servers. It allows proxy users to see what a regular website would see when they access it – without the risk of compromising the proxy itself in the process.

Using a proxy gateway, you can check if your web activity is truly anonymous before actually trying to access other websites. This is an important step when engaging in delicate tasks.

### BotNet

If you’re wondering why web administrators are so reluctant to let proxy users access their websites, botnets are the answer. A botnet is a collection of hijacked or illegitimately-obtained devices under the control of a single owner with unauthorized access. They are often used to hack websites, perform DDOS attacks , and commit cybercrime. Note: these are often confused with legitimate proxy server networks.

Functionally, there is no reliable way for a web administrator to tell the diﬀerence between the legitimate use of proxies for data gathering and illegal botnet activity. This is why marketers, journalists, and data scientists who rely on web scraping to gather data have to take so many steps to hide their activity using proxies.