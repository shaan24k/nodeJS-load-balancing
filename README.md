load Balancing NodeJs apps using Nginx

Make multiple nodeJs instance and access on i.p / domain 

If A instance is busy then the request will go to B and B also busy then request move to C vice versa.

Steps to be follow

    1.  $ sudo nano /etc/nginx/sites-available/default  # Edit nginx default file and pase below code



    
        upstream node_cluster {
            server 127.0.0.1:3001;  #Node.js instance 1
            server 127.0.0.1:3002;  #Node.js instance 2
            server 127.0.0.1:3003;  #Node.js instance 3
            }

        server {
            
            listen 80 default_server;
             
            server_name localhost;

            location / {
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-NginX-Proxy true;

                    proxy_pass http://node_cluster/;
                    proxy_redirect off;
            }
        }




    2. $ sudo service nginx restart  # restart the nginx for reflect the changes on server
    3. $ Run node server.js  # open the i.p/domain on browser refresh page multiple times port will change


 

