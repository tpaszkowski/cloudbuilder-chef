#!/bin/bash

RABBITMQ_SERVER_ROLE=rabbitmq-server
KEYSTONE_SERVER_ROLE=keystone

if [ "$1" == "env" ] ; then
	knife environment from file openSUSE-Cloud.env.js
        knife role create keystone
        knife role create rabbitmq-server
fi
knife node from file linux-pdfy-node.js
