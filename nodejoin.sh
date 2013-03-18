#!/bin/bash

# SLE11 stuff
#zypper ar http://download.opensuse.org/repositories/systemsmanagement:/crowbar:/2.0/SLE_11_SP2/ systemsmanagement:crowbar:2.0:SLE_11_SP2
#zypper ar http://download.opensuse.org/repositories/devel:/languages:/ruby/SLE_11_SP2/ devel:languages:ruby


#zypper ar http://download.opensuse.org/repositories/systemsmanagement:/chef:/10/openSUSE_12.2/ systemsmanagement:chef:10:openSUSE_12.2
zypper ar http://download.opensuse.org/repositories/systemsmanagement:/chef:/10:/staging/openSUSE_12.2/ systemsmanagement:chef:10:staging:openSUSE_12.2
zypper in rubygem-chef
curl -s http://172.31.0.55/validation.pem -o /etc/chef/validation.pem
cat /etc/chef/chef.rb | sed '/chef.example.com/s//172.31.0.55/'  > /etc/chef/client.rb

