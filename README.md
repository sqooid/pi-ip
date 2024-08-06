# Client usage

Copy `./scripts/pi-ip` into the `/etc/dhcp/dhclient-exit-hooks.d/` directory of the pi (yes, no file extension).
Give it execute permissions with `chmod +x /etc/dhcp/dhclient-exit-hooks.d/pi-ip`.
The ip should then be updated at https://pi-ip.pages.dev whenever it changes
