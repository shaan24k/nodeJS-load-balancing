Vagrant.configure(2) do |config|  
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo add-apt-repository ppa:nginx/stable
    sudo apt-get install -y software-properties-common
    sudo apt-get update
    sudo apt-get install -y nginx

    curl -sL https://deb.nodesource.com/setup | sudo bash -
    sudo apt-get install -y nodejs
  SHELL
end  