{
  "name": "linux-pdfy",
  "chef_environment": "openSUSE-cloud",
  "normal": {
    "tags": [

    ]
  },
  "run_list": [
    "role[rabbitmq-server]", "role[keystone]", "role[quantum]", "recipe[cloudbuilder]"
  ]
}
