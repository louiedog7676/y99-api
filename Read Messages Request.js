//THIS IS AN EXAMPLE
//should be sent to api2.y99.in/whatsup

POST /api.vf.random/api.php/public/fetch HTTP/1.1 //request protocol
Host: api2.y99.in //says where the api request will go
sec-ch-ua: "Not_A Brand";v="99" //might not be necessary?
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryAjBr6h4yF8CPNxOc // you will need to update this and all other WebKitFormBoundaries 
Origin: https://y99.in
Accept-Encoding: gzip, deflate, br, zstd //this is mainly for files, I believe some of them were required but it's easiest to leave them all

------WebKitFormBoundaryAjBr6h4yF8CPNxOc
Content-Disposition: form-data; name="auth" //this is your authorization token, can get it from any network request.

8b49bc7aa0b9aee9c4eaef5916c09078073abd3df7e20ec186a302f688fe971f
------WebKitFormBoundaryAjBr6h4yF8CPNxOc
Content-Disposition: form-data; name="room_id" //this will be the way that you can specify what room you want it to read from

1540231
------WebKitFormBoundaryAjBr6h4yF8CPNxOc
Content-Disposition: form-data; name="pageUp" //I believe this changes how much it loads, but increasing makes response time take upwards of seconds.

1
------WebKitFormBoundaryAjBr6h4yF8CPNxOc
Content-Disposition: form-data; name="mode"

public //I have learned that private and system modes also exist. With system letting you read the logs I believe but it may be on another api url
------WebKitFormBoundaryAjBr6h4yF8CPNxOc--
