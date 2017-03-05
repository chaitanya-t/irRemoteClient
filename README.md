# irRemoteClient


<h3>Getting Started</h3><br>
A node.js module containing client  part of the InfraRed Remote Control
<br>
<br>
<h3>Prerequisites</h3><br>
Node.js - Download & Install Node.js and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.
MQTBroker- Setup and Host <a href="https://github.com/iotwale/irRemoteServer">irRemoteServer</a> on a cloud server 
<br>
<br>
<h3>Installation</h3><br>
At first install LIRC on RPi:<br>

_sudo apt-get install lirc_<br>

Add this to your /etc/modules file:<br>

_lircdev<br>
lircrpi gpioinpin=17 gpiooutpin=18<br>_<br>
<b>Note:</b>gpio_in_pin is for IR receiver to register specific commands and gpio_out_pin is for IR transmitter to send signals to control the device.
<br><br>
edit /etc/lirc/hardware.conf file and update following parameters:
<br>
_LIRCDARGS="--uinput"<br>
DRIVER="default"<br>
DEVICE="/dev/lirc0"<br>
MODULES="lircrpi<br>
<br>_

Restart RPi once you have made all these changes.
<br>

Edit your /boot/config.txt file and add:
<br>

_dtoverlay=lirc-rpi,gpioinpin=17,gpiooutpin=18_
<br><br>
Now setup irRemoteClient Module from git.

_git clone <a href="https://github.com/iotwale/irRemoteClient">irRemoteClient</a><br>
node client.js_
<br>
<br>
<h3>Deployment</h3><br>
Once Installation is done, create a systemctl daemon for starting the nodejs server on boot.
<br><br>
<h3>Built With</h3><br>
<a href ="https://nodejs.org/en/">Node.js</a>
<br><br>
<h3>License</h3><br>
This project is licensed under the MIT License - see the <a href="https://github.com/iotwale/irRemoteClient/blob/master/LICENSE.md">LICENSE.md</a> file for details
