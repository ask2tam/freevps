#!/bin/bash

while true
do
nohup echo $(date +%x_%r) >> reportme &
sleep 30
done
