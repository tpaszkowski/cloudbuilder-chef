{
  "name": "openSUSE-cloud",
  "description": "",
  "cookbook_versions": {
  },
  "json_class": "Chef::Environment",
  "chef_type": "environment",
  "default_attributes": {
    "glance": {
      "image_upload": true
    },
    "mysql": {
      "bind_address": "127.0.0.1"
    },
    "queue": {
      "host": "127.0.0.1",
      "port": "5672",
      "username": "guest",
      "vhost": "/"
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
        },
        "quantum": {
          "scheme": "http"
        }
      }
    }
  },
  "override_attributes": {
  }
}
