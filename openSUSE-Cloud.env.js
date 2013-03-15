{
  "name": "openSUSE-cloud",
  "description": "",
  "default_attributes": {
    "queue": {
      "host": "127.0.0.1",
      "port": "5672",
      "username": "guest",
      "vhost": "/"
    },
    "glance" : {
     "image_upload" : true
    },
    "keystone": {
      "verbose": true,
      "debug": true
    },
    "openstack": {
      "developer_mode": true,
      "release": "master",
      "endpoints": {
        "identity-api": {
          "scheme": "http"
        },
        "identity-admin": {
          "scheme": "http"
        },
        "compute-api": {
          "scheme": "http"
        },
        "image-api": {
          "scheme": "http"
        },
        "image-registry": {
          "scheme": "http"
        }
      }
    }
  }
}
